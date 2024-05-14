import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // react-router-dom에서 useParams 가져오기
import axios from "axios";
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import FriendFundingDetailItem from "../../molecules/FriendFundingDetail/FriendFundingDetail-item/friendFundingDetail-item";
import FriendFundingDetailOptionDetail from "../../molecules/FriendFundingDetail/friendFundingDetail-optionDetail/friendFundingDetail-optionDetail";
import "./friendFundingDetail-page.scss";
import { useLocation } from 'react-router-dom';


const FriendFundingDetailPage = () => {
    const [friendFundingDetailData, setFriendFundingDetailData] = useState({});
    const { fundingId } = useParams();
    console.log("FundingId: "+fundingId);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://65fd-112-218-95-58.ngrok-free.app/api/v1/funding/friends/${fundingId}?memberId=1`, {
                    responseType: 'json',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials": true,
                        "ngrok-skip-browser-warning": true,
                    },
                });
                setFriendFundingDetailData(response.data);
                console.log("response ->", response.data);
            } catch (error) {
                console.error("Error data:", error);
            }
        };
        console.log("FundingId2: "+fundingId);
        fetchData();
    }, [fundingId]);

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
