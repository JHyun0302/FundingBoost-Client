import React from 'react';
import './friendFunding-page.scss';
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import SingleFriendFunding from "../../molecules/Single-friendFunding/single-friendFunding";

const FriendFundingPage = () => {
    return (
        <div>
            <Header />
            <SingleFriendFunding/>
            <Footer />
        </div>
    );
};

export default FriendFundingPage;