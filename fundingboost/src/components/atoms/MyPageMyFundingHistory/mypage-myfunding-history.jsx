import React from 'react';
import "./mypage-myfunding-history.scss";
import MypageMyfundingGauge from "../mypage-myfunding-gauge/mypage-myfunding-gauge";

export default function MyPageMyFundingHistory({ data }) {
    console.log(data);

    return (
        <div className="myPageFundingRecordItem-container">
            {data && (
                <div className="myPageFundingRecordItem">
                    <img className="image" alt="Image" src={data.itemImageUrl} />
                    <div className="myPageFundingRecordText">
                        <div className='showFunding'>
                            <div className="fundingTag">{data.tag}</div>
                            <div className='lookingDetail'>
                                <div className="showDetail">자세히 보기</div>
                                <button className="showDetailButton">▶</button>
                            </div>
                        </div>
                        <p className="fundingDateTime">
                            펀딩 시작일 : {data.createdDate}
                            <br />
                            펀딩 종료일 : {data.deadLine}
                        </p>
                        <div className='showFundingGauge'>
                            <div className="participatePeople">{data.contributorCount}명 참여</div>
                            {/*<div className="fundingGaugePercent">{data.status ? "100%" : 종료}</div>*/}
                        </div>
                        <MypageMyfundingGauge totalPercent={data.fundingPercent} />
                    </div>
                </div>
            )}
        </div>
    );
};
