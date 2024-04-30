import React, { useState, useEffect } from "react";
import "./singlegifthubitem.scss";
import "./../../organisms/contents/gifthub/gifthub";
import Checkbox from "../../atoms/checkbox/checkbox";
import axios from 'axios';
import GifthubOptionCount from '../Modal/GifthubOptionCount/gifthuboptioncount'; // 변경

export default function SingleGiftHubItem({ item, onCheckboxChange, onDelete }) {
    const [isChecked, setIsChecked] = useState(false);
    const [showModal, setShowModal] = useState(false);

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
        // // 삭제 버튼 클릭 시 해당 아이템을 삭제
        // try {
        //     // axios를 사용하여 DELETE 요청을 보냅니다.
        //     const response = await axios.delete(`https://localhost:8080/api/v1/gifthub/${item.gifthubItemId}`, {
        //         headers: {
        //             Authorization: `Bearer <access_token>` // 여기에 실제 엑세스 토큰 insert
        //         }
        //     });
        //
        //     // 삭제 요청이 성공하면 onDelete 함수를 호출하여 아이템을 삭제합니다.
        //     if (onDelete) {
        //         onDelete(item);
        //     }
        // } catch (error) {
        //     console.error("Error deleting item:", error);
        // }
        setIsChecked(false);
        if (onDelete) {
            onDelete(item); // 아이템 삭제를 부모 컴포넌트로 전달
        }
    };

    const handleShowModal = () => {
        setShowModal(true);
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
                            <div className="quantity-number">{item.quantity}</div>
                            <GifthubOptionCount/>
                        </div>
                            <div className="giftbox-item-price">{item.itemPrice} 원</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
