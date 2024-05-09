import React, { useState } from 'react';
import './friendFundingDetail-item.scss';
import NonItemImg from "../../../../assets/nonItemImg.svg";

const FriendFundingDetailItem = () => {
    // const [orderedItems, setOrderedItems] = useState();




    return (
        <div className="friendFundingDetailItem">
            왼쪽 아이템 리스트 입니다.
        </div>
    //     <div className="FriendFundingDetailItem">
    //
    //         {orderedItems.map((item, index) => (
    //             <div key={index}>
    //                 <div className="friendFundingDetailItem-itemContainer">
    //                     <img src={item.itemImageUrl || NonItemImg} alt={item.itemName} className="item-img" />
    //                     <div className="friendFundingDetailItem-itemDetail">
    //                         <div className="friendFundingDetailItem-itemtitle">{item.itemName}</div>
    //                         <div className="friendFundingDetailItem-optionDetail">
    //                             <div className="friendFundingDetailItem-optionGroup">
    //                                 <div className="friendFundingDetailItem-option">옵션</div>
    //                             </div>
    //                             <div className="friendFundingDetailItem-optionName">{item.optionName}</div>
    //                         </div>
    //                         <div className="friendFundingDetailItem-price">{item.itemPrice} 원</div>
    //                     </div>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // );
    );
};

export default FriendFundingDetailItem ;