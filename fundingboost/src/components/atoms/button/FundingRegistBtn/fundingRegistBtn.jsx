//펀딩 바로가기 버튼
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import  '../yellowBtn.scss';

function FundingRegistButton({ onClick, tagIsSelected }){
    const navigate = useNavigate();
    const handleClick = () => {
        if (tagIsSelected) {
            onClick();
            navigate('/funding/regist/success');
        } else {
            alert('태그를 선택해주세요!');
        }
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