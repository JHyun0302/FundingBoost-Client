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

            const accessToken = localStorage.getItem('accessToken');

            const response = await axios.post(`${process.env.REACT_APP_FUNDINGBOOST}/pay/friends/${fundingId}`,data, {

                responseType: 'json',
                headers: ({
                    "Content-Type" : "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                    "Access-Control-Allow-Origin": "http://localhost:3000/",
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
