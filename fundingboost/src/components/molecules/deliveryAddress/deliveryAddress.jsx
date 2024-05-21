import React from "react";
import "./deliveryAddress.scss";

export default function DeliveryAddress({deliveryData}) {
    return (
        <div className="delivery-address">
            <div className="delivery-address-header">
                <div className="delivery-address-name-and-remove">
                    <div className="delivery-address-name">고현우</div>
                    <div className="deliver-address-remove">삭제</div>
                </div>
                <div className="delivery-address-address-number">
                    <p className="delivery-address-address">경기도 성남시 분당구 판교역로 166 카카오 아지트</p>
                    <div className="deliver-address-phone-number">010-2345-6789</div>
                </div>
            </div>


        </div>
    );
};
