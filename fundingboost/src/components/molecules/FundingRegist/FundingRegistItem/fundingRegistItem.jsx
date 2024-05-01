import React, { useEffect, useState } from 'react';
import './fundingRegistItem.scss';
import ItemImg from "../../../atoms/itemImg/itemImg";
import NonItemImg from "../../../../assets/nonItemImg.svg";

const FundingRegistItem = ({ selectedItems }) => {
    console.log(selectedItems);

    return (
        <div className="FundingRegistItem" style={{ overflowY: 'scroll', height: '100vh', scrollbarWidth: 'none' }}>
            {selectedItems.map((item, index) => (
                <div key={index}>
                    <div className="itemContainer">
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
