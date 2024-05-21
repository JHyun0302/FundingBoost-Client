import React, { useState, useEffect } from 'react';
import './order-pay.scss';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import OrderProductDetail from "../../../atoms/OrderProductDetail/orderproductdetail";
import OrderpayPoint from "../../../atoms/OrderPayPayment/orderpaypayment";
import OrderPayDelivery from "../../../atoms/OrderPayDelivery/orderpaydelivery";

const OrderPane = () => {
    const [apiData, setApiData] = useState(null);
    const [fundingItemData, setFundingItemData] = useState(null);
    const [deliveryDtoList, setdeliveryDtoList] = useState([]);
    const location = useLocation();
    const [point, setPoint] = useState(null);

    const { state: { selectedItems } } = location;

    console.log("selectedItems", selectedItems);
    console.log(deliveryDtoList);

    useEffect(() => {
        const fetchOrderPayData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/pay/view/order`, {
                    responseType: 'json',
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "http://localhost:3000/",
                        'Access-Control-Allow-Credentials': true,
                        'ngrok-skip-browser-warning': true,
                    }
                });
                console.log('GET 결과:', response.data);
                setFundingItemData(response.data);
                setApiData(response.data.data);
                setdeliveryDtoList(response.data.data.deliveryDtoList);
                setPoint(response.data.data.point);
            } catch (error) {
                console.error('GET 에러:', error);
            }
        };

        fetchOrderPayData();
    }, []);

    const onUpdateUsingPoint = (value) => {
        console.log("사용 포인트가 업데이트되었습니다:", value);
    };

    return (
        <div className="order-pay-page-container">
            <div className="orderpay-left-container">
                <OrderProductDetail selectedItems={selectedItems[0]} />
                <OrderPayDelivery deliveryDtoList={deliveryDtoList}/>
            </div>
            <div className="orderpay-right-container">
                <div className="orderpayment-container">
                    <OrderpayPoint point={point} selectedItems={selectedItems[0] } onUpdateUsingPoint={onUpdateUsingPoint}/>
                </div>
            </div>
        </div>
    );
}

export default OrderPane;