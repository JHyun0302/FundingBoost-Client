import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // react-router-dom에서 useParams 가져오기
import axios from "axios";
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import FriendFundingDetailItem from "../../molecules/FriendFundingDetail/FriendFundingDetail-item/friendFundingDetail-item";
import FriendFundingDetailOptionDetail from "../../molecules/FriendFundingDetail/friendFundingDetail-optionDetail/friendFundingDetail-optionDetail";
import "./friendFundingDetail-page.scss";

const FriendFundingDetailPage = () => {
    const { friendFundingId } = useParams(); // URL에서 친구 펀딩 ID 가져오기
    const [friendFundingDetailData, setFriendFundingDetailData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://6e7c48eb-1b4f-4777-b960-9cc07bec54f4.mock.pstmn.io/main/${friendFundingId}`, {
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
        fetchData();
    }, [friendFundingId]);

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
