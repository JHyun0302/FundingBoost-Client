import React from "react"
import "./shopping-detail-info.scss";
import shoppingTestImg from "../../../assets/shoppingDetailTest.PNG"

export default function ShoppingDetailItemExplain () {

    return (
        <div className="box">

            <div className="shopping-detail-title">
                <div className="shop-item-index-container">
                    <button className="text-wrapper">상품 설명</button>
                    <button className="text-wrapper-2">리뷰</button>
                    <button className="text-wrapper-3">문의/정책</button>

                </div>
            </div>
            <div className="shopping-detail-img">
                <img className="shopping-detail-testImg" src={shoppingTestImg}/>
            </div>

            <div className="blank"/>


        </div>
    );
};