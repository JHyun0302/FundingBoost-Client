import React, { useState } from 'react';
import './fundingRegistItem.scss';
import NonItemImg from "../../../../assets/nonItemImg.svg";

const FundingRegistItem = ({ selectedItems,  onItemOrderChange }) => {
    const [orderedItems, setOrderedItems] = useState(selectedItems);

    //상품 순서 지정
    const itemOrderCheck = (index) => {
        const updatedItems = [...orderedItems];
        const selectedItem = updatedItems[index];

        const isSelected = !!selectedItem.order;

        //선택 순서 조정
        if (isSelected) {
            const selectedOrder = selectedItem.order;
            selectedItem.order = null;

            //선택 해제시 순서 재조정
            updatedItems.forEach(item => {
                if (item.order && item.order > selectedOrder) {
                    item.order--;
                }
            });
        } else {
            const lastOrder = Math.max(...updatedItems.map(item => item.order || 0));
            selectedItem.order = lastOrder + 1;
        }

        //순서대로 정렬
        updatedItems.sort((a, b) => (a.order || Infinity) - (b.order || Infinity));

        setOrderedItems(updatedItems);
        onItemOrderChange(updatedItems);
    };

    return (
        <div className="FundingRegistItem">
            {orderedItems.map((item, index) => (
                <div key={index}>
                    <div className="itemContainer">
                        <input type="checkbox" id={`checkbox-${index}`} checked={!!item.order} onChange={() => itemOrderCheck(index)} />
                        <label className="checkbox-label" htmlFor={`checkbox-${index}`} data-order={item.order || ''}></label>
                        <img src={item.itemImageUrl || NonItemImg} alt={item.itemName} className="item-img" />
                        <div className="itemDetail">
                            <div className="title">{item.itemName}</div>
                            <div className="optionDetail">
                                <div className="optionGroup">
                                    <div className="option">옵션</div>
                                </div>
                                <div className="optionName">{item.optionName}</div>
                            </div>
                            <div className="price">{item.itemPrice} 원</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FundingRegistItem;