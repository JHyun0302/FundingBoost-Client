import React, { useState, useEffect } from 'react';
import './shopping.scss';
import axios from "axios";
import ShoppingSingleItem from "../../../atoms/shopping-single-item/shopping-single-item";
import ShoppingCategory from "../../../atoms/Shopping-Item-Category/shopping-item-category";

const ShoppingPane = () => {
    const [itemData, setItemData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('전체');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let accessToken = "";
                if(localStorage.getItem('accessToken') != null){
                    accessToken = localStorage.getItem('accessToken');
                }
                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/items`, {
                    responseType: 'json',
                    headers: ({
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`,
                        "Access-Control-Allow-Origin": "http://localhost:3000/",
                        "Access-Control-Allow-Credentials": true
                    }),
                });
                setItemData(response.data.data);
            } catch (error) {
                console.error("Error data:", error);
            }
        };
        fetchData();
    }, []);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const filteredItems = selectedCategory === '전체'
        ? itemData
        : itemData.filter(item => item.category === selectedCategory);

    return(
        <div className="shopping-container">
            <div className="ranking-item-area">
                <ShoppingCategory selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect}/>
                <div className="shopping-item-list-single">
                    {filteredItems && filteredItems.map((product, index) => (
                        <div className="shopping-single-item" key={index}>
                            <ShoppingSingleItem product={product} key={index}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShoppingPane;
