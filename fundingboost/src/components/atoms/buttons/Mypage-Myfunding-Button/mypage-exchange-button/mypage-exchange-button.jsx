import React from "react";
import './mypage-exchange-button.scss';
import axios from "axios";

const MypageExchangeBtn = ({ memberId }) => {
    const handleExchange = async () => {
        const requestData = {
            memberId: memberId
        };

        try {
            const response = await axios.patch(`https://fd14-112-218-95-58.ngrok-free.app/api/v1/member/point?memberId=1`, requestData, {
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                    'ngrok-skip-browser-warning': true,
                },
            });
            console.log('PATCH 결과:', response.data);

        } catch (error) {
            console.error('PATCH 에러:', error);
        }
    };

    return (
        <button className="mypage-exchange-btn" onClick={handleExchange}>포인트 전환하기</button>
    );
}

export default MypageExchangeBtn;
