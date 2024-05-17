import React from "react"
import "./shopping-detail-title.scss";
import img from "../../../assets/testitem.svg"
import ShoppingDetailMenu from "../Shopping-Detail-Menu/shopping-detail-menu";


export default function ShoppingDetailItem ({ itemName, itemThumbnailImageUrl, itemPrice, option }) {
    return (
        <div className="ShoppingDetailItemBox">
            <div className="ShoppingDetailItemBoxView">
                <div className="shopping-detail-title-wrapper">
                    <img className="image" alt="Image" src={itemThumbnailImageUrl} />
                    <div className="shopping-detail-column">
                    <div className="itemName">{itemName}</div>
                        <ShoppingDetailMenu itemPrice={itemPrice} option={option}/>
                    </div>
                </div>
            </div>
        </div>
    );
};