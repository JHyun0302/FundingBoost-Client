import React from 'react';
import DeliveryAddress from "../deliveryAddress/deliveryAddress";
import './orderHistoryList.scss';
const OrderHistoryList = () => {
    return (
        <div className="orderHistoryList">
            <div className="orderHistoryList-contaideliveryListner">
                <div className="orderHistoryList-box">
                    <div className="order-history-list">
                        <div className="order-history-list-head">
                            <div className="delivery-address-list-delivery-management">구매 이력</div>
                        </div>
                        <div className="delivery-address-list-line"/>
                        <div className="delivery-address-list-addresses">
                            {/*{deliveryData?.data?.myPageDeliveryDtoList?.map((deliveryData, index) => (*/}
                            <DeliveryAddress />
                            <DeliveryAddress />
                            <DeliveryAddress />
                            {/*))}*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderHistoryList;