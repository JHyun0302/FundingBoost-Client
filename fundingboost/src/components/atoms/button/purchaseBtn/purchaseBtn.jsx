import React from 'react';
import Button from 'react-bootstrap/Button';
import './purchaseBtn.scss'
import gifthub from "../../../../assets/gifthub.svg";
import {useNavigate} from "react-router-dom";

const PurchaseBtn = ({itemId, itemName, itemPrice, itemThumbnailImageUrl, selectOption}) => {
    const navigate = useNavigate();

    const purchaseBtnClick = () => {
        const itemPurchase= {
            optionName : selectOption,
            itemName : itemName,
            itemPrice : itemPrice,
            itemImageUrl : itemThumbnailImageUrl,
            itemId:itemId
        };
        navigate(`/order/pay`, {state: {itemPurchase}});
    };

    return (
        <div className="purchaseBox">
            <Button className="purchaseBtn" onClick={purchaseBtnClick}>구매하기</Button>
        </div>
    );
};

export default PurchaseBtn;