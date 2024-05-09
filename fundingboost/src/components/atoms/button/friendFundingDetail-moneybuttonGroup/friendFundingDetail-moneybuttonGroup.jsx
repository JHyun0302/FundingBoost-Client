import React from 'react';
import './friendFundingDetail-moneybuttonGroup.scss'
const FriendFundingDetailMoneybuttonGroup = () => {
    return (
        <div className="fundingToFriend-buttonGroup">
            <div className="friendFundingDetail-moneybuttonGroup">
                <div className="money">
                    <button className="moneyButton">+ 1만</button>
                </div>
                <div className="money">
                    <button className="moneyButton">+ 5만</button>
                </div>
                <div className="money">
                    <button className="moneyButton">+ 10만</button>
                </div>
                <div className="money">
                    <button className="moneyButton">+ 전액</button>
                </div>
            </div>

        </div>
    );
};

export default FriendFundingDetailMoneybuttonGroup;