import React from 'react';
import './friendFunding-itemImg.scss';
import img from "../../../assets/logo.svg";

const FriendFundingItemImg = () => {
    return (
        <div className="friendFunding-itemImg">
            <div className="img">
                <img className="fundingItem1" alt="Rectangle" src={img}/>
                <div className="fundingItemSub">
                    <img className="fundingItem2" alt="Rectangle" src={img}/>
                    <img className="fundingItem3" alt="Rectangle" src={img}/>
                </div>
            </div>
        </div>
    );
};

export default FriendFundingItemImg;