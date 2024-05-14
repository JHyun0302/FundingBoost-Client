import React from 'react';
import style from './mainrankingitem.scss';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../../utils/formats';

export default function Mainrankingitem({ product }) {

    if (!product) {
        return null;
    }

    const { itemId, itemName, price, itemImageUrl, brandName } = product;

    console.log(product)
    
    // 상품 타이틀이 너무 길 경우 일부만 표시
    const truncatedTitle = itemName.length > 25 ? itemName.slice(0, 25) + '...' : itemName;

    return (
        <Link to={"/product/" + itemId} className={style.products} style={{textDecoration: 'none'}}>
            <div className={style.imgwrap}>
                {/* 상품 품절 여부에 따라 표시 */}
                <div className={style.soldout}>
                    {/*<p className={style.text}>{price > 0 ? "판매중" : "Sold Out"}</p>*/}
                    <div className={style.bg}></div>
                </div>
                <div className="img-wrapper">
                    <img src={itemImageUrl} width="100%" style={{borderRadius: '3px'}} alt={itemName}/>
                </div>
            </div>
            <div className="brand-wrapper">
                <p className={style.brand}>{brandName}</p>
            </div>
            <div className="title-wrapper">
                <h4 className={style.title}>{truncatedTitle}</h4>
            </div>
            <div className="price-wrapper">
                <p className={style.price}>{price}원</p>
            </div>
        </Link>
    );
}
