import React from 'react';
import "./mypageprofile.scss";
import defaultProfileImg from "../../../assets/testprofile.svg";

export default function MyPageProfile ({ profileInfo }) {
    // 프로필 정보에서 필요한 데이터 추출
    const { nickName, email, profileImgUrl, point } = profileInfo.myPageMemberDto;

    return (
        <div className="myPageProfileView">
            <div className='myPageProfile'>
                <img className="myPageProfileImg" alt="myPageProfileImg" src={profileImgUrl || defaultProfileImg}/>
                <div className='myPageProfileText'>
                    <div className="myPageProfileName">{nickName}</div>
                    <a className="myPageProfileEmail">
                        {email}
                    </a>
                </div>
            </div>
            <div className="myPointExplain">내 포인트</div>
            <div className="horizontalLine"></div>
            <div className="myPoint">{point ? point.toLocaleString() : '0'} P</div>
            <div className="horizontalLine"></div>
        </div>
    );
};
