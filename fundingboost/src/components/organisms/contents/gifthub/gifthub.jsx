import React, { useState, useEffect } from 'react';
import '../gifthub/gifthub.scss';
import SingleGiftHubItem from '../../../molecules/SingleGifthubItem/singlegifthubitem';
import GifthubResult from "../../../molecules/GifthubResult/gifthubresult";
import axios from 'axios';

const GifthubPane = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [items, setItems] = useState([]);

    const handleCheckboxChange = (item, isChecked) => {
        if (isChecked) {
            setSelectedItems([...selectedItems, item]);
            setTotalPrice(totalPrice + item.itemPrice);
        } else {
            setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
            setTotalPrice(totalPrice - item.itemPrice);
        }
    };

    const handleDeleteItem = (itemToDelete) => {
        // 삭제 버튼 클릭 시 해당 아이템을 제거합니다.
        setItems(items.filter(item => item !== itemToDelete));
        // 선택된 아이템 중에서 삭제된 아이템인지 확인합니다.
        const isDeletedItemSelected = selectedItems.includes(itemToDelete);
        if (isDeletedItemSelected) {
            setTotalPrice(totalPrice - itemToDelete.itemPrice);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'GET',
                    url: `${process.env.REACT_APP_FUNDINGBOOST}/gifthub?memberId=1`,
                    responseType: 'json',
                    headers: ({
                        "Access-Control-Allow-Credentials" : true,
                        "ngrok-skip-browser-warning": true,
                    }),
                })
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

    return(
        <div className="gifthub-page-container">
            <div className="gifthub-item-pane-container">
                {Array.isArray(items) && items.map(item => (
                    <SingleGiftHubItem
                        key={item.itemId}
                        item={item}
                        onCheckboxChange={handleCheckboxChange}
                        onDelete={handleDeleteItem}
                    />
                ))}
            </div>
            <div className="gifthub-result-pane">
                <GifthubResult items={items} totalPrice={totalPrice} selectedItems={selectedItems} />
            </div>
        </div>
    );

};

export default GifthubPane;
