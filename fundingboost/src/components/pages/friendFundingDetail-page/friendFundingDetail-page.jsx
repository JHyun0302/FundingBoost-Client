import React from 'react';
import FriendFundingDetailItem
    from "../../molecules/FriendFundingDetail/FriendFundingDetail-item/friendFundingDetail-item";
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import FriendFundingDetailOptionDetail
    from "../../molecules/FriendFundingDetail/friendFundingDetail-optionDetail/friendFundingDetail-optionDetail";
import "./friendFundingDetail-page.scss";

const FriendFundingDetailPage = () => {
    return (
        <div className="friendFundingDetail-Page">
            <Header />

            <div className="friendFundingDetail">
                <FriendFundingDetailItem />
                <div className="friendFundingDetail-optionDetail">
                    <FriendFundingDetailOptionDetail />
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default FriendFundingDetailPage;