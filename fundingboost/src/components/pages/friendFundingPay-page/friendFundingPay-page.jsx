// FriendFundingPayPage 컴포넌트
import React, { useEffect, useState } from 'react';

const FriendFundingPayPage = ({fundingAmount}) => {

console.log("펀딩된 금액: "+fundingAmount);
    return (
        <div>
            <p>펀딩된 금액: {fundingAmount}</p>
        </div>
    );
};

export default FriendFundingPayPage;
