import React from 'react';
import './mypage-myhistory.scss';
import MypageIndex from '../../../molecules/MypageIndex/mypageindex';
import MypageProfile from '../../../molecules/MypageProfile/mypageprofile';
import MyPageIndex from "../../../molecules/MypageIndex/mypageindex";

const MypageMyHistoryPane = () => {
    const handleButtonClick = (index) => {
        // 선택된 버튼에 대한 로직을 작성합니다.
        console.log(`Selected index: ${index}`);
    };

    return (
        <div className="mypage-myhistory-total-container">
            <div className="mypage-myhistory-left-pane-container">
                <MypageProfile />
                <MyPageIndex onButtonClick={handleButtonClick} currentPageIndex={1} />
            </div>
            <div className="mypage-myhistory-right-pane-containter">
                지난 펀딩 이력 content
            </div>
        </div>
    );
}

export default MypageMyHistoryPane;
