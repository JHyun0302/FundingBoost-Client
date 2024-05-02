import ProfileImg from "../../../atoms/ProfileImg/ProfileImg";
import CheckFundingButton from "../../../atoms/button/mainMyfuudingBtn/checkFunding-btn";
import React, { useState, useEffect } from "react";
import ItemImg from "../../../atoms/itemImg/itemImg";
import GaugeBar from "../../../atoms/gauge-bar/gauge-bar";
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './memberYesFunding.scss';
import axios from "axios";

function MemberYesFunding({ memberFundingData }) {
    const [isMobile, setIsMobile] = useState(false);
    const [products, setProducts] = useState([]);

    // const [fundingDeadline, setFundingDeadline] = useState('');
    // const [myFundingItems, setMyFundingItems] = useState([]);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log("상품이미지:",memberFundingData?.data?.homeMyFundingItemDtoList?.itemImageUrl);


    return (
        <div className="memberYesFunding">
                <div className="meberYesFundingstatus">

                    <div className="memberYesFunding-item">
                        <ProfileImg className="memberYesFunding-Profile" memberFundingData={memberFundingData.data} />
                        <div className="memberYesFunding-text">
                            <div className="memberYesFunding-text">
                                <div className="myfundingNickName">{memberFundingData?.data?.homeMemberInfoDto?.nickName}님</div>
                                펀딩 현황
                            </div>
                            <div className="memberFundingDday">{memberFundingData?.data?.homeMyFundingStatusDto?.deadline}</div>

                        </div>
                        <div className="memberFunding-RightItem">
                            <div className="memberFundingProgress">%</div>
                            <CheckFundingButton/>
                        </div>

                </div>

                    <div className={isMobile ? "myFundingItemsContainer mobile-carousel" : "myFundingItemsContainer"}>
                        <Carousel showArrows={true} showThumbs={false} showStatus={false} showIndicators={false}
                                  emulateTouch={true} slidesToShow={isMobile ? 3 : 5}>
                            {memberFundingData?.data?.homeMyFundingItemDtoList?.map((product, index) => (
                                <div className="myFundingItem" key={index}>
                                    <ItemImg imageUrl={product.itemImageUrl} className="myFundingItemimg"/>
                                    <GaugeBar value={product.itemPercent} className="myFundingGaugeBar"/>
                                </div>
                            ))}
                        </Carousel>


                    </div>
                </div>
        </div>
    );
}

export default MemberYesFunding;