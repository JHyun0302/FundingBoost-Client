import React, { useState } from "react";
import "./shopping-detail-menu.scss";
import Form from 'react-bootstrap/Form';
import share from "./../../../assets/share.svg";
import wish from "./../../../assets/emptyheart.svg";
import clickwish from "./../../../assets/fillheart.svg";
import gifthub from "./../../../assets/gifthub.svg";
import { useNavigate } from 'react-router-dom';


export default function ShoppingDetailOptionBtn({itemId, itemPrice, option}) {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleGiftHubClick = () => {
        const memberId = 11;
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
                memberId: memberId,
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
                    <div className="itemPrice">{itemPrice} 원</div>
                </div>
                <div className="shopping-detail-column">
                    <div className="selectOptionPositon">
                        <Form.Select aria-label="Default select example">
                            <option>상품 옵션을 선택해주세요.</option>
                            <option value="1">{option}</option>
                            {/*<option value="2">Two</option>*/}
                            {/*<option value="3">Three</option>*/}
                        </Form.Select>
                    </div>
                </div>
                <div className="div-second-btn-wrapper">
                    <div className="div-wrapper">
                        <div className="shareIconWrapper">
                            <img className="shareIcon" alt="shareIcon" src={share}/>
                        </div>
                    </div>
                    <div className="heartIconPosition">
                        <div className="heartIconWrapper">
                            <img className="heartIcon" alt="heartIcon" src={wish}/>
                        </div>
                    </div>
                    <div className="shareAndHeartAndPurchase">
                        <div className="purchaseBox">
                            <button className="purchaseBtn">구매하기</button>
                        </div>
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
                        <div className="fundingBox">
                            <button className="fundingBtn">바로 펀딩하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
