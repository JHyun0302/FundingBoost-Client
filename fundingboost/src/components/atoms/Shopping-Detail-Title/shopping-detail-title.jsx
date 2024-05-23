import React from "react";
import "./shopping-detail-title.scss";
import img from "../../../assets/testitem.svg";
import ShoppingDetailMenu from "../Shopping-Detail-Menu/shopping-detail-menu";

export default function ShoppingDetailItem({ itemId, itemName, itemThumbnailImageUrl, itemPrice, option }) {
    return (
        <div className="ShoppingDetailItemBox">
            <div className="ShoppingDetailItemBoxView">
                <div className="shopping-detail-title-wrapper">
                    <img className="image" alt="Image" src={itemThumbnailImageUrl} />
                    <div className="shopping-detail-column">
                        {itemName && (
                            <div className="itemName">
                                {itemName.length > 40 ? itemName.slice(0, 40) : itemName}
                                {itemName.length > 40 && <br />}
                                {itemName.length > 40 && itemName.slice(40)}
                            </div>
                        )}
                        <ShoppingDetailMenu itemId= {itemId} itemPrice={itemPrice} option={option} />
                    </div>
                </div>
            </div>
        </div>
    );
}
