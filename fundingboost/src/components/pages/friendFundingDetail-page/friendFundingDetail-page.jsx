import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import FriendFundingDetailItem from "../../molecules/FriendFundingDetail/FriendFundingDetail-item/friendFundingDetail-item";
import FriendFundingDetailOptionDetail from "../../molecules/FriendFundingDetail/friendFundingDetail-optionDetail/friendFundingDetail-optionDetail";
import "./friendFundingDetail-page.scss";
import NonMemberModal from "../../atoms/nonMemberModal/nonMemberModal";

const FriendFundingDetailPage = () => {
    const [friendFundingDetailData, setFriendFundingDetailData] = useState({});
    const { fundingId } = useParams();
    const [modalShowState, setModalShowState] = useState(false);
    console.log("FundingId: "+fundingId);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    setModalShowState(true);
                    return;
                }

                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/funding/friends/${fundingId}`, {
                    responseType: 'json',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "https://k14f4ad097352a.user-app.krampoline.com/",
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
            {modalShowState && <NonMemberModal message="로그인 후 친구들의 펀딩을 구경해보세요." />}
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