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
                const response = await axios.get(`https://fd14-112-218-95-58.ngrok-free.app/api/v1/items/items/${itemId}?memberId=1`, {
                    responseType: 'json',
                    headers: {
                        'Content-Type': 'application/json',
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
