import React from 'react';
import wish from "../../../../assets/emptyheart.svg";
import './wishBtn.scss'
import axios from "axios";
const WishBtn = () => {
    const [isWish, setIsWish] = React.useState(false);

    // const clickWishBtn = async () => {
    //     setIsWish(!isWish);
    //
    //     try{
    //         const respose = await axios.post(`${process.env.REACT_APP_FUNDINGBOOST}/items/like/{item_id}`, data,{
    //             responseType: 'json',
    //             headers: ({
    //                 "Content-Type" : "application/json",
    //                 "Access-Control-Allow-Origin": "http://localhost:3000/",
    //                 "Access-Control-Allow-Credentials" : true,
    //                 "ngrok-skip-browser-warning": true
    //             }),
    //             withCredentials: true,
    //         });
    //
    //
    //     } catch (error) {
    //         console.error("wishBtn Post Error :", error);
    //     }
    // }
    return (
        <div className="wishBtn">
            <button className="heartIconWrapper">
                <img className="heartIcon" alt="heartIcon" src={wish}/>
            </button>
        </div>
    );
};

export default WishBtn;