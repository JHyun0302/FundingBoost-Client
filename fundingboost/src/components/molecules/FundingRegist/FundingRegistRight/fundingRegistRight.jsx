import React from 'react';
import FundingRegistBtn from "../../../atoms/button/FundingRegistBtn/fundingRegistBtn";
import FundingMessage from "../../../atoms/FundingMessage/fundingMessage";
import FundingTagBtn from "../../../atoms/button/FundingTagBtn/fundingTagBtn";
import Calender from "../../../atoms/Calendar/calender";
import './fundingRegistRight.scss';

function FundingRegistRight(props) {
    return (
        <div className="fundingRegistRight">
            <div className="fundingRegistRightContent">
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

export default FundingRegistRight;