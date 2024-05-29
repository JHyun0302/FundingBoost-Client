import React, { useState, useEffect } from 'react';
import './shopping.scss';
import axios from "axios";
import ShoppingSingleItem from "../../../atoms/shopping-single-item/shopping-single-item";
import ShoppingCategory from "../../../atoms/Shopping-Item-Category/shopping-item-category";

const ShoppingPane = () => {
    const [itemData, setItemData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const fetchData = async (page, category) => {
        try {
            let accessToken = localStorage.getItem('accessToken') || "";
            const params = {
                page: page,
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
                setItemData(data.data.content);
                setTotalPages(data.data.pageable.totalPages || 1);
            } else {
                console.error("Error: Unexpected response structure", data);
                setItemData([]);
                setTotalPages(1);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setItemData([]);
            setTotalPages(1);
        }
    };

    useEffect(() => {
        fetchData(currentPage, selectedCategory);
    }, [currentPage, selectedCategory]);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(0);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
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
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`shopping-pagination-active ${index === currentPage ? 'selected' : ''}`}
                            onClick={() => handlePageChange(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShoppingPane;
