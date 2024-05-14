import React, { useEffect, useState } from "react";
import "./mypay-delivery-input.scss";

export default function MyPayDeliveryInput ({ selectedItem }) {
    // 선택된 상품 정보를 저장할 상태 변수
    const [selectedDelivery, setSelectedDelivery] = useState(null);

    // 선택된 상품이 변경될 때마다 실행되는 useEffect
    useEffect(() => {
        if (selectedItem) {
            setSelectedDelivery(selectedItem);
        }
    }, [selectedItem]);

    // 각 필드의 값을 변경하는 핸들러 함수
    const handleInputChange = (field, value) => {
        setSelectedDelivery(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    return (
        <div className="MyPayDeliveryInputBox">
            <div className="MyPayDeliveryInputView">
                <div className="MyPayDeliveryInputRecipientGroup">
                    <div className="MyPayDeliveryInputText">수령인</div>
                    <input
                        type="text"
                        className="MyPayDeliveryInputRectangle"
                        placeholder="수령인을 입력해주세요"
                        value={selectedDelivery ? selectedDelivery.customerName : ""}
                        onChange={(e) => handleInputChange("customerName", e.target.value)}
                    />
                </div>
                <div className="MyPayDeliveryInputGroup-4">
                    <div className="MyPayDeliveryInputText">배송지</div>
                    <div className="MyPayDeliveryInputGroup-6">
                        <div className="MyPayDeliveryInputGroup-5">
                            <input
                                type="text"
                                className="MyPayDeliveryInputRectangle-4"
                                placeholder="배송지를 입력해주세요"
                                value={selectedDelivery ? selectedDelivery.address : ""}
                                onChange={(e) => handleInputChange("address", e.target.value)}
                            />
                            <div className="MyPayDeliveryInputOverlap-group">
                                <button className="MyPayDeliveryInputText-4">우편번호 검색</button>
                            </div>
                            <input className="MyPayDeliveryInputRectangle-3"/>
                        </div>
                        <div className="MyPayDeliveryInputRecipientGroup">
                            <input
                                type="text"
                                className="MyPayDeliveryInputOverlap"
                                placeholder="상세 주소를 입력해주세요"
                            />
                        </div>
                    </div>
                </div>
                <div className="MyPayDeliveryInputRecipientGroup">
                    <div className="MyPayDeliveryInputText">연락처</div>
                    <input
                        type="text"
                        className="MyPayDeliveryInputRectangle"
                        placeholder="연락처를 입력해주세요"
                        value={selectedDelivery ? selectedDelivery.phoneNumber : ""}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    />
                </div>
                <div className="MyPayDeliveryInputRecipientGroup">
                    <div className="MyPayDeliveryInputText">요청 사항</div>
                    <input
                        type="text"
                        className="MyPayDeliveryInputRectangle-2"
                        placeholder="요청사항을 입력해주세요(선택)"
                    />
                </div>
            </div>
        </div>
    );
};
