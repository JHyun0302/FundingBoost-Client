import React, {useEffect, useState} from 'react';
import './mypage-delivery-mange.scss';
import MypageIndex from '../../../molecules/MypageIndex/mypageindex';
import MypageProfile from '../../../molecules/MypageProfile/mypageprofile';
import MyPageIndex from "../../../molecules/MypageIndex/mypageindex";
import axios from "axios";
import {responsivePropType} from "react-bootstrap/createUtilityClasses";
import DeliveryAddressList from "../../../molecules/deliveryList/deliveryList";

const MypageDeliveryPane = () => {
    const [apiData , setApiData ] = useState(null);
    const handleButtonClick = (index) => {
        console.log(`Selected index: ${index}`);
    };

    useEffect(() => {
        // API 호출 함수
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'GET',
                    url: `${process.env.REACT_APP_FUNDINGBOOST}/delivery`,
                    headers: {
                        "Access-Control-Allow-Credentials": true,
                        "Access-Control-Allow-Origin": "http://localhost:3000/",
                        "ngrok-skip-browser-warning": true
                    },
                    responseType: 'json'
                });
                console.log(response.data);
                setApiData(response.data.data);
                console.log("data:",setApiData);

            } catch (error) {
                console.error("API 호출 중 오류가 발생했습니다.", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="mypage-myhistory-total-container">
            <div className="mypage-myhistory-left-pane-container">
                {/*{apiData && <MypageProfile profileInfo={apiData} />}*/}
                <MyPageIndex onButtonClick={handleButtonClick} currentPageIndex={4} />
            </div>
            <div className="mypage-myhistory-right-pane-containter">
                <DeliveryAddressList deliveryData={apiData} />
            </div>
        </div>
    );
}

export default MypageDeliveryPane;