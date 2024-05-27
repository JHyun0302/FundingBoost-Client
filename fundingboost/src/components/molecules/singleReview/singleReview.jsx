import React from 'react';
import './singleReview.scss';
import logo from "../../../assets/logo.png";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const SingleReview = ({myReviewList}) => {
    console.log(myReviewList);
    return (
        <div className="singleReview">
            <div className="singleReview-header">
                <div className="singleReview-item">
                    <div className="review-item-img">
                        <img src={logo} width="100%" style={{borderRadius: '3px'}}/>
                    </div>
                    <div className="review-item">
                        <div className="review-item-name">아이패드 에어/4/5세대 10.9 인치 클리어 애플펜슬 수납 스마트커버</div>
                        <div className="review-item-text">
                            <div className="review-option">옵션</div>
                            <div className="review-price"> 100,000</div>
                        </div>
                    </div>
                </div>
                <hr style={{border: '0.05px solid', color: 'black', width: '100%',  margin: '0'}}/>
                <div className="review">
                    <div className="review-detail">
                        <div className="review-detail-info">
                            <p className="review-star">
                                <BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/>
                            </p>
                            <div className="review-day">2024-05-21</div>

                            <div className="review-text">배송이 너무 느리네요. 상품은 맘에 들어요</div>
                        </div>

                        <div className="review-img">
                            <img src={logo} width="100%" style={{borderRadius: '3px'}}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleReview;