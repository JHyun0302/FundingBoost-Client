import React from 'react';
import "./mypage-myfunding-history-list.scss";
import img from "../../../assets/detail-section-icon.svg";
import MyPageMyFundingHistory from "../../atoms/MyPageMyFundingHistory/mypage-myfunding-history";
import detailimg from "../../../assets/detail-section-icon.svg";


export default function MyPageMyFundingHistoryList () {
    return (
        <div className="MyPageFundingRecord">
            <div className='mypage-myfunding-history-title'>
                <div className="mypage-fundingRecordTitle">지난 펀딩 이력</div>
                <div className='detailed'>
                    <img className="detailedInquiryImg" alt="Line" src={detailimg} />
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