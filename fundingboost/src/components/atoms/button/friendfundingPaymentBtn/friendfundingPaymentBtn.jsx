import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import '../yellowBtn.scss';
import axios from 'axios';


function FriendFundingPaymentBtn({usePoints, fundingAmount, fundingId}) {

    const numberUsePoints = Number(usePoints);
    const numberFundingAmount = Number(fundingAmount);

    console.log("펀딩금액:" + numberFundingAmount);
    console.log("포인트:" +numberUsePoints);
    console.log("펀딩id:" +fundingId);
    const handlePayment = async () =>{
        try{
            const data = JSON.stringify({
                usingPoint: numberUsePoints,
                fundingPrice:  numberFundingAmount
            })
            console.log("postData:" +data)
            const response = await axios.post(`https://fd14-112-218-95-58.ngrok-free.app/api/v1/pay/friends/${fundingId}?memberId=1`,data, {
                responseType: 'json',
                headers: ({
                    "Content-Type" : "application/json",
                    "Access-Control-Allow-Credentials" : true,
                    "ngrok-skip-browser-warning": true
                }),
                withCredentials: true,
            });
            window.location.href = '/funding/pay/success';
        }catch(error){
            console.error('POST 에러:', error);
        }
    }


    return (
        <div className="friendToFundingBtn-btn">
            <Button className="yellowBtn" onClick={handlePayment}>결제하기</Button>
        </div>
    );
}

export default FriendFundingPaymentBtn;
