import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import '../yellowBtn.scss';


function FriendFundingPaymentBtn({usePoints, finalPrice}) {

    const handlePayment = async () =>{
        try{
            const data ={
                usingPoint: finalPrice,
                fundingPrice: usePoints
            };

            const response = await fetch(`https://65fd-112-218-95-58.ngrok-free.app//api/v1/friends/pay/${funding_id}`,data, {
                responseType: 'json',
                headers: ({
                    "Content-Type" : "application/json",
                    "Access-Control-Allow-Credentials" : true,
                    "ngrok-skip-browser-warning": true
                })
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
