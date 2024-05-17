import React from "react";
import './mypage-delivery-button.scss';
import {useNavigate} from "react-router-dom";

function MypageDeliveryBtn({myPageFundingItemDtoList}) {

    const navigate = useNavigate();

    const handleDeliveryButtonClick = () => {
        navigate('/funding/pay', { state: {myPageFundingItemDtoList}});
        console.log(myPageFundingItemDtoList)
    };

    return (
        <button className="mypage-delivery-btn" onClick={handleDeliveryButtonClick} >배송지 입력하기</button>
    );
}

export default MypageDeliveryBtn;