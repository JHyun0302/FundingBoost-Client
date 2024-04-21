import React, { useState, useEffect } from "react";
import "./singlegifthubitem.scss";
import Checkbox from "../../atoms/checkbox/checkbox";
import axios from 'axios';

export default function SingleGIFHubItem() {
    const [giftData, setGiftData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://8269110c-f6c2-4f52-bca9-81b9e076730c.mock.pstmn.io/api/v1/gifthub');
                setGiftData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="giftbox-total-container">
            {giftData && (
                <div className="checkbox-item-container">
                    <Checkbox />

                    <div className="FundingRegistItem">
                        <img src={giftData.itemImageUrl} alt={giftData.itemName} className="sequenceGroup" />
                        <div className="giftbox-item-container">
                            <div className="giftbox-item-title">
                                {giftData.itemName}
                            </div>
                            <button className="delete-button">삭제</button>
                            <div className="giftbox-option-container">
                                <div className="giftbox-item-optionGroup">
                                    <div className="giftbox-item-option">옵션</div>
                                </div>
                                <div className="giftbox-item-optionName">{giftData.optionName}</div>
                            </div>
                            <div className="quantity-container">
                                <span className="quantity-text">수량 </span>
                                <span className="quantity-number">{giftData.quantity}</span>
                                <button className="change-button">변경</button>
                            </div>
                            <div className="giftbox-item-price">{giftData.itemPrice} 원</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
