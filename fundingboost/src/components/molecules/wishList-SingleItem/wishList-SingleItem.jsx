import React from 'react';
import { FcLike } from "react-icons/fc";
import './wishList-SingleItme.scss'
import {Link} from "react-router-dom";
import logo from "../../../assets/logo.png";
const WishListSingleItem = ({wishListData}) => {
    return (
        <div className="wishListSingleItem">
            {/*<Link to={"/shopping/detail/" + itemId} className={style.product} style={{textDecoration: 'none'}}>*/}
                <div className="wishList-itme-title">

                        <div className="wish-img-wrapper">
                            <img src={wishListData.itemThumbnailImageUrl} width="100%" style={{borderRadius: '3px'}} />
                        </div>
                </div>

                <div className="wish-brand-wrapper">
                    <p className="wish-brand">카카오</p>
                </div>

                <div className="wish-title-wrapper">
                    <div className="wish-title">{wishListData.itemName} </div>
                </div>

                <div className="wish-price-likebtn">
                        <p className="wish-Price">{wishListData.itemPrice.toLocaleString()}원</p>
                        <div className="likeBtn">
                            <FcLike />
                        </div>
                </div>

            {/*</Link>*/}
        </div>
    );
};

export default WishListSingleItem;