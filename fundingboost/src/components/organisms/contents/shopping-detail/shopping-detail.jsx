import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './shopping-detail.scss';
import axios from 'axios';
import ShoppingDetailItem from "../../../atoms/Shopping-Detail-Title/shopping-detail-title";
import ShoppingDetailInfo from "../../../atoms/Shopping-Detail-Info/shopping-detail-info";

const ShoppingDetailPane = () => {
    const [itemData, setItemData] = useState([]);
    const { itemId } = useParams();



    useEffect(() => {
        const fetchFundingItemData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/items/items/${itemId}`, {
                    responseType: 'json',
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "http://localhost:3000/",
                        'Access-Control-Allow-Credentials': true,
                        'ngrok-skip-browser-warning': true,
                    }
                });
                setItemData(response.data.data);
                console.log('GET 결과:', response.data);
            } catch (error) {
                console.error('GET 에러:', error);
            }
        };

        fetchFundingItemData();
    }, []);

    return(
        <div className="shopping-detail-container">
            <ShoppingDetailItem itemName={itemData.itemName} itemThumbnailImageUrl={itemData.itemThumbnailImageUrl} itemPrice={itemData.itemPrice} option={itemData.option} />
            <ShoppingDetailInfo/>
        </div>
    );
};

export default ShoppingDetailPane;
