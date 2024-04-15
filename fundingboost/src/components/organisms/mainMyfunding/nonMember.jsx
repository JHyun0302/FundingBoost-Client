import ProfileImg from "../../atoms/ProfileImg";
import  LoginButton from "../../atoms/button/logingo-btn";
import React from "react";
import './nonMember.scss'
function MainMyFunding() {
    return (
        <div className="nonMember">
            <ProfileImg className="nonMember-Profile" ></ProfileImg>
            <div className="nonMember-item">
                <div className="nonMember-text">
                    <b>펀딩부스트</b>의 세계로 초대합니다.<br/> 로그인을 진행해주세요.
                </div>
                <LoginButton className={"nonMember-LoginBtn"} />
            </div>
        </div>
    );
}
export default MainMyFunding;