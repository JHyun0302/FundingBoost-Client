import React from 'react';
import Button from "react-bootstrap/Button";
import './fundingNowBtn.scss'
import {useNavigate} from "react-router-dom";


function FundingNowBtn({selectOption, itemId, itemName, itemPrice, itemThumbnailImageUrl, quantity}) {
    const navigate = useNavigate();

    console.log(quantity);
    const fundingNowBtnClick = () => {
        if(selectOption&&selectOption !=="상품 옵션을 선택해주세요."){
            const fundingNowData= {
                optionName : selectOption,
                itemName : itemName,
                itemPrice : itemPrice,
                itemImageUrl : itemThumbnailImageUrl,
                itemId:itemId,
                quantity : quantity
            };
            navigate(`/funding`, {state: {fundingNowData}});
        }else{
            alert('상품 옵션을 선택해주세요');
        }

    };

    return (
        <div className="fundingNowBtn">
            <div className="fundingBox">
                <Button className="fundingBtn" onClick={fundingNowBtnClick}>바로 펀딩하기</Button>
            </div>
        </div>
    );
}

export default FundingNowBtn;