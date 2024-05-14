import React , { useState }from "react";
import "./pointUse.scss";
import {useLocation, useParams} from 'react-router-dom';


export default function FriendFundingMyPoint({friendFundingPayData, fundingAmount, onUpdatePoints}) {
    const [usePoints, setUsePoints] = useState("0");

    console.log("Funding: "+fundingAmount);
    if (!friendFundingPayData) {
        return 0;
    }

    const handleUseAllPoints = () => {
        let allPoints = friendFundingPayData.myPoint;
        if (allPoints > fundingAmount) {
            allPoints = fundingAmount;
        }
        setUsePoints(allPoints.toLocaleString());
        onUpdatePoints(allPoints);
    };

    const useInputPoints = (e) =>{

        // const numericValue = inputValue.replace(/\D/g, '');
        let inputPoints = e.target.value;
        inputPoints = isNaN(inputPoints) || inputPoints === "" ? "0" : parseInt(inputPoints);
        if (inputPoints > friendFundingPayData.myPoint) {
            inputPoints = friendFundingPayData.myPoint;
        }
        if (inputPoints > fundingAmount) {
            inputPoints = fundingAmount;
        }
        setUsePoints(inputPoints.toLocaleString());
        onUpdatePoints(inputPoints);
    }

    return (
        <div className="my-point">
            <div className="my-point-first-row">
                <div className="my-point-fixed-text" >포인트</div>
                <input className="my-point-input"
                       type="text"
                       value={usePoints}
                       onChange={useInputPoints }/>
                <p className="my-point-unit">P</p>
                <button className="my-point-use-all-point"  onClick={handleUseAllPoints}>전액사용</button>
            </div>
            <p className="my-point-use-usable-point">사용 가능 포인트 {friendFundingPayData.myPoint.toLocaleString()} P</p>
        </div>
    );
};