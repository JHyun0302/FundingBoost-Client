import React from 'react';
import './friendFundingDetail-optionDetail.scss';
import FriendFundingDetailFriendFunding from '../../../atoms/friendFundingDetail-friendFunding/friendFundingDetail-friendFunding';
import FriendFundingDetailProfileMessage from '../../../atoms/friendFundingDetail-profileMessage/friendFundingDetail-profileMessage';

const FriendFundingDetailOptionDetail = () => {
    return (
        <div className="friendFundingDetail-optionDetail">
            <div>
                <FriendFundingDetailProfileMessage />
            </div>
            <div>
                <FriendFundingDetailFriendFunding />
            </div>
        </div>
    );
};

export default FriendFundingDetailOptionDetail;