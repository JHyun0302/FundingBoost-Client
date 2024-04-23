import React, { useState, useEffect } from "react";
import "./singlegifthubitem.scss";
import Checkbox from "../../atoms/checkbox/checkbox";
import axios from 'axios';

export default function SingleGiftHubItem({ onCheckboxChange }) {
    const [giftData, setGiftData] = useState(null);
    const [isChecked, setIsChecked] = useState(false); // 체크박스의 상태를 따로 관리
    const [selectedItems, setSelectedItems] = useState([]); // 선택된 아이템 목록 상태 추가
    const [totalPrice, setTotalPrice] = useState(0); // 총 금액 상태 추가

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

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // 체크박스 상태를 업데이트
        // 선택된 상태에 따라 총 금액을 업데이트하고 선택된 아이템 목록을 관리합니다.
        if (!isChecked) {
            setSelectedItems([...selectedItems, giftData]); // 선택된 아이템 목록에 추가
            setTotalPrice(totalPrice + giftData.itemPrice); // 총 금액에 아이템 가격 추가
        } else {
            setSelectedItems(selectedItems.filter(item => item.itemId !== giftData.itemId)); // 선택 해제된 아이템 제거
            setTotalPrice(totalPrice - giftData.itemPrice); // 총 금액에서 아이템 가격 제거
        }

        // 부모 컴포넌트로 선택된 아이템과 체크 여부를 전달합니다.
        if (onCheckboxChange) {
            onCheckboxChange(giftData, !isChecked); // 체크 상태를 반전해서 전달
        }
    };

    return (
        <div className="giftbox-total-container">
            {giftData && (
                <div className="checkbox-item-container">
                    <Checkbox
                        isSelected={isChecked} // 체크박스의 상태를 전달
                        onCheckboxChange={handleCheckboxChange}
                    />
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
