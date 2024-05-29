import React, { useState, useEffect } from "react";
import "./orderpaypayment.scss";

export default function OrderpayPoint({ point, selectedItems, onUpdateUsingPoint, totalPrice }) {
    const [inputAmount, setInputAmount] = useState("0");
    const [usingPoint, setUsingPoint] = useState(0);

    useEffect(() => {
        if (selectedItems && selectedItems.itemPrice) {
            // 설정된 기본값을 0으로 유지
            setInputAmount("0");
        } else {
            console.error("selectedItems or itemPrice is missing or invalid", selectedItems);
        }
    }, [selectedItems]);

    const handleInputChange = (event) => {
        const value = Number(event.target.value);
        const maxPoint = Math.min(point, totalPrice); // 사용할 수 있는 최대 포인트는 포인트와 상품 가격 중 작은 값

        if (value > maxPoint) {
            setInputAmount(maxPoint.toString());
        } else if (value < 0) {
            setInputAmount("0");
        } else {
            setInputAmount(value.toString());
        }

        setUsingPoint(value || 0);
        onUpdateUsingPoint(value || 0);
    };

    const handleUseAllPoints = () => {
        const maxPoint = Math.min(point, totalPrice); // 사용할 수 있는 최대 포인트는 포인트와 상품 가격 중 작은 값
        setInputAmount(maxPoint.toString());
        setUsingPoint(maxPoint); // usingPoint 업데이트
        onUpdateUsingPoint(maxPoint); // 부모 컴포넌트로 usingPoint 업데이트
    };

    const calculateTotalPrice = () => {
        const usedPoints = isNaN(parseFloat(inputAmount)) ? 0 : parseFloat(inputAmount);
        const remainingPrice = totalPrice - usedPoints;
        return remainingPrice > 0 ? remainingPrice.toLocaleString() : "0";
    };

    const remainingPrice = calculateTotalPrice();

    return (
        <div className="MyPayPointBox">
            <div className="MyPayPointView">
                <div className="MyPayPointTitle">포인트</div>
                <div className="MyPayPointGroup">
                    <div className="MyPayPointInput-wrapper">
                        <div className="MyPayPointInput">
                            <input
                                type="text"
                                className="point"
                                placeholder="0"
                                value={inputAmount} // 입력된 금액 표시
                                onChange={handleInputChange} // 입력값 변경 시 핸들러 호출
                            />
                        </div>
                    </div>
                    <div className="MyPayPointText-P">P</div>
                    <div className="MyPayPointButton-group-wrapper">
                        <div className="MyPayPointButton-group">
                            <button className="MyPayPointUse-all-point" onClick={handleUseAllPoints}>전액사용</button>
                        </div>
                    </div>
                </div>
                <p className="MyPayPoint-remain-point">사용 가능 포인트 {point} P</p>
            </div>

            <div className="MyPayFundingPaymentInformationBox">
                <div className="MyPayFundingPaymentInformationView">
                    <div className="MyPayFundingPaymentInformationText">결제정보</div>
                    <div className="line" alt="Line"/>
                    <div className="MyPayFundingPaymentInformationTotal-group">
                        <div className="MyPayFundingPaymentInformationGroup">
                            <div className="MyPayFundingPaymentInformationText">총 상품 금액</div>
                            <div className="text-price">{totalPrice.toLocaleString()} 원</div>
                        </div>
                        <div className="MyPayFundingPaymentInformationGroup">
                            <div className="MyPayFundingPaymentInformationText">사용한 포인트</div>
                            <div className="MyPayFundingPaymentInformationOverlap-group">
                                <div className="text-price">- {inputAmount || "0"} 원</div>
                            </div>
                        </div>

                    </div>
                    <div className="line" alt="Line"/>
                    <div className="total-price">{remainingPrice} 원</div>
                </div>
                <button className="pay-request-button"> 결제하기 </button>
            </div>
        </div>
    );
};
