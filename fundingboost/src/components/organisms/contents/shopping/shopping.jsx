import React, { useState, useEffect, useRef } from 'react';
import './shopping.scss';
import axios from "axios";
import ShoppingSingleItem from "../../../atoms/shopping-single-item/shopping-single-item";
import ShoppingCategory from "../../../atoms/Shopping-Item-Category/shopping-item-category";

const ShoppingPane = () => {
    const [itemData, setItemData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({ name: '전체', param: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [lastItemId, setLastItemId] = useState(null);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const loader = useRef(null);

    const fetchData = async (category, lastItemIdParam) => {
        if (isLoading) return;
        setIsLoading(true);

        try {
            let accessToken = localStorage.getItem('accessToken') || "";
            const params = {
                category: category.param,
                lastItemId: lastItemIdParam
            };

            const url = `${process.env.REACT_APP_FUNDINGBOOST}/items?category=${category.param}${lastItemIdParam ? `&lastItemId=${lastItemIdParam}` : ''}`;

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
            console.log(data)
            if (data && data.data && Array.isArray(data.data.content)) {
                setItemData(prev => isFirstLoad ? data.data.content : [...prev, ...data.data.content]);
                if (data.data.content.length > 0) {
                    setLastItemId(data.data.content[0].itemId - 20);
                }
                setIsFirstLoad(false);
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
        fetchData(selectedCategory, null);
    }, [selectedCategory]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoading && lastItemId !== null && lastItemId > 0) {
                fetchData(selectedCategory, lastItemId);
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
    }, [isLoading, lastItemId, selectedCategory]);

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
