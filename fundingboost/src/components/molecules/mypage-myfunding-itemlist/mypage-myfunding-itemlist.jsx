import React, { useState, useEffect } from 'react';
import './mypage-myfunding-itemlist.scss';
import MyFundingSingleItem from '../../atoms/mypage-myfunding-singleitem/mypage-myfunding-singleitem';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

export default function MyPageFundingItemPane() {
    const [index, setIndex] = useState(0); // index 상태를 추가합니다.
    const [fundingItems, setFundingItems] = useState([]); // 펀딩 아이템 상태를 추가합니다.

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'GET',
                    url: 'https://58aa-112-218-95-58.ngrok-free.app/api/v1/gifthub?memberId=1',
                    responseType: 'json',
                    headers: {
                        "Access-Control-Allow-Credentials" : true,
                        "ngrok-skip-browser-warning": true,
                    },
                });
                if (response.data.success) {
                    setFundingItems(response.data.data.myPageFundingItemDtoList);
                } else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("There was an error fetching the post data:", error);
            }
        };

        fetchData();
    }, []);

    // MyFundingSingleItem 컴포넌트를 반복하여 렌더링합니다.
    const renderSingleItems = () => {
        return fundingItems ? fundingItems.map((item, index) => (
            <MyFundingSingleItem
                key={index}
                itemName={item.itemName}
                itemPrice={item.itemPrice}
                itemImageUrl={item.itemImageUrl}
                optionName={item.optionName}
                itemPercent={item.itemPercent}
                deliveryStatus={item.deliveryStatus}
            />
        )) : null;
    };

    const numberOfItemsInSecondCarousel = 2;

    return (
        <div className="myPageFundingItemdGroupBox">
            <div className="MyPageFundingItemGroupView">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div className="mypage-myfunding-item-view">
                            {renderSingleItems()} {/* 첫 번째 Carousel에는 데이터를 렌더링합니다. */}
                        </div>
                    </Carousel.Item>
                    {numberOfItemsInSecondCarousel > 0 && ( // 두 번째 Carousel에 아이템이 있는 경우에만 렌더링합니다.
                        <Carousel.Item>
                            <div className="mypage-myfunding-item-view">
                                {renderSingleItems().slice(0, numberOfItemsInSecondCarousel)} {/* 두 번째 Carousel에도 데이터를 렌더링합니다. */}
                            </div>
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        </div>
    );
};
