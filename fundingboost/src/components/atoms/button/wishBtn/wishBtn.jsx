import React, {useEffect, useState} from 'react';
import wish from "../../../../assets/emptyheart.svg";
import wishFillHeart from "../../../../assets/fillheart.svg";
import './wishBtn.scss'
import axios from "axios";
const WishBtn = ({itemId, bookmark}) => {
    const [isWish, setIsWish] = useState(bookmark);
    console.log(itemId);

    useEffect(() => {
        setIsWish(bookmark);
    }, [bookmark]);
    console.log(bookmark);

    const clickWishBtn = async () => {
        // setIsWish(!isWish);
        setIsWish(prevIsWish => !prevIsWish);
        try{
            const respose = await axios.post(`${process.env.REACT_APP_FUNDINGBOOST}/bookmark/like/${itemId}`,{
                responseType: 'json',
                headers: ({
                    "Content-Type" : "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000/",
                    "Access-Control-Allow-Credentials" : true,
                    "ngrok-skip-browser-warning": true
                }),
                withCredentials: true,
            });
            console.log("post:",respose.data);
            // setIsWish(!isWish);

        } catch (error) {
            console.error("wishBtn Post Error :", error);
        }
    }
    return (
        <div className="wishBtn">
            <button className="heartIconWrapper" onClick={clickWishBtn}>
                <img className="heartIcon" alt="heartIcon" src={!isWish ? wish: wishFillHeart} />
            </button>
        </div>
    );
};

export default WishBtn;