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
                const accessToken = localStorage.getItem('accessToken');

                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/items/${itemId}`, {
                    responseType: 'json',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${accessToken}`,
                        "Access-Control-Allow-Origin": "http://localhost:3000/",
                        'Access-Control-Allow-Credentials': true
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
            <ShoppingDetailItem itemId = {itemId} itemName={itemData.itemName} itemThumbnailImageUrl={itemData.itemThumbnailImageUrl} itemPrice={itemData.itemPrice} option={itemData.option} />
            <ShoppingDetailInfo/>
        </div>
    );
};

export default ShoppingDetailPane;