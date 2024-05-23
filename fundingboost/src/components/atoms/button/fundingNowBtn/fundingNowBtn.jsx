import React from 'react';
import Button from "react-bootstrap/Button";
import './fundingNowBtn.scss'
import {useNavigate} from "react-router-dom";


function FundingNowBtn({selectOption, itemId, itemName, itemPrice, itemThumbnailImageUrl}) {
    const navigate = useNavigate();


    const fundingNowBtnClick = () => {
        const fundingNowData= {
            optionName : selectOption,
            itemName : itemName,
            itemPrice : itemPrice,
            itemImageUrl : itemThumbnailImageUrl,
            itemId:itemId
        };
        navigate(`/funding`, {state: {fundingNowData}});
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