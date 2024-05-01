//item 이미지
import React, {useEffect, useState} from 'react';
import './itemImg.scss';
import axios from 'axios';
import NonItemImg from '../../../assets/nonItemImg.svg';
function ItemImg(){
    const[data,setData]=useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // GET 요청 url 수정 필요!
            const response = await axios.get("https://70af-112-218-95-58.ngrok-free.app/funding");
            setData(response.data.data);
        } catch (error) {
            console.error('Error data:', error);
        }
    }
    return(
        <div className="item-img-container">
            {Array.isArray(data) && data.map((i,index)=>{
                return(
                    <img
                        key={index}
                        src={i.itemImageUrl || NonItemImg}
                        alt={i.itemName}
                        className="item-img"
                        />

                );
            })}

        </div>

    );
}


export default ItemImg;