import React, { useState } from 'react';
import './friendFundingDetail-item.scss';
import NonItemImg from "../../../../assets/nonItemImg.svg";

const FriendFundingDetailItem = ({friendFundingDetailData}) => {
    // const [orderedItems, setOrderedItems] = useState();
console.log("상품명:"+{friendFundingDetailData});
    return (
        // <div className="friendFundingDetailItem">
        //     왼쪽 아이템 리스트 입니다.
        // </div>
        <div className="friendFundingDetailItem">

            {/*{orderedItems.map((item, index) => (*/}
            {/*    <div key={index}>*/}
                    <div className="friendFundingDetailItem-itemContainer">
                        <img src={friendFundingDetailData?.data?.friendFundingItemList[0]?.itemImageUrl || NonItemImg} alt={friendFundingDetailData?.data?.friendFundingItemList[0].itemName} className="item-img" />
                        <div className="friendFundingDetailItem-itemDetail">
                            <div className="friendFundingDetailItem-itemtitle">{friendFundingDetailData?.data?.friendFundingItemList[0].itemName}</div>
                            <div className="friendFundingDetailItem-optionDetail">
                                <div className="friendFundingDetailItem-optionGroup">
                                    <div className="friendFundingDetailItem-option">옵션</div>
                                </div>
                                <div className="friendFundingDetailItem-optionName">{friendFundingDetailData?.data?.friendFundingItemList[0]?.optionName}</div>
                            </div>
                            <div className="friendFundingDetailItem-price">{friendFundingDetailData?.data?.friendFundingItemList[0]?.itemPrice} 원</div>
                        </div>
                    </div>
                </div>
        //     ))}
        // </div>
    );
};

export default FriendFundingDetailItem ;