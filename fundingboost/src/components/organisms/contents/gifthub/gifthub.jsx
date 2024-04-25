import React, { useState, useEffect } from 'react';
import '../gifthub/gifthub.scss';
import SingleGiftHubItem from '../../../molecules/SingleGifthubItem/singlegifthubitem';
import GifthubResult from "../../../molecules/GifthubResult/gifthubresult";
import axios from 'axios';

const GifthubPane = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [items, setItems] = useState(null); // 초기값을 null로 설정

    const handleCheckboxChange = (item, isChecked) => {
        if (isChecked) {
            setSelectedItems([...selectedItems, item]);
            setTotalPrice(totalPrice + item.itemPrice);
        } else {
            setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
            setTotalPrice(totalPrice - item.itemPrice);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://e7d8-112-218-95-58.ngrok-free.app/api/v1/gifthub?memberId=1');
                if (response.data.success) {
                    setItems(response.data.data);
                } else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("There was an error fetching the post data:", error);
            }
        };

        fetchData();
    }, []);

    // items가 null 또는 undefined인 경우, 아무것도 렌더링하지 않음
    if (!items) {
        return null;
    }

    return (
        <div className="gifthub-page-container">
            <div className="gifthub-item-pane-container">
                {items.map(item => (
                    <SingleGiftHubItem
                        key={item.itemId}
                        item={item}
                        onCheckboxChange={handleCheckboxChange}
                    />
                ))}
            </div>
            <div className="gifthub-result-pane">
                <GifthubResult totalPrice={totalPrice} />
            </div>
        </div>
    );
};

export default GifthubPane;
