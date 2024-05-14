 import React from "react";
import { useState } from "react";
import './mypage-myfunding-extension-button.scss';
import axios from "axios";


const ExtensionButton = ({ myPageFundingItemDtoList }) => {
    const [refresh, setRefresh] = useState(false);
    const handleExtensionButton = async () => {
        const fundingId = myPageFundingItemDtoList[0]?.fundingId;
        const memberId = myPageFundingItemDtoList[0]?.memberId;
        const requestData = { fundingId, memberId };


        try {
            const response = await axios.post(`https://07ae-112-218-95-58.ngrok-free.app/api/v1/funding/extension/${fundingId}?memberId=1`, requestData, {
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                    'ngrok-skip-browser-warning': true,
                },
                withCredentials: true
            });
            console.log('POST 결과:', response.data);
            setRefresh(true); // 상태 변경
        } catch (error) {
            console.error('POST 에러:', error);
        }
    }

    if (refresh) {
        window.location.reload(); // 페이지 새로고침
    }

    return (
        <button className="mypage-extension-btn" onClick={handleExtensionButton}>기간 연장하기</button>
    );
}

export default ExtensionButton;