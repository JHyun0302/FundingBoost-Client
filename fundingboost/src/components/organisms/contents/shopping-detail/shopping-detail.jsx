import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './shopping-detail.scss';
import axios from 'axios';
import ShoppingDetailItem from "../../../atoms/Shopping-Detail-Title/shopping-detail-title";
import ShoppingDetailInfo from "../../../atoms/Shopping-Detail-Info/shopping-detail-info";

const getStoredAccessToken = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        return '';
    }

    const trimmedToken = token.trim();
    if (!trimmedToken || trimmedToken === 'null' || trimmedToken === 'undefined') {
        return '';
    }

    try {
        const [, payload] = trimmedToken.split('.');
        if (!payload) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return '';
        }

        const normalizedPayload = payload.replace(/-/g, '+').replace(/_/g, '/');
        const decodedPayload = JSON.parse(atob(normalizedPayload));
        if (decodedPayload?.exp && Date.now() >= decodedPayload.exp * 1000) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return '';
        }
    } catch (error) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        return '';
    }

    return trimmedToken;
};

const ShoppingDetailPane = () => {
    const [itemData, setItemData] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        const fetchFundingItemData = async () => {
            try {
                const apiV3Base = process.env.REACT_APP_FUNDINGBOOST_V3 || "/api/v3";
                const accessToken = getStoredAccessToken();
                const headers = {
                    'Content-Type': 'application/json',
                };

                if (accessToken) {
                    headers.Authorization = `Bearer ${accessToken}`;
                }

                let response;
                try {
                    response = await axios.get(`${apiV3Base}/items/${itemId}`, {
                        responseType: 'json',
                        headers,
                    });
                } catch (error) {
                    if (error?.response?.status !== 401 || !accessToken) {
                        throw error;
                    }

                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');

                    response = await axios.get(`${apiV3Base}/items/${itemId}`, {
                        responseType: 'json',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                }

                setItemData(response.data.data);
                console.log('GET 결과:', response.data);
                console.log(response);
            } catch (error) {
                console.error('GET 에러:', error);
            }
        };

        fetchFundingItemData();
    }, [itemId]);

    return(
        <div className="shopping-detail-container">
            <ShoppingDetailItem
                itemId={itemId}
                itemName={itemData.itemName}
                itemThumbnailImageUrl={itemData.itemThumbnailImageUrl}
                itemPrice={itemData.itemPrice}
                options={itemData.options}
                bookmark={itemData.bookmark}
            />
            <ShoppingDetailInfo/>
        </div>
    );
};

export default ShoppingDetailPane;
