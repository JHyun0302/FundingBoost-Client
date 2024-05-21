import React from 'react';
import './wishList.scss';
import WishListSingleItem from "../wishList-SingleItem/wishList-SingleItem";

const WishList = () => {
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
                            <div className="wish-list-single-item">
                                <WishListSingleItem />
                                <WishListSingleItem />
                                <WishListSingleItem />
                                <WishListSingleItem />
                                <WishListSingleItem />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WishList;