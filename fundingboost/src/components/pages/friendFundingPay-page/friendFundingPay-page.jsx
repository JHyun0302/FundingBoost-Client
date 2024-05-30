import React, {useEffect,useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import PointUse from '../../atoms/point/pointUse';
import './friendFundingPay-page.scss'
import img from '../../../assets/logo.svg';
import axios from "axios";
import defaultProfileImg from "../../../assets/defaultProfile.svg";
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

import NonMemberModal from "../../atoms/nonMemberModal/nonMemberModal";


const FriendFundingPayPage = () => {

    const [modalShowState, setModalShowState] = useState(false);

    const location = useLocation();
    const fundingAmount = location.state;
    const [usePoints, setUsePoints] = useState("");
    const [finalPrice, setFinalPrice] = useState("");
    const { fundingId } = useParams();
    console.log("FundingId: "+fundingId);

    const [friendFundingPayData, setFriendFundingPayData] = useState(null);

    const updateusePoints = (points) => {
        setUsePoints(points);
        console.log("포인트 :" + points);
    };

    console.log("결제금액 :" + finalPrice);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    setModalShowState(true);
                    return;
                }


                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/pay/friends/${fundingId}`, {

                    responseType: 'json',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000/",
                        "Access-Control-Allow-Credentials": true,
                        "Authorization": `Bearer ${accessToken}`
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
            {modalShowState && <NonMemberModal message="로그인 후 친구들의 펀딩을 구경해보세요." />}
            {friendFundingPayData &&(
                <>
                    <div className="friendFundingPayPageDetile">
                        <div className="friendFundingPayPageDetileImg">
                            <img src={receipt} alt="receipt" className="receiptImg"/>
                        </div>
                        <div className="friendFundingPayPageDetiles">
                            <div className="friendFundingPayPageDetileInfo">
                                <div className="friendFundingProfile">
                                    <FriendFundingPayProfile friendFundingPayData={friendFundingPayData} />
                                </div>

                                <FriendFundingPayPrice friendFundingPayData={friendFundingPayData}/>
                                <hr style={{border: 'none', borderBottom: '2.5px dashed black', width: '700px'}}/>
                                <PointUse friendFundingPayData={friendFundingPayData} fundingAmount={fundingAmount}
                                          onUpdatePoints={updateusePoints}/>
                                <hr style={{border: 'none', borderBottom: '2.5px dashed black', width: '700px'}}/>
                                <FriendFundingPayCurrentPay
                                    friendFundingPayData={friendFundingPayData}
                                    fundingAmount={fundingAmount}
                                    usePoints={usePoints}
                                    onUpdateFinalPrice={setFinalPrice}
                                />
                                <hr style={{border: 'none', borderBottom: '2.5px dashed black', width: '700px'}}/>
                                <FriendFundingPayBarcode friendFundingPayData={friendFundingPayData} finalPrice={finalPrice}
                                                         fundingAmount={fundingAmount}  usePoints={usePoints} fundingId={fundingId}/>
                            </div>
                        </div>


                    </div>

                </>
            )}
            <Footer/>
        </div>

    );

};

export default FriendFundingPayPage;
