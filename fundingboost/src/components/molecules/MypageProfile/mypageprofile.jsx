import React from 'react';
import "./mypageprofile.scss";
import img from "../../../assets/testprofile.svg";
export default function MyPageProfile () {
    return (
        <div className="myPageProfileView">
            <div className='myPageProfile'>
                <img className="myPageProfileImg" alt="myPageProfileImg" src={img}/>
                <div className='myPageProfileText'>
                    <div className="myPageProfileName">양혜인님</div>
                    <a className="myPageProfileEmail">
                        Hyein1201@gmail.com
                    </a>
                </div>
            </div>
            <div className="myPointExplain">내 포인트</div>
            <div className="horizontalLine"></div>
            <div className="myPoint">200,100 P</div>
            <div className="horizontalLine"></div>
        </div>
    );
};