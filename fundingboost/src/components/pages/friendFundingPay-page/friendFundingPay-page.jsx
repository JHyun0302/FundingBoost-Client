import React from 'react';
import { useLocation } from 'react-router-dom';

const FriendFundingPayPage = () => {
    const location = useLocation();
    const fundingAmount = location.state;

    return (
        <div>
            <p>펀딩된 금액: {fundingAmount}</p>
        </div>
    );
};

export default FriendFundingPayPage;
