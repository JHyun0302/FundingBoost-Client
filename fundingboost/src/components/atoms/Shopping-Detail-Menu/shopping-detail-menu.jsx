import React, { useState } from "react";
import "./shopping-detail-menu.scss";
import Form from 'react-bootstrap/Form';
import share from "./../../../assets/share.svg";
import wish from "./../../../assets/emptyheart.svg";
import clickwish from "./../../../assets/fillheart.svg";
import gifthub from "./../../../assets/gifthub.svg";
import { useNavigate } from 'react-router-dom';
import WishBtn  from "../button/wishBtn/wishBtn";
import FundingNowBtn from "../button/fundingNowBtn/fundingNowBtn";
import PurchaseBtn from "../button/purchaseBtn/purchaseBtn";

export default function ShoppingDetailOptionBtn({itemId, itemName, itemPrice, option, itemThumbnailImageUrl, bookmark}) {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [selectOption, setSelectOptions] = useState("");

    const optionChange = (e) =>{
        setSelectOptions(e.target.value);
        console.log(e.target.value);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleGiftHubClick = () => {

        if (!selectOption || selectOption === "상품 옵션을 선택해주세요.") {
            alert('상품 옵션을 선택해주세요');
            return;
        }

        const accessToken = localStorage.getItem('accessToken');

        fetch(`${process.env.REACT_APP_FUNDINGBOOST}/gifthub/${itemId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${accessToken}`,
                "Access-Control-Allow-Origin": "http://localhost:3000/",
                'Access-Control-Allow-Credentials': true

            },
            body: JSON.stringify({
                quantity: quantity
            }),
        })
            .then(response => {
                navigate('/gifthub');
            })
            .catch(error => {
                // Handle error as needed
                console.error('Error:', error);
            });
    };

    const localPrice = itemPrice !== undefined ? itemPrice.toLocaleString() : '';

    return (
        <div className="shopping-menu-wrapper">
            <div className="shoppingDetailOptionBtnBox">
                <div className="quantityAndPrice">
                    <div className="quantity">수량</div>
                    <div className="element">
                        <button className="button-quantity-style" onClick={decreaseQuantity}>-</button>
                        {quantity}
                        <button className="button-quantity-style" onClick={increaseQuantity}>+</button>
                    </div>
                    <div className="itemPrice">{localPrice} 원</div>
                </div>
                <div className="shopping-detail-column">
                    <div className="selectOptionPositon">
                        <Form.Select aria-label="Default select example"  onChange={optionChange}>
                            <option>상품 옵션을 선택해주세요.</option>
                            <option >{option}</option>
                            <option>option=[Color] Black</option>
                            <option>option=[Color] White</option>
                        </Form.Select>
                    </div>
                </div>
                <div class className="shopping-second-line-wrapper">
                <div className="div-second-btn-wrapper">
                    <div className="div-wrapper">
                        <div className="shareIconWrapper">
                            <img className="shareIcon" alt="shareIcon" src={share}/>
                        </div>
                    </div>

                </div>
                <div className="heartIconPosition">
                    <WishBtn itemId={itemId} bookmark={bookmark}/>
                </div>

                <div className="shareAndHeartAndPurchase">
                    <PurchaseBtn
                        itemId={itemId}
                        itemThumbnailImageUrl={itemThumbnailImageUrl}
                        selectOption={selectOption}
                        itemPrice={itemPrice}
                        itemName={itemName}
                        quantity={quantity}
                    />
                </div>
                </div>
                <div className="div-third-btn-wrapper">
                    <div className="gifthubGroup">
                        <button className="gifthubPosition" onClick={handleGiftHubClick}>
                            <img className="gifthubImg" alt="gifthubImg" src={gifthub}/>
                            <div className="gifthubText">GiftHub</div>
                        </button>
                    </div>
                <div className="fundingAndGifthubPosition">
                    <FundingNowBtn
                        itemId={itemId}
                        itemThumbnailImageUrl={itemThumbnailImageUrl}
                        selectOption={selectOption}
                        itemPrice={itemPrice}
                        itemName={itemName}
                        quantity={quantity}/>
                </div>
                </div>
            </div>
        </div>
    );
}
