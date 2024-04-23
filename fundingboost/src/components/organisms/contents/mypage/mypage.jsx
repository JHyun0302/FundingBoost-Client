import React from 'react';
import './mypage.scss';
import MypageIndex from '../../../molecules/MypageIndex/mypageindex';
import MupageProfile from '../../../molecules/MypageProfile/mypageprofile';

const MypagePane = () => {
    return (
        <div className="mypage-total-container">
        <div className="mypage-left-pane-container">
            <MupageProfile />
            <MypageIndex/>
        </div>
        <div className="mypage-right-pane-containter">
            <h1>hello</h1>
        </div>
        </div>
    );
}

export default MypagePane;
