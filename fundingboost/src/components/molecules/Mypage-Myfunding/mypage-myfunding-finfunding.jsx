import React, { useState } from 'react';
import './mypage-myfunding-dofunding.scss';
import shareicon from "../../../assets/share.svg";
import MyfundingAdditionalPane from "../../atoms/mypage-additional-info/mypage-additional-info";
import MyfundingItemList from "../mypage-myfunding-itemlist/mypage-myfunding-itemlist";
import messagebox from "../../../assets/messagebox.svg";

const MyfundingFinFundingPane = ({ deadline, totalPercent, message, tag, participateFriendDtoList, myPageFundingItemDtoList }) => {
    return (
        <div className="mypage-right-pane-containter">
            <div className="mypage-myfunding-content-wrapper">
                <div className="mypage-myfunding-title-wrapper">
                    <div className="mypage-day-wrpper">
                        <div className="mypage-myfunding-title">MY 펀딩</div>
                        <div className="memberFundingDday"> 종료</div>
                        <div className="mypage-enddate-pane">~ {deadline}</div>
                        <div className="mypage-tag-pane">{tag}</div>

                    </div>
                    <div className="mypage-fin-button-noti-wrpper">
                            ＊ 펀딩이 종료되었습니다.
                        <button className="mypage-button-style-01">
                            <img src={shareicon} alt="shareicon" className="mypage-share-icon"/>
                        </button>
                    </div>
                </div>
                <div className="horizontalLine"></div>
                <MyfundingItemList myPageFundingItemDtoList={myPageFundingItemDtoList} />
                <div className="horizontalLine"></div>
                <MyfundingAdditionalPane participateFriendDtoList={participateFriendDtoList} totalPercent={totalPercent}/>

            </div>
        </div>
    );
}

export default MyfundingFinFundingPane;
