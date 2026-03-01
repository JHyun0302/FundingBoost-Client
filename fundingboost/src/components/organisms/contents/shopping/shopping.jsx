import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './shopping.scss';
import axios from "axios";
import ShoppingSingleItem from "../../../atoms/shopping-single-item/shopping-single-item";
import ShoppingCategory from "../../../atoms/Shopping-Item-Category/shopping-item-category";

const getStoredAccessToken = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        return '';
    }

    const trimmedToken = token.trim();
    if (!trimmedToken || trimmedToken === 'null' || trimmedToken === 'undefined') {
        return '';
    }

    try {
        const [, payload] = trimmedToken.split('.');
        if (!payload) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return '';
        }

        const normalizedPayload = payload.replace(/-/g, '+').replace(/_/g, '/');
        const decodedPayload = JSON.parse(atob(normalizedPayload));
        if (decodedPayload?.exp && Date.now() >= decodedPayload.exp * 1000) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return '';
        }
    } catch (error) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        return '';
    }

    return trimmedToken;
};

const ShoppingPane = () => {
    const [itemData, setItemData] = useState([]);
    const [categories, setCategories] = useState([{ name: '전체', param: '' }]);
    const [selectedCategory, setSelectedCategory] = useState({ name: '전체', param: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [hasNext, setHasNext] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const loader = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const newSearchQuery = searchParams.get('search');
        setSearchQuery(newSearchQuery || '');
        setSelectedCategory({ name: '전체', param: '' });
        setItemData([]);
        setCurrentPage(0);
        setHasNext(true);
        setErrorMessage('');
    }, [location.search]);

    const fetchCategories = async () => {
        try {
            const apiV3Base = process.env.REACT_APP_FUNDINGBOOST_V3 || "/api/v3";
            const response = await axios.get(`${apiV3Base}/items/categories`);
            const categoryList = Array.isArray(response?.data?.data)
                ? response.data.data.map((category) => ({ name: category, param: category }))
                : [];

            setCategories([{ name: '전체', param: '' }, ...categoryList]);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const fetchData = async (category, searchQueryParam, page, reset = false) => {
        if (isLoading || (!reset && !hasNext)) return;
        setIsLoading(true);
        setErrorMessage('');

        try {
            const apiV3Base = process.env.REACT_APP_FUNDINGBOOST_V3 || "/api/v3";
            const params = new URLSearchParams();

            if (category.param) {
                params.set('category', category.param);
            }
            params.set('size', '20');
            params.set('page', String(page));

            let url = `${apiV3Base}/items?${params.toString()}`;
            if (searchQueryParam) {
                const searchParams = new URLSearchParams();
                searchParams.set('keyword', searchQueryParam);
                searchParams.set('size', '20');
                searchParams.set('page', String(page));
                url = `${apiV3Base}/search?${searchParams.toString()}`;
            }

            const accessToken = getStoredAccessToken();
            const headers = {
                "Content-Type": "application/json",
            };

            if (accessToken) {
                headers.Authorization = `Bearer ${accessToken}`;
            }

            let response;
            try {
                response = await axios.get(url, {
                    responseType: 'json',
                    headers,
                });
            } catch (error) {
                if (error?.response?.status !== 401 || !accessToken) {
                    throw error;
                }

                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');

                response = await axios.get(url, {
                    responseType: 'json',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            }

            const data = response.data;
            if (data && data.success === false) {
                throw new Error(data?.error?.message || "상품 조회에 실패했습니다.");
            }
            const content = Array.isArray(data?.data?.content) ? data.data.content : null;

            if (!content) {
                throw new Error("Unexpected response structure");
            }

            setItemData((prev) => reset ? content : [...prev, ...content]);
            setHasNext(Boolean(data?.data?.hasNext));
            setCurrentPage(page + 1);
        } catch (error) {
            console.error("Error fetching data:", error);
            setErrorMessage('상품을 불러오지 못했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        setItemData([]);
        setCurrentPage(0);
        setHasNext(true);
        fetchData(selectedCategory, searchQuery, 0, true);
    }, [selectedCategory, searchQuery]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoading && hasNext) {
                fetchData(selectedCategory, searchQuery, currentPage, false);
            }
        });

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, [isLoading, hasNext, currentPage, selectedCategory, searchQuery]);

    const handleCategorySelect = (category) => {
        setSearchQuery('');
        setSelectedCategory(category);
        setItemData([]);
        setCurrentPage(0);
        setHasNext(true);
        setErrorMessage('');
    };

    return (
        <div className="shopping-container">
            <div className="ranking-item-area">
                <ShoppingCategory
                    categories={categories}
                    selectedCategoryName={selectedCategory.name}
                    onCategorySelect={handleCategorySelect}
                />
                <div className="shopping-item-list-single">
                    {itemData.length > 0 ? (
                        itemData.map((product, index) => (
                            <div className="shopping-single-item" key={index}>
                                <ShoppingSingleItem product={product} />
                            </div>
                        ))
                    ) : isLoading ? (
                        <div>Item Loading...</div>
                    ) : errorMessage ? (
                        <div>{errorMessage}</div>
                    ) : (
                        <div>등록된 상품이 없습니다.</div>
                    )}
                    <div ref={loader} style={{ height: "100px", margin: "0 auto" }}></div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingPane;
