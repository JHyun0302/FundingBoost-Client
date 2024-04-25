import React, {useEffect, useState} from 'react';
import './fundingRegistItem.scss'
import axios from 'axios';
import ItemImg from "../../../atoms/itemImg/itemImg";
import FundingItem from "../../FundingItem/FundingRegistItem/FundingItem";
import NonItemImg from "../../../../assets/nonItemImg.svg";



const FundingRegistItem = () => {

    const[data,setData]=useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://a77443a3-ce83-4082-b661-bf8e8150b7da.mock.pstmn.io/funding");
            setData(response.data.data);
        } catch (error) {
            console.error('Error data:', error);
        }
    }
    console.log(data);
    return (
        <div className="FundingRegistItem" style={{ overflowY: 'scroll', height: '100vh', scrollbarWidth: 'none'}}  >
            {Array.isArray(data) && data.map((item, index) => (
                <div key={index} className="FundingRegistItem-details">
                    <div className="itemContainer">
                        {/*<ItemImg/>*/}
                        <img src={item.itemImageUrl || NonItemImg} alt={item.itemName}  className="item-img"/>
                        <div className="itemDetail">
                            <div className="title">{item.itemName}</div>
                            <div className="optionDetail">
                                <div className="optionGroup">
                                    <div className="option">옵션</div>
                                </div>
                                <div className="optionName">{item.optionName}</div>
                            </div>
                            <div className="price">{item.itemPrice} 원</div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            );
            }


            export default FundingRegistItem;
