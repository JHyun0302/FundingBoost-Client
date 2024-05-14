//펀딩 바로가기 버튼
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import  '../yellowBtn.scss';

function FundingRegistButton({ onClick }){
    // 페이지 이동
    const navigate = useNavigate();
    const handleClick = () => {
        onClick();
        navigate('/funding/regist/success');
    };
    return (
        <>
            <div className="FundingRegist-btn">
                <Button className="yellowBtn" onClick={ handleClick }>펀딩 등록하기</Button>

            </div>
        </>

    );
}
export default FundingRegistButton;