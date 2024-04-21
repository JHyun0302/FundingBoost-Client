import React from "react";
import "./singlegifthubitem.scss";
import Checkbox from "../../atoms/checkbox/checkbox";
import loginmoji from "../../../assets/loginmoji.svg";

export default function SingleGIFHubItem() {
    return (
        <div className="giftbox-total-container">
            <div className="checkbox-item-container">
                <Checkbox/>

                <div className="FundingRegistItem">
                    <img src={loginmoji} alt={loginmoji} className="sequenceGroup"/>
                    <div className="giftbox-item-container">
                        <div className="giftbox-item-title">
                            죠르디 피규어 LED 무드등
                        </div>
                        <button className="delete-button">삭제</button>
                        <div className="giftbox-option-container">
                            <div className="giftbox-item-optionGroup">
                                <div className="giftbox-item-option">옵션</div>
                            </div>
                            <div className="giftbox-item-optionName">옵션선택어쩌고저쩌고</div>
                        </div>
                        <div className="quantity-container">
                            <span className="quantity-text">수량 </span>
                            <span className="quantity-number">1</span>
                            <button className="change-button">변경</button>
                        </div>
                        <div className="giftbox-item-price">9,900 원</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
