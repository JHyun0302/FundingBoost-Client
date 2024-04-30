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
            const response = await axios.get("https://6e7c48eb-1b4f-4777-b960-9cc07bec54f4.mock.pstmn.io/FundingRegist");
            setData(response.data.data);
        } catch (error) {
            console.error('Error data:', error);
        }
    }
    console.log(data);

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(data);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setData(items);
    };

    return (
        <div className="FundingRegistItem" style={{ overflowY: 'scroll', height: '100vh', scrollbarWidth: 'none'}}  >
            {Array.isArray(data) && data.map((item, index) => (
                <div key={index}>

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
