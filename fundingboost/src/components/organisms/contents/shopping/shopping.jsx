import React, { useState, useEffect, useRef } from 'react';
import './shopping.scss';
import axios from "axios";
import ShoppingSingleItem from "../../../atoms/shopping-single-item/shopping-single-item";
import ShoppingCategory from "../../../atoms/Shopping-Item-Category/shopping-item-category";

const ShoppingPane = () => {
    const [itemData, setItemData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({ name: '전체', param: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0); // 페이지 번호 상태 추가
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const loader = useRef(null);

    const fetchData = async (category, currentPageParam) => {
        if (isLoading) return;
        setIsLoading(true);

        try {
            let accessToken = localStorage.getItem('accessToken') || "";

            const url = `http://localhost:8080/api/v3/items?category=${category.param}&page=${currentPageParam}`;
            // const url = `${process.env.REACT_APP_FUNDINGBOOST}/items?category=${category.param}${lastItemIdParam ? `&lastItemId=${lastItemIdParam}` : ''}`;


            const response = await axios.get(url, {
                responseType: 'json',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                    "Access-Control-Allow-Origin": "http://localhost:3000/",
                    "Access-Control-Allow-Credentials": true
                },
            });

            const data = response.data;
            console.log(url)
            console.log(data)

            if (data && data.data && Array.isArray(data.data.content)) {
                setItemData(prev => isFirstLoad ? data.data.content : [...prev, ...data.data.content]);
                setIsFirstLoad(false);
                setCurrentPage(prevPage => prevPage + 1); // 현재 페이지 업데이트
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
        setCurrentPage(0); // 선택된 카테고리가 변경될 때 페이지를 0으로 리셋
        fetchData(selectedCategory, 0);
    }, [selectedCategory]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoading) {
                fetchData(selectedCategory, currentPage);}
        });

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, [isLoading, currentPage, selectedCategory]);  // currentPage를 의존성 배열에 추가

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
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
