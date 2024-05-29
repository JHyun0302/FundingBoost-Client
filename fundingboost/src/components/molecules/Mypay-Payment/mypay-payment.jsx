import React, { useState } from "react";
import "./mypay-payment.scss";
import axios from "axios";

export default function MyPayPoint ({ collectPrice, point, myPageFundingItemDtoList, onUpdateUsingPoint }) {
    const itemPrice = myPageFundingItemDtoList ? myPageFundingItemDtoList.itemPrice : 0;
    const [inputAmount, setInputAmount] = useState("");
    const [usingPoint, setUsingPoint] = useState(0); // usingPoint 상태 추가

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputAmount(value);
        setUsingPoint(Number(value) || 0); // usingPoint 업데이트
        onUpdateUsingPoint(Number(value) || 0); // 부모 컴포넌트로 usingPoint 업데이트
    };

    const handleUseAllPoints = () => {
        setInputAmount(point.toString());
        setUsingPoint(point); // usingPoint 업데이트
        onUpdateUsingPoint(point); // 부모 컴포넌트로 usingPoint 업데이트
    };

    const safeCollectPrice = collectPrice || 0;

    const calculateTotalPrice = () => {
        const usedPoints = isNaN(parseFloat(inputAmount)) ? 0 : parseFloat(inputAmount);
        const totalPrice = itemPrice - usedPoints - safeCollectPrice;
        return totalPrice > 0 ? totalPrice.toLocaleString() : "0";
    };

    const totalPrice = calculateTotalPrice();

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
                            <div className="text-price">{itemPrice.toLocaleString()} 원</div>
                        </div>
                        <div className="MyPayFundingPaymentInformationGroup">
                            <div className="MyPayFundingPaymentInformationText">사용한 포인트</div>
                            <div className="MyPayFundingPaymentInformationOverlap-group">
                                <div className="text-price">- {inputAmount || "0"} 원</div> {/* 입력된 금액을 표시 */}
                            </div>
                        </div>
                        <div className="MyPayFundingPaymentInformationGroup">
                            <div className="MyPayFundingPaymentInformationText">펀딩 된 금액</div>
                            <div className="MyPayFundingPaymentInformationOverlap-group">
                                <div className="text-price">- {safeCollectPrice.toLocaleString()} 원</div>
                            </div>
                        </div>
                    </div>
                    <div className="line" alt="Line"/>
                    <div className="total-price">{totalPrice} 원</div>
                </div>
                <button className="pay-request-button"> 결제하기 </button>
            </div>
        </div>
    );
};
