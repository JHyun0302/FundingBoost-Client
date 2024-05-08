import React from 'react';
import FriendFundingDetailItem
    from "../../molecules/FriendFundingDetail/FriendFundingDetail-item/friendFundingDetail-item";
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
const FriendFundingDetailPage = () => {
    return (
        <div>
            <Header />
            <FriendFundingDetailItem />
            <Footer />
        </div>
    );
};

export default FriendFundingDetailPage;