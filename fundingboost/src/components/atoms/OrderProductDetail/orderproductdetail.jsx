import React from 'react';
import './orderproductdetail.scss';

const OrderProductDetail = ({ selectedItems }) => {

    const item = selectedItems;
    console.log("Item:", item);

    return (
        <div className="order-padding-area">
                <div className="MyPayItemOverlap">
                    <div className="MyPayItem-left-group">
                        <img className="MyPayItem-image" alt="ItemImage" src={item.itemImageUrl}/>
                        <div className="name-option-group">
                            <p className="MyPayItem-item-name">{item.itemName}</p>
                            <div className="MyPayItem-option-group">
                                <div className="MyPayItem-option-box">
                                    <div className="MyPayItem-option">옵션</div>
                                </div>
                                <div className="MyPayItem-option-name">{item.optionName}</div>
                            </div>
                        </div>
                    </div>
                    <div className="MyPayItem-price">{item.itemPrice.toLocaleString()} 원</div>
                </div>
        </div>
    );
};

export default OrderProductDetail;
