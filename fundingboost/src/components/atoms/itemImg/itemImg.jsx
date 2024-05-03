//item 이미지
import React, {useEffect, useState} from 'react';
import './itemImg.scss';
import axios from 'axios';
import NonItemImg from '../../../assets/nonItemImg.svg';
import ProgressBar from "react-bootstrap/ProgressBar";

function ItemImg({imageUrl}){


        return (
            <div className="item-img-container">
                {imageUrl ? <img src={imageUrl} alt="Item" className="item-img"/> :
                    <img src={NonItemImg} alt="No Item" className="non-item-img"/>}
        </div>
        );


}

export default ItemImg;