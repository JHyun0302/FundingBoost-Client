import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import FriendFundingDetailItem from "../../molecules/FriendFundingDetail/FriendFundingDetail-item/friendFundingDetail-item";
import FriendFundingDetailOptionDetail from "../../molecules/FriendFundingDetail/friendFundingDetail-optionDetail/friendFundingDetail-optionDetail";
import "./friendFundingDetail-page.scss";


const FriendFundingDetailPage = () => {
    const [friendFundingDetailData, setFriendFundingDetailData] = useState({});
    const { fundingId } = useParams();
    console.log("FundingId: "+fundingId);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');

                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/funding/friends/${fundingId}`, {
                    responseType: 'json',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000/",
                        "Access-Control-Allow-Credentials": true,
                        "Authorization": `Bearer ${accessToken}`
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