import React from 'react';
import "./mypage-myfunding-history.scss";
import img from "../../../assets/testitem.svg";
import MypageMyfundingGauge from "../mypage-myfunding-gauge/mypage-myfunding-gauge";

export default function MyPageMyFundingHistory () {
    return (
        <div className="myPageFundingRecordItem">
            <img className="image" alt="Image" src={img} />
            <div className= "myPageFundingRecordText">
                <div className='showFunding'>
                    <div className="fundingTag"># 생일</div>
                    <div className='lookingDetail'>
                        <div className="showDetail">자세히 보기</div>
                        <button className="showDetailButton">▶</button>
                    </div>
                </div>
                <p className="fundingDateTime">
                    펀딩 시작일 : 2024.01.23
                    <br />
                    펀딩 종료일 : 2024.04.05
                </p>

                <div className='showFundingGauge'>
                    <div className="participatePeople">2001명 참여</div>
                    <div className="fundingGaugePercent">98%</div>
                </div>

                <MypageMyfundingGauge/>
            </div>
        </div>
    );
};