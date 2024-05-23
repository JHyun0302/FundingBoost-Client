import React from 'react';
import './wishList.scss';
import WishListSingleItem from "../wishList-SingleItem/wishList-SingleItem";

const WishList = ({wishListData}) => {
    console.log("위시:",wishListData);
    return (
        <div className="wishList">
            <div className="wishList-container">
                <div className="wishList-box">
                    <div className="wish-list">
                        <div className="wish-list-head">
                            <div className="wish-list-wish-management">위시리스트</div>
                        </div>

                        <div className="wish-list-line"/>

                        <div className="wishList-SingleItem">
                            {wishListData?.bookmarkItemDtos?.map((wishListData, index) => (
                            <div key={index} className="wish-list-single-item">
                                <WishListSingleItem wishListData={wishListData}/>
                            </div>
                                ))}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WishList;