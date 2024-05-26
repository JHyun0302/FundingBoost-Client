import React, {useState} from "react";
import './mypage-exchange-button.scss';
import axios from "axios";

const MypageExchangeBtn = ({ item, memberId }) => {
    const [refresh, setRefresh] = useState(false);

    const handleExchange = async () => {
        const requestData = {
            fundingId: item.fundingId
        };

        try {
            const accessToken = localStorage.getItem('accessToken');

            const response = await axios.patch(`${process.env.REACT_APP_FUNDINGBOOST}/member/point`, requestData, {
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`,
                    "Access-Control-Allow-Origin": "http://localhost:3000/",
                    'Access-Control-Allow-Credentials': true
                },
            });
            console.log('PATCH 결과:', response.data);
            setRefresh(true);
        } catch (error) {
            console.error('PATCH 에러:', error);
        }
    };

    if (refresh) {
        window.location.reload(); // 페이지 새로고침
    }


    return (
        <button className="mypage-exchange-btn" onClick={handleExchange}>포인트 전환하기</button>
    );
}

export default MypageExchangeBtn;
