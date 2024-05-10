import React, {useEffect, useState} from 'react';
import FriendFundingDetailItem
    from "../../molecules/FriendFundingDetail/FriendFundingDetail-item/friendFundingDetail-item";
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import FriendFundingDetailOptionDetail
    from "../../molecules/FriendFundingDetail/friendFundingDetail-optionDetail/friendFundingDetail-optionDetail";
import "./friendFundingDetail-page.scss";
import axios from "axios";

const FriendFundingDetailPage = () => {
    const [friendFundingDetailData, setFriendFundingDetailData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://07ae-112-218-95-58.ngrok-free.app/api/v1/funding/friends/1?memberId=2',{
                    responseType: 'json',
                    headers: ({
                        "Content-Type" : "application/json",
                        "Access-Control-Allow-Credentials" : true,
                        "ngrok-skip-browser-warning": true,
                    }),
                });
                setFriendFundingDetailData(response.data);
                console.log("response ->", response.data);
            } catch (error) {
                console.error("Error data:", error);
            }
        };
        fetchData();
    }, []);

    console.log("data:", friendFundingDetailData && friendFundingDetailData.data);
    return (

        <div className="friendFundingDetail-Page">
            <Header />

            <div className="friendFundingDetail">
                <FriendFundingDetailItem friendFundingDetailData={friendFundingDetailData} />
                <div className="friendFundingDetail-optionDetail">
                    <FriendFundingDetailOptionDetail friendFundingDetailData={friendFundingDetailData} />
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default FriendFundingDetailPage;