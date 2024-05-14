import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import '../yellowBtn.scss';


function FriendFundingPaymentBtn() {

    return (
        <div className="friendToFundingBtn-btn">
            <Button className="yellowBtn" href='/funding/pay/success'>결제하기</Button>
        </div>
    );
}

export default FriendFundingPaymentBtn;
