import React, { useState } from 'react';
import '../gifthub/gifthub.scss';
import SingleGiftHubItem from '../../../molecules/SingleGifthubItem/singlegifthubitem'; // SingleGiftHubItem으로 변경
import GifthubResult from "../../../molecules/GifthubResult/gifthubresult"

const GifthubPane = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleCheckboxChange = (item, isChecked) => {
        if (isChecked) {
            setSelectedItems([...selectedItems, item]);
            setTotalPrice(totalPrice + item.itemPrice);
        } else {
            setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
            setTotalPrice(totalPrice - item.itemPrice);
        }
    };

    return (
        <div className="gifthub-page-container">
            <div className="gifthub-item-pane-container">
                <SingleGiftHubItem onCheckboxChange={handleCheckboxChange} />
            </div>
            <div className="gifthub-result-pane">
                <GifthubResult totalPrice={totalPrice} />
            </div>
        </div>
    );
}

export default GifthubPane;
