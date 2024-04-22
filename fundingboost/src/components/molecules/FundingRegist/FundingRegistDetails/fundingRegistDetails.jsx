import React from 'react';
import FundingRegistBtn from "../../../atoms/button/FundingRegistBtn/fundingRegistBtn";
import FundingMessage from "../../../atoms/FundingMessage/fundingMessage";
import FundingTagBtn from "../../../atoms/button/FundingTagBtn/fundingTagBtn";
import Calender from "../../../atoms/Calendar/calender";
import './fundingRegistDetails.scss';

function FundingRegistDetails(props) {
    return (
        <div className="fundingRegistDetails">
            <div className="fundingRegistDetailsContent">
                <div>
                    <Calender/>
                    <FundingTagBtn/>
                    <FundingMessage/>
                </div>
                <div>
                    <FundingRegistBtn/>
                </div>
            </div>


        </div>


    );
}

export default FundingRegistDetails;