import React from 'react';
import './mypage-myfunding-fin-btn.scss';
import MypageCompleteButton from "../buttons/Mypage-Myfunding-Button/mypage-complete-button/mypage-complete-button";
import MypageDeliveryButton from "../buttons/Mypage-Myfunding-Button/mypage-delivery-button/mypage-delivery-button";
import MypageExchangeButton from "../buttons/Mypage-Myfunding-Button/mypage-exchange-button/mypage-exchange-button";
import MypageRemainpayButton from "../buttons/Mypage-Myfunding-Button/mypage-remainpay-button/mypage-remainpay-button";

export default function MyPageFinfundingbtn({ item, myPageFundingItemDtoList }) {
    const { finishedStatus, itemPercent } = item;

    if (itemPercent === 0) {
        return <div style={{ height: '50px' }}></div>;
    }


    if (finishedStatus) {
        if (itemPercent === 100) {
            return (
                <div className="fin-btn-wrapper">
                    <MypageDeliveryButton />
                </div>
            );
        } else {
            // 완료되었지만 100%가 아닌 경우
            return (
                <div className="fin-btn-wrapper">
                    <div className="exchange-remain-btn-wrapper">
                        <MypageExchangeButton />
                        <MypageRemainpayButton myPageFundingItemDtoList={myPageFundingItemDtoList} />
                    </div>
                </div>
            );
        }
    } else {
        // 완료되지 않은 경우
        if (itemPercent < 100) {
            return (
                <div className="fin-btn-wrapper">
                    <MypageDeliveryButton />
                </div>
            );
        } else {
            return (
                <div className="fin-btn-wrapper">
                    <MypageCompleteButton />
                </div>
            );
        }
    }
};
