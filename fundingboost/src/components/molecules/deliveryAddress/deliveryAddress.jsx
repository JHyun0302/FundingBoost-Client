import React from "react";
import "./deliveryAddress.scss";

export default function DeliveryAddress({deliveryData}) {
    return (
        <div className="delivery-address">
            <div className="delivery-address-header">
                <div className="delivery-address-name-and-remove">
                    <div className="delivery-address-name">{deliveryData.customerName}</div>
                    <div className="deliver-address-remove">삭제</div>
                </div>
                <div className="delivery-address-address-number">
                    <p className="delivery-address-address">{deliveryData.address}</p>
                    <div className="deliver-address-phone-number">{deliveryData.phoneNumber}</div>
                </div>
            </div>


        </div>
    );
};
