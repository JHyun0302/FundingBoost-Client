import React from "react";
import "./mypage-myfunding-singleitem.scss";
import Gauge from "../../atoms/gauge-bar/gauge-bar";
import MypageDeliveryButton from "../buttons/Mypage-Myfunding-Button/mypage-delivery-button/mypage-delivery-button";
import MypageCompleteButton from "../buttons/Mypage-Myfunding-Button/mypage-complete-button/mypage-complete-button";

const MyFundingSingleItem = ({ item }) => {
    return (
        <div className="mypage-myfunding-box">
            <div className="mypage-myfunding-view">
                <img className="mypage-myfunding-image" alt="이미지" src={item.itemImageUrl} />
                <div className="mypage-myfunding-text-wrapper-2">{item.itemPercent}%</div>
                <Gauge progress={item.itemPercent} />
                <div className="mypage-myfunding-text-wrapper-3">{item.itemName}</div>
                <div className="mypage-myfunding-group">
                    <div className="mypage-myfunding-overlap-group">
                        <div className="mypage-myfunding-text-wrapper">옵션</div>
                    </div>
                    <div className="mypage-myfunding-div">{item.optionName}</div>
                </div>
                <div className="mypage-myfunding-text-wrapper-4">{item.itemPrice}원</div>
            </div>
        </div>
    );
};

export default MyFundingSingleItem;
