import React, {useEffect,useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import PointUse from '../../atoms/point/pointUse';
import './friendFundingPay-page.scss'
import img from '../../../assets/logo.svg';
import axios from "axios";

import HeaderBar from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import receipt from "../../../assets/friendFunding/receipt.svg";
import FriendFundingPayPrice from "../../molecules/FriendFundingPay/FriendFundingPay-Price/friendFundingPay-Price";
import FriendFundingPayBarcode
    from "../../molecules/FriendFundingPay/FriendFundingPay-barcode/friendFundingPay-barcode";
import FriendFundingPayProfile
    from "../../molecules/FriendFundingPay/FriendFundingPay-profile/friendFundingPay-profile";
import FriendFundingPayCurrentPay
    from "../../molecules/FriendFundingPay/FriendFundingPay-CurrentPay/friendFundingPay-CurrentPay";

const FriendFundingPayPage = () => {
    const location = useLocation();
    const fundingAmount = location.state;

    const { fundingId } = useParams();
    console.log("FundingId: "+fundingId);

    const [friendFundingPayData, setFriendFundingPayData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://65fd-112-218-95-58.ngrok-free.app/api/v1/pay/friends/2?memberId=1`, {
                    responseType: 'json',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials": true,
                        "ngrok-skip-browser-warning": true,
                    },
                });
                console.log("response ->", response.data);
                setFriendFundingPayData(response.data.data);
            } catch (error) {
                console.error("Error data:", error);
            }
        };
        fetchData();
    }, [fundingId]);


    return (

        <div className="friendFundingPayPage">
            <HeaderBar />
            {friendFundingPayData && friendFundingPayData.friendProfile && (
                <>
                <div className="friendFundingPayPageDetile">
                    <FriendFundingPayProfile friendFundingPayData={friendFundingPayData} />
                    <FriendFundingPayPrice  friendFundingPayData={friendFundingPayData}/>
                    <PointUse friendFundingPayData={friendFundingPayData}/>
                    <FriendFundingPayCurrentPay friendFundingPayData={friendFundingPayData}/>
                    <FriendFundingPayBarcode friendFundingPayData ={friendFundingPayData}/>

                </div>

                </>
            )}
        <Footer />
        </div>

    );

};

export default FriendFundingPayPage;
