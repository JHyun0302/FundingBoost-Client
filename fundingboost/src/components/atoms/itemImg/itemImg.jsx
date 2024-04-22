//item 이미지
import React from 'react';
import './itemImg.scss';
import NonItemImg from '../../../assets/nonItemImg.svg';
function ItemImg({ItemImg}){
    return(
        <img src={ItemImg || NonItemImg} alt="상품이미지" className="item-img" />
    );
}

export default ItemImg;