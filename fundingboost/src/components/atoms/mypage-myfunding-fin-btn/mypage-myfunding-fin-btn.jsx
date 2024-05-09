import React from 'react';
import './mypage-myfunding-fin-btn.scss';
import MypageCompleteButton from "../buttons/Mypage-Myfunding-Button/mypage-complete-button/mypage-complete-button";
import MypageDeliveryButton from "../buttons/Mypage-Myfunding-Button/mypage-delivery-button/mypage-delivery-button";
import MypageExchangeButton from "../buttons/Mypage-Myfunding-Button/mypage-exchange-button/mypage-exchange-button";
import MypageRemainpayButton from "../buttons/Mypage-Myfunding-Button/mypage-remainpay-button/mypage-remainpay-button";

export default function MyPageFinfundingbtn({ item }) {
    const { finishedStatus, itemPercent } = item;


    if (itemPercent === 0) {
        return <div style={{ height: '50px' }}></div>;
    }

    // 완료된 경우
    if (finishedStatus) {
        if (itemPercent === 100) {
            return (
                <div className="fin-btn-wrapper">
                    <MypageCompleteButton />
                </div>
            );
        } else {
            return (
                <div className="fin-btn-wrapper">
                    <MypageDeliveryButton />
                </div>
            );
        }
    } else {
        // 완료되지 않은 경우
        // itemPercent에 따라 포인트 전환하기 / 잔여금액 결제하기 버튼 또는 배송지 입력 버튼을 표시
        if (itemPercent < 100) {
            // 포인트 전환하기 / 잔여금액 결제하기 버튼
            return (
                <div className="fin-btn-wrapper">
                    <div className="exchange-remain-btn-wrapper">
                        <MypageExchangeButton />
                        <MypageRemainpayButton />
                    </div>
                </div>
            );
        } else {
            // 배송지 입력 버튼
            return (
                <div className="fin-btn-wrapper">
                    <MypageDeliveryButton />
                </div>
            );
        }
    }
};
