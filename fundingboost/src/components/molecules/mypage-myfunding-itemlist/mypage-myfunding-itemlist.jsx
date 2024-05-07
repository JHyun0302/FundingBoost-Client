import React, { useState } from 'react';
import './mypage-myfunding-itemlist.scss';
import MyFundingSingleItem from '../../atoms/mypage-myfunding-singleitem/mypage-myfunding-singleitem';
import Carousel from 'react-bootstrap/Carousel';

export default function MyPageFundingItemPane({ myPageFundingItemDtoList }) {
    const [index, setIndex] = useState(0); // index 상태를 추가합니다.

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // MyFundingSingleItem 컴포넌트를 반복하여 렌더링합니다.
    const renderSingleItems = (count) => {
        return myPageFundingItemDtoList.slice(0, count).map((item, index) => (
            <MyFundingSingleItem key={index} item={item} />
        ));
    };

    const numberOfItemsInSecondCarousel = 2;

    return (
        <div className="myPageFundingItemdGroupBox">
            <div className="MyPageFundingItemGroupView">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div className="mypage-myfunding-item-view">
                            {renderSingleItems(3)} {/* 첫 번째 Carousel에는 3개의 아이템을 렌더링합니다. */}
                        </div>
                    </Carousel.Item>
                    {numberOfItemsInSecondCarousel > 0 && ( // 두 번째 Carousel에 아이템이 있는 경우에만 렌더링합니다.
                        <Carousel.Item>
                            <div className="mypage-myfunding-item-view">
                                {renderSingleItems(numberOfItemsInSecondCarousel)} {/* 두 번째 Carousel에는 numberOfItemsInSecondCarousel 개의 아이템을 렌더링합니다. */}
                            </div>
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        </div>
    );
};
