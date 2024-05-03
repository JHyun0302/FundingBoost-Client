import React from 'react';
import './mypage-myfunding.scss';
import MypageProfile from '../../../molecules/MypageProfile/mypageprofile';
import MyPageIndex from "../../../molecules/MypageIndex/mypageindex";
import MyfundingNonFundingPane from "../../../molecules/Mypage-Myfunding/mypage-myfunding-nonfunding";
import MyfundingDoFundingPane from "../../../molecules/Mypage-Myfunding/mypage-myfunding-dofunding";
import MyfundingFinFundingPane from "../../../molecules/Mypage-Myfunding/mypage-myfunding-finfunding";

const MypagePane = () => {
    // 선택된 버튼에 대한 액션을 처리하는 함수
    const handleButtonClick = (index) => {
        // 선택된 버튼에 대한 로직을 작성합니다.
        console.log(`Selected index: ${index}`);
    };

    return (
        <div className="mypage-total-container">
            <div className="mypage-left-pane-container">
                <MypageProfile />
                <MyPageIndex onButtonClick={handleButtonClick} currentPageIndex={0} />
            </div>
            <div>
            <MyfundingNonFundingPane/>
            <MyfundingDoFundingPane/>
            <MyfundingFinFundingPane/>
            </div>
        </div>
    );
}

export default MypagePane;
