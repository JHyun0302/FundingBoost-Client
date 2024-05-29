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
    const [deliveryDtoList, setDeliveryDtoList] = useState([]);
    const location = useLocation();
    const [point, setPoint] = useState(null);
    const [selectedDeliveryItem, setSelectedDeliveryItem] = useState(null);

    const { selectedItems, itemPurchase } = location.state || {};
    const [purchaseItem, setPurchaseItem] = useState(itemPurchase ? [itemPurchase] : selectedItems || []);

    console.log("selectedItems", selectedItems);
    console.log(deliveryDtoList);
    console.log(purchaseItem);

    useEffect(() => {
        const fetchOrderPayData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/pay/view/order`, {
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

    const getTotalPrice = () => {
        if (purchaseItem.length > 0) {
            const totalPrice = purchaseItem.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.itemPrice;
            }, 0);
            return totalPrice;
        }
        return 0;
    };

    return (
        <div className="order-pay-page-container">
            <div className="orderpay-left-container">
                <div className="mypay-product-details-text">상품내역</div>
                <div className="MyOrderItemBox">
                    {purchaseItem && purchaseItem.map((item, index) => (
                        <OrderProductDetail key={index} selectedItems={item} />
                    ))}
                </div>
                <OrderPayDelivery
                    deliveryDtoList={deliveryDtoList}
                    onSelectItem={setSelectedDeliveryItem} // 선택한 배송지 설정
                />
            </div>
            <div className="orderpay-right-container">
                <div className="orderpayment-container">
                    {purchaseItem.length > 0 && (
                        <OrderpayPoint
                            selectedItems={purchaseItem}
                            totalPrice={getTotalPrice()}
                            point={point}
                            onUpdateUsingPoint={onUpdateUsingPoint}
                            selectedDeliveryItem={selectedDeliveryItem} // 선택한 배송지 정보 전달
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default OrderPane;
