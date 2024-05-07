import React, { useState } from 'react';
import './mypage-myfunding-dofunding.scss';
import shareicon from "../../../assets/share.svg";
import MyfundingAdditionalPane from "../../atoms/mypage-additional-info/mypage-additional-info";
import MyfundingItemList from "../mypage-myfunding-itemlist/mypage-myfunding-itemlist";

const MyfundingFinFundingPane = ({ deadline }) => {
    return (
        <div className="mypage-right-pane-containter">
            <div className="mypage-myfunding-content-wrapper">
                <div className="mypage-myfunding-title-wrapper">
                    <div className="mypage-day-wrpper">
                        <div className="mypage-myfunding-title">MY 펀딩</div>
                        <div className="memberFundingDday"> 종료 </div>
                        <div className="mypage-enddate-pane">~ {deadline}</div>
                    </div>
                    <div className="mypage-fin-button-noti-wrpper">
                        {/*<div className="mypage-fin-remain-date-noti">*/}
                            ＊ 펀딩이 종료되었습니다.
                        {/*</div>*/}
                        <button className="mypage-button-style-01">
                            <img src={shareicon} alt="shareicon" className="mypage-share-icon"/>
                        </button>
                    </div>
                </div>
                <div className="horizontalLine"></div>
                <MyfundingItemList/>
                <div className="horizontalLine"></div>
                <MyfundingAdditionalPane/>
            </div>
        </div>
    );
}

export default MyfundingFinFundingPane;
