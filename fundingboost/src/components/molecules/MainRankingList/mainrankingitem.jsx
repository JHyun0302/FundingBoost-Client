import React from 'react';
import style from './mainrankingitem.scss';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../../utils/formats';

export default function Mainrankingitem({ products }) {
    // products가 undefined인 경우를 처리
    if (!products) {
        return null;
    }

    const price = products.price || 10000; // 기본값으로 10000 설정

    const truncatedTitle = products.title.length > 25 ? products.title.slice(0, 25) + '...' : products.title;

    return (
        <Link to={"/products/" + products.id} className={style.products} style={{ textDecoration: 'none' }}>
            <div className={style.imgwrap}>
                {products.isSoldOut ?
                    <div className={style.soldout}>
                        <p className={style.text}>Sold Out</p>
                        <div className={style.bg}></div>
                    </div>
                    : null}
                <div className="img-wrapper">
                    <img src={products.thumbnail} width="100%" style={{ borderRadius: '3px' }} alt={products.title}/>
                </div>
            </div>
            <div className="title-wrapper">
                <h4 className={style.title}>{truncatedTitle}</h4>
            </div>
            <div className="price-wrapper">
                <p className={style.price}>{formatPrice(price)}원</p>
            </div>
        </Link>
    )
}
