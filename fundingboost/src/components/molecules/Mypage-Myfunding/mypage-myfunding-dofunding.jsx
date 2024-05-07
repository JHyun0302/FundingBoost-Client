import React from 'react';
import './mypage-myfunding-dofunding.scss';
import shareicon from "../../../assets/share.svg";
import MyfundingAdditionalPane from "../../atoms/mypage-additional-info/mypage-additional-info";
import MyfundingItemList from "../mypage-myfunding-itemlist/mypage-myfunding-itemlist";

const MyfundingDoFundingPane = ({ deadline, deadlineDate, totalPercent, participateFriendDtoList, myPageFundingItemDtoList }) => {

    return (
        <div className="mypage-right-pane-containter">
            <div className="mypage-myfunding-content-wrapper">
                <div className="mypage-myfunding-title-wrapper">
                    <div className="mypage-day-wrpper">
                        <div className="mypage-myfunding-title">MY 펀딩</div>
                        <div className="memberFundingDday">{deadlineDate}</div>
                        <div className="mypage-enddate-pane">~ {deadline}</div>
                    </div>
                    <div className="mypage-button-noti-wrpper">
                        <button className="mypage-button-style-01">기간 연장하기</button>
                        <button className="mypage-button-style-01">
                            <img src={shareicon} alt="shareicon" className="mypage-share-icon"/>
                        </button>
                        <div className="mypage-remain-date-noti">
                            <div>＊ 기간은 자동 2주 연장됩니다.</div>
                        </div>
                    </div>
                </div>
                <div className="horizontalLine"></div>
                <MyfundingItemList myPageFundingItemDtoList={myPageFundingItemDtoList} />
                <div className= "mypage-end-button-container">
                    <button className="mypage-button-style-03">종료하기</button>
                </div>
                <div className="horizontalLine"></div>
                <MyfundingAdditionalPane participateFriendDtoList={participateFriendDtoList} totalPercent={totalPercent}/>
            </div>
        </div>
    );
}

export default MyfundingDoFundingPane;
