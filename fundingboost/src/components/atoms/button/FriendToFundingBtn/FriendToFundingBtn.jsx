// FriendToFundingBtn 컴포넌트
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../yellowBtn.scss';

function FriendToFundingBtn({ onClick, fundingAmount }) {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('FriendToFundingBtn', fundingAmount);
        if (typeof onClick === 'function') {
            onClick(fundingAmount); // fundingAmount를 전달
            navigate('/friend-funding/pay');
        }
    };

    return (
        <div className="friendToFundingBtn-btn">
            <Button className="yellowBtn" onClick={handleClick}>펀딩하기</Button>
        </div>
    );
}

export default FriendToFundingBtn;
