import React, { useState, useEffect } from 'react';
import './shopping.scss';
import axios from "axios";
import ShoppingSingleItem from "../../../atoms/shopping-single-item/shopping-single-item";
import ShoppingCategory from "../../../atoms/Shopping-Item-Category/shopping-item-category";

const ShoppingPane = () => {
    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');

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
                console.log("response ->", response.data.data);
            } catch (error) {
                console.error("Error data:", error);
            }
        };
        fetchData();
    }, []);

    return(
        <div className="shopping-container">
            <div className="ranking-item-area">
                <ShoppingCategory/>
                <div className="shopping-item-list-single">
                    {itemData && itemData.map((product, index) => (
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
