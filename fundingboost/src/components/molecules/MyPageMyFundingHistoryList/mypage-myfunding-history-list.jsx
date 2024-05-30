import React from 'react';
import "./mypage-myfunding-history-list.scss";
import MyPageMyFundingHistory from "../../atoms/MyPageMyFundingHistory/mypage-myfunding-history";
import detailimg from "../../../assets/detail-section-icon.svg";

export default function MyPageMyFundingHistoryList({ apiData }) {
    const fundingDetailHistoryDtos = apiData ? apiData.myPageFundingDetailHistoryDtos : [];

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
                {fundingDetailHistoryDtos.map((dto, index) => (
                    <MyPageMyFundingHistory key={index} data={dto} />
                ))}
            </div>
        </div>
    );
};
