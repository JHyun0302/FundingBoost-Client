import React, { useState, useEffect } from 'react';
import './mypay.scss';
import MypayProductDetail from '../../../molecules/Mypay-Product-Detail/mypay-product-detail';
import MypayDelivery from "../../../molecules/Mypay-Delivery/mypay-delivery";
import MypayPayment from "../../../molecules/Mypay-Payment/mypay-payment";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import NonMemberModal from "../../../atoms/nonMemberModal/nonMemberModal";

const MypayPane = () => {
    const [apiData, setApiData] = useState(null);
    const [fundingItemData, setFundingItemData] = useState(null);
    const [deliveryDtoList, setDeliveryDtoList] = useState([]); // deliveryDtoList 상태 추가
    const location = useLocation();
    const [collectPrice, setCollectPrice] = useState(null);
    const [point, setPoint] = useState(null);
    const [modalShowState, setModalShowState] = useState(false);

    const { state: { myPageFundingItemDtoList } } = location;
    console.log("myPageFundingItemDtoList", myPageFundingItemDtoList);
    console.log(deliveryDtoList);

    useEffect(() => {
        const fetchFundingItemData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    setModalShowState(true);
                    return;
                }

                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/pay/view/funding/1`, {

                    responseType: 'json',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${accessToken}`,
                        "Access-Control-Allow-Origin": "http://localhost:3000/",
                        'Access-Control-Allow-Credentials': true
                    }
                });
                console.log('GET 결과:', response.data);
                setFundingItemData(response.data);
                setApiData(response.data.data);
                setDeliveryDtoList(response.data.data.deliveryDtoList);
                setCollectPrice(response.data.data.collectPrice);
                setPoint(response.data.data.point);
            } catch (error) {
                console.error('GET 에러:', error);
            }
        };

        fetchFundingItemData();
    }, []);

    const onUpdateUsingPoint = (value) => {
        // 여기에서 사용 포인트 업데이트 로직을 정의합니다.
        // 예를 들어:
        console.log("사용 포인트가 업데이트되었습니다:", value);
    };

    console.log(onUpdateUsingPoint);

    return(
        <div className="mypay-page-container">
            {modalShowState && <NonMemberModal message="로그인 후 펀딩부스트를 시작해보세요." />}
            <div className="mypay-left-container">
                <MypayProductDetail myPageFundingItemDtoList={myPageFundingItemDtoList[0]} />
                <MypayDelivery deliveryDtoList={deliveryDtoList}/>
            </div>
            <div className="mypay-right-container">
                <div className="payment-container">
                    <MypayPayment collectPrice={collectPrice} point={point} myPageFundingItemDtoList={myPageFundingItemDtoList[0] } onUpdateUsingPoint={onUpdateUsingPoint}/>
                </div>
            </div>
        </div>
    );
};

export default MypayPane;
