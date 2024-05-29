import React, { useState, useEffect, useRef } from 'react';
import './shopping.scss';
import axios from "axios";
import ShoppingSingleItem from "../../../atoms/shopping-single-item/shopping-single-item";
import ShoppingCategory from "../../../atoms/Shopping-Item-Category/shopping-item-category";

const ShoppingPane = () => {
    const [itemData, setItemData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const loader = useRef(null);

    const fetchData = async (page, category) => {
        if (isLoading) return; // 추가 데이터를 로드하는 동안 중복 요청 방지
        setIsLoading(true);

        try {
            let accessToken = localStorage.getItem('accessToken') || "";
            const params = {
                page: page,
                // lastItemId: 맨 마지막 itemId
                size: 10,
            };
            if (category !== '전체') {
                params.category = category;
            }
            const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/items`, {
                params: params,
                responseType: 'json',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                    "Access-Control-Allow-Origin": "http://localhost:3000/",
                    "Access-Control-Allow-Credentials": true
                },
            });

            const data = response.data;
            if (data && data.data && Array.isArray(data.data.content)) {

                setItemData(prevItems => [...prevItems, ...data.data.content]);
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
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) observer.observe(loader.current);
    }, []);

    useEffect(() => {
        fetchData(currentPage, selectedCategory);
    }, [selectedCategory]);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            fetchData(currentPage, selectedCategory);
        }
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(0);
        setItemData([]); // 카테고리가 변경되면 아이템 데이터 초기화
    };

    return (
        <div className="shopping-container">
            <div className="ranking-item-area">
                <ShoppingCategory selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />
                <div className="shopping-item-list-single">
                    {itemData.length > 0 ? (
                        itemData.map((product, index) => (
                            <div className="shopping-single-item" key={index}>
                                <ShoppingSingleItem product={product} />
                            </div>
                        ))
                    ) : (
                        <div>No items available</div>
                    )}
                </div>
                <div ref={loader} className="loading">Loading...</div>
            </div>
        </div>
    );
};

export default ShoppingPane;
