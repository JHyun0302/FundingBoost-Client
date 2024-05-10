import React, { useState } from 'react';
import './friendFundingDetail-item.scss';
import NonItemImg from "../../../../assets/nonItemImg.svg";

const FriendFundingDetailItem = ({friendFundingDetailData}) => {
console.log("상품명:"+{friendFundingDetailData});

    return (
        <div className="friendFundingDetailItem">
            {friendFundingDetailData?.data?.friendFundingItemList.map((item, index) => (
                <div key={index} className="friendFundingDetailItem-itemContainer">
                    <img src={item.itemImageUrl || NonItemImg} alt={item.itemName} className="item-img" />
                    <div className="friendFundingDetailItem-itemDetail">
                        <div className="friendFundingDetailItem-itemtitle">{item.itemName}</div>
                        <div className="friendFundingDetailItem-optionDetail">
                            <div className="friendFundingDetailItem-optionGroup">
                                <div className="friendFundingDetailItem-option">옵션</div>
                            </div>
                            <div className="friendFundingDetailItem-optionName">{item.optionName}</div>
                        </div>
                        <div className="friendFundingDetailItem-price">{Number(item.itemPrice).toLocaleString()} 원</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FriendFundingDetailItem ;