import React from "react";
import "./mypay-delivery-history.scss";

export default function MypayDeliveryHistory ({delivery,  onSelectItem}) {
    const { customerName, address, phoneNumber } = delivery;

    return (
        <div className="MyPayDeliveryBox">
            <div className="MyPayDeliveryView">
                <div className="MyPayDeliveryName">{customerName}</div>
                <p className="MyPayDeliveryAddress">{address}</p>
                <div className="MyPayDeliveryPhoneNumber">{phoneNumber}</div>
                <div className="MyPayDeliveryCheckbox">
                    <button onClick={() => onSelectItem(delivery)} className="MyPayDeliverySelect">선택</button>
                </div>
            </div>
        </div>
    );
};
