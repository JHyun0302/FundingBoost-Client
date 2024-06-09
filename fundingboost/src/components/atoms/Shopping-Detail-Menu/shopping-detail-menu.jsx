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
import GifthubModal from "../gifthubModal/gifthubModal";
import NonMemberModal from "../shoppingDetail-nonMemberModal/shoppingDetail-nonMemberModal";
import ShoppingDetailDefaultText from "../Shopping-Detail-defaultText/shopping-Detail-defaultText";

export default function ShoppingDetailOptionBtn({itemId, itemName, itemPrice, option, itemThumbnailImageUrl, bookmark}) {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [selectOption, setSelectOptions] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showNonMemberModal, setShowNonMemberModal] = useState(false);

    // 계속 소핑하기
    const closeModal = () => {
        setShowModal(false);
        navigate();
    };
    // 모달창 마이페이지 이동버튼
    const gifthubBtnModal = () => {
        setShowModal(false);
        navigate('/gifthub');
    };

    //위시 모달 상태 관리
    const openNonMemberModal = () => {
        setShowNonMemberModal(true);
    };
    const closeNonMemberModal = () => {
        setShowNonMemberModal(false);
    };



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

        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
            openNonMemberModal();
            return;
        }

        if (!selectOption || selectOption === "상품 옵션을 선택해주세요.") {
            alert('상품 옵션을 선택해주세요');
            return;
        }


        fetch(`${process.env.REACT_APP_FUNDINGBOOST}/gifthub/${itemId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${accessToken}`,
                "Access-Control-Allow-Origin": "https://k14f4ad097352a.user-app.krampoline.com/",
                'Access-Control-Allow-Credentials': true

            },
            body: JSON.stringify({
                quantity: quantity
            }),
        })
            .then(response => {
               setShowModal(true);
            })
            .catch(error => {
                // Handle error as needed
                console.error('Error:', error);
            });
    };

    const localPrice = itemPrice !== undefined ? itemPrice.toLocaleString() : '';

    return (
        <div className="shopping-menu-wrapper">
            <NonMemberModal message="로그인이 필요한 서비스입니다." onClose={closeNonMemberModal} show={showNonMemberModal} />
            <GifthubModal itemName={itemName} show={showModal} onClose={closeModal} onGiftHub={gifthubBtnModal} message="Gifthub에 상품이 담겼습니다."  />
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
                <div className="shopping-second-line-wrapper">
                <div className="div-second-btn-wrapper">
                    <div className="div-wrapper">
                        <div className="shareIconWrapper">
                            <img className="shareIcon" alt="shareIcon" src={share}/>
                        </div>
                    </div>

                </div>
                <div className="heartIconPosition">
                    <WishBtn itemId={itemId} bookmark={bookmark}  onNonMemberModalOpen={openNonMemberModal} />
                </div>

                <div className="shareAndHeartAndPurchase">
                    <PurchaseBtn
                        itemId={itemId}
                        itemThumbnailImageUrl={itemThumbnailImageUrl}
                        selectOption={selectOption}
                        itemPrice={itemPrice}
                        itemName={itemName}
                        quantity={quantity}
                        onNonMemberModalOpen={openNonMemberModal}
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
                        quantity={quantity}
                        onNonMemberModalOpen={openNonMemberModal}
                    />
                </div>
                </div>
                <div className="shoppingDetailBox-text">
                    <ShoppingDetailDefaultText/>
                </div>

            </div>
        </div>
    );
}
