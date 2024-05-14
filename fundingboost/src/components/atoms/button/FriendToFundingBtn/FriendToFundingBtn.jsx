import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../yellowBtn.scss';

function FriendToFundingBtn({ fundingAmount }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/friend-funding/pay', { state: fundingAmount });
    };

    return (
        <div className="friendToFundingBtn-btn">
            <Button className="yellowBtn" onClick={handleClick}>펀딩하기</Button>
        </div>
    );
}

export default FriendToFundingBtn;
