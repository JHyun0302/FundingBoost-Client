import React from "react";
import "./pointUse.scss";

export default function FriendFundingMyPoint({friendFundingPayData}) {

    if (!friendFundingPayData) {
        return 0;
    }
    return (
        <div className="my-point">
            <div className="my-point-first-row">
                <div className="my-point-fixed-text">포인트</div>
                <input className="my-point-input"
                       type="text"
                       value={"0"}/>
                <p className="my-point-unit">P</p>
                <button className="my-point-use-all-point">전액사용</button>
            </div>
            <p className="my-point-use-usable-point">사용 가능 포인트 {friendFundingPayData.myPoint} P</p>
        </div>
    );
};