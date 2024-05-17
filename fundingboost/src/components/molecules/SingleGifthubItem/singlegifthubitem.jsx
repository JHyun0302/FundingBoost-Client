import React, { useState, useEffect } from "react";
import "./singlegifthubitem.scss";
import "./../../organisms/contents/gifthub/gifthub";
import Checkbox from "../../atoms/checkbox/checkbox";
import axios from 'axios';
import GifthubOptionCount from '../Modal/GifthubOptionCount/gifthuboptioncount'; // 변경

export default function SingleGiftHubItem({ item, onCheckboxChange, onDelete }) {
    const [isChecked, setIsChecked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(item.quantity || 1); // 기본값 1
    const itemId = item.itemId;

    useEffect(() => {
        // 컴포넌트가 마운트될 때 아이템의 초기 체크 상태 설정
        setIsChecked(false);
    }, [item]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // 체크 상태를 업데이트

        // 부모 컴포넌트로 선택된 아이템과 체크 여부를 전달
        if (onCheckboxChange) {
            // 변경된 체크 상태와 함께 아이템 정보를 전달
            onCheckboxChange(item, !isChecked); // 체크 상태를 반전해서 전달
        }
    };

    const handleDeleteItem = async () => {
        // 삭제 버튼 클릭 시 해당 아이템을 삭제
        setIsChecked(false);
        if (onDelete) {
            onDelete(item); // 아이템 삭제를 부모 컴포넌트로 전달
        }
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    return (
        <div className="giftbox-total-container">
            <div className="checkbox-item-container">
                <Checkbox
                    isSelected={isChecked} // 체크박스의 상태를 전달
                    onCheckboxChange={handleCheckboxChange}
                />
                <div className="gifthub-fundingRegistItem">
                    <img src={item.itemImageUrl} alt={item.itemName} className="sequenceGroup" />
                    <div className="gifthub-itemDetail">
                        <div className="gifthub-title">{item.itemName}</div>
                        <button className="delete-button" onClick={handleDeleteItem}>삭제</button>
                        <div className="gifthub-optionDetail">
                            <div className="gifthub-optionGroup">
                                <div className="gifthub-option">옵션</div>
                            </div>
                            <div className="gifthub-optionName">{item.optionName}</div>
                            <div className="quantity-container">
                                <div className="quantity-text">수량 </div>
                                <div className="quantity-number">{quantity}</div>
                                <GifthubOptionCount
                                    onQuantityChange={handleQuantityChange}
                                    gifthubItemId={item.gifthubItemId}
                                    itemId={itemId}
                                />
                            </div>
                            <div className="giftbox-item-price">{item.itemPrice} 원</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
