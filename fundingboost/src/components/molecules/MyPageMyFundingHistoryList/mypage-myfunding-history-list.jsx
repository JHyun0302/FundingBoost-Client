import React from 'react';
import "./mypage-myfunding-history-list.scss";
import img from "../../../assets/detail-section-icon.svg";
import MyPageMyFundingHistory from "../../atoms/MyPageMyFundingHistory/mypage-myfunding-history";

export default function MyPageMyFundingHistoryList () {
    return (
        <div className="MyPageFundingRecord">
            <div className='mypage-myfunding-title'>
                <div className="fundingRecordTitle">지난 펀딩 이력</div>
                <div className='detailed'>
                    <img className="detailedInquiryImg" alt="Line" src={img} />
                    <div className="detailedInquiry">상세조회</div>
                </div>
            </div>
            <div className="mypage-FH-horizontalLine"></div>
            <div className="fundingRecordItem">
                <MyPageMyFundingHistory />
                <MyPageMyFundingHistory />
                {/*<MyPageMyFundingHistory />*/}
                {/*<MyPageMyFundingHistory />*/}
                {/*<MyPageMyFundingHistory />*/}
            </div>
        </div>
    );
};