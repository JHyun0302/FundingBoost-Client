import React from 'react';
import SingleReview from "../singleReview/singleReview";
import './reviewList.scss';
const ReviewList = () => {
    return (
        <div className="reviewList">
            <div className="reviewList-container">
                <div className="reviewList-box">
                    <div className="review-list">
                        <div className="review-list-head">
                            <div className="review-list-delivery-management">MY 리뷰</div>
                        </div>
                        <div className="review-list-line"/>
                        <div className="review-list-addresses">
                            {/*{deliveryData?.data?.myPageDeliveryDtoList?.map((deliveryData, index) => (*/}
                            <SingleReview />
                            <SingleReview />
                            <SingleReview />
                            {/*))}*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewList;