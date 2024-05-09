//펀딩 바로가기 버튼
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import  '../yellowBtn.scss';

function FriendToFundingBtn({ onClick }){
    // 페이지 이동
    const navigate = useNavigate();
    const handleClick = () => {
        onClick();
        navigate('/friend-funding/pay');
    };
    return (
        <>
            <div className="friendToFundingBtn-btn">
                <Button className="yellowBtn" onClick={ handleClick }>펀딩하기</Button>

            </div>
        </>

    );
}
export default FriendToFundingBtn;