import React, { useState } from 'react';
import './mypage-myfunding-itemlist.scss';
import MyFundingSingleItem from '../../atoms/mypage-myfunding-singleitem/mypage-myfunding-singleitem';
import Carousel from 'react-bootstrap/Carousel';

export default function MyPageFundingItemPane({ apiData, myPageFundingItemDtoList, isFundingClosed, setIsFundingClosed }) {
    const [index, setIndex] = useState(0); // index 상태를 추가합니다.

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // MyFundingSingleItem 컴포넌트를 반복하여 렌더링합니다.
    const renderSingleItems = (startIdx, endIdx) => {
        return myPageFundingItemDtoList.slice(startIdx, endIdx).map((item, index) => (
            <MyFundingSingleItem key={startIdx + index} item={item} isFundingClosed={isFundingClosed} setIsFundingClosed={setIsFundingClosed} apiData={apiData}/>
        ));
    };

    const numberOfItemsInFirstCarousel = 3;

    return (
        <div className="myPageFundingItemdGroupBox">
            <div className="MyPageFundingItemGroupView">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div className="mypage-myfunding-item-view">
                            {renderSingleItems(0, numberOfItemsInFirstCarousel)} {/* 첫 번째 Carousel에는 처음부터 numberOfItemsInFirstCarousel 개의 아이템을 렌더링합니다. */}
                        </div>
                    </Carousel.Item>
                    {myPageFundingItemDtoList.length > numberOfItemsInFirstCarousel && ( // 두 번째 Carousel에 아이템이 있는 경우에만 렌더링합니다.
                        <Carousel.Item>
                            <div className="mypage-myfunding-item-view">
                                {renderSingleItems(numberOfItemsInFirstCarousel, myPageFundingItemDtoList.length)} {/* 두 번째 Carousel에는 남은 아이템을 렌더링합니다. */}
                            </div>
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        </div>
    );
};
