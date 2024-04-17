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

    return (
        <div className={style.products}>
            <Link to={"/products/" + products.id}>
                <div className={style.imgwrap}>
                    {products.isSoldOut ?
                        <div className={style.soldout}>
                            <p className={style.text}>Sold Out</p>
                            <div className={style.bg}></div>
                        </div>
                        : null}
                    <div className="img-wrapper">
                    <img src={products.thumbnail} width="100%" alt={products.title}/>
                    </div>
                </div>
                <h4 className={style.title}>{products.title}</h4>
                <p className={style.price}>{formatPrice(price)}원</p>
            </Link>
        </div>
    )
}
