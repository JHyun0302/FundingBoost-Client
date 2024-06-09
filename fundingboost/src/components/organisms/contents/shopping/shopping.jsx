import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './shopping.scss';
import axios from "axios";
import ShoppingSingleItem from "../../../atoms/shopping-single-item/shopping-single-item";
import ShoppingCategory from "../../../atoms/Shopping-Item-Category/shopping-item-category";

const ShoppingPane = () => {
    const [itemData, setItemData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({ name: '전체', param: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const loader = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const newSearchQuery = searchParams.get('search');
        console.log('Search Query:', newSearchQuery);

        if (newSearchQuery !== searchQuery) {
            setSearchQuery(newSearchQuery || '');
            setItemData([]);
            setSelectedCategory({ name: '전체', param: '' });
            setCurrentPage(0);
            setIsFirstLoad(true);
        }
    }, [location.search, searchQuery]);

    const fetchData = async (category, currentPageParam, searchQueryParam) => {
        if (isLoading) return;
        setIsLoading(true);

        try {
            let accessToken = localStorage.getItem('accessToken') || "";
            let url = `https://k14f4ad097352a.user-app.krampoline.com/api/v3/items?category=${category.param}&page=${currentPageParam}`;

            if (searchQueryParam) {
                url = `https://k14f4ad097352a.user-app.krampoline.com/api/v3/search?keyword=${searchQueryParam}&page=${currentPageParam}`;
            }

            const response = await axios.get(url, {
                responseType: 'json',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                    "Access-Control-Allow-Origin": "https://k14f4ad097352a.user-app.krampoline.com/",
                    "Access-Control-Allow-Credentials": true
                },
            });

            const data = response.data;
            console.log(url);
            console.log(data);

            if (data && data.data && Array.isArray(data.data.content)) {
                setItemData(prev => isFirstLoad ? data.data.content : [...prev, ...data.data.content]);
                setIsFirstLoad(false);
                setCurrentPage(prevPage => prevPage + 1);
            } else {
                console.error("Error: Unexpected response structure", data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setItemData([]);
        setCurrentPage(0);
        fetchData(selectedCategory, 0, searchQuery);
    }, [selectedCategory, searchQuery]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoading) {
                fetchData(selectedCategory, currentPage, searchQuery);
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
    }, [isLoading, currentPage, selectedCategory, searchQuery]);

    const handleCategorySelect = (category) => {
        setSearchQuery('');
        setSelectedCategory(category);
        setItemData([]);
        setCurrentPage(0);
        setIsFirstLoad(true);
        fetchData(category, 0, '');
    };

    return (
        <div className="shopping-container">
            <div className="ranking-item-area">
                <ShoppingCategory onCategorySelect={handleCategorySelect} />
                <div className="shopping-item-list-single">
                    {itemData.length > 0 ? (
                        itemData.map((product, index) => (
                            <div className="shopping-single-item" key={index}>
                                <ShoppingSingleItem product={product} />
                            </div>
                        ))
                    ) : (
                        <div>Item Loading...</div>
                    )}
                    <div ref={loader} style={{ height: "100px", margin: "0 auto" }}></div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingPane;
