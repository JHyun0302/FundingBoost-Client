import ProfileImg from "../../../atoms/ProfileImg/ProfileImg";
import CheckFundingButton from "../../../atoms/button/mainMyfuudingBtn/checkFunding-btn";
import React, { useState, useEffect } from "react";
import ItemImg from "../../../atoms/itemImg/itemImg";
import GaugeBar from "../../../atoms/gauge-bar/gauge-bar";
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './memberYesFunding.scss';

function MainMyFunding() {
    const [nickName, setNickName] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        // fetchProducts();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const fetchProducts = () => {
    //     const dummyProducts = [
    //         { id: 1, imageUrl: '상품1', gauge: 50 },
    //         { id: 2, imageUrl: '상품2', gauge: 70 },
    //         { id: 3, imageUrl: '상품3', gauge: 70 },
    //         { id: 4, imageUrl: '상품4', gauge: 70 },
    //         { id: 5, imageUrl: '상품5', gauge: 70 }
    //     ];
    //     setProducts(dummyProducts);
    // };

    return (
        <div className="memberYesFunding">

                <div className="meberYesFundingstatus">

                    <div className="memberYesFunding-item">
                        <ProfileImg className="memberYesFunding-Profile" />
                        <div className="memberYesFunding-text">
                            <div className="memberYesFunding-text">
                                <div className="myfundingNickName">{nickName} 님</div>
                                펀딩 현황
                            </div>
                            <div className="memberFundingDday">D-</div>

                        </div>
                        <div className="memberFunding-RightItem">
                            <div className="memberFundingProgress">%</div>
                            <CheckFundingButton/>
                        </div>

                </div>

                <div className={isMobile ? "myFundingItemsContainer mobile-carousel" : "myFundingItemsContainer"}>
                <Carousel showArrows={true} showThumbs={false} showStatus={false} showIndicators={false} emulateTouch={true} slidesToShow={isMobile ? 3 : 5}>
                        {products.map(product => (
                            <div className="myFundingItem" key={product.id}>
                                <ItemImg src={product.imageUrl} className="myFundingItemimg" />
                                <GaugeBar value={product.gauge} className="myFundingGaugeBar" />
                            </div>
                        ))}
                    </Carousel>

                </div>
            </div>
        </div>
    );
}

export default MainMyFunding