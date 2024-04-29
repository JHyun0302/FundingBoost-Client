import React, {useState} from 'react';
import FundingRegistBtn from "../../../atoms/button/FundingRegistBtn/fundingRegistBtn";
import FundingMessage from "../../../atoms/FundingMessage/fundingMessage";
import FundingTagBtn from "../../../atoms/button/FundingTagBtn/fundingTagBtn";
import Calender from "../../../atoms/Calendar/calender";
import './fundingRegistDetails.scss';
import axios from "axios";

function FundingRegistDetails(props) {
    const [selectedTag, setSelectedTag] = useState("");
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());

    const handleTagSelect = (tagText) => {
        setSelectedTag(tagText);
    };

    const handleDateChange = ({ startDate, endDate }) => {
        setSelectedEndDate(endDate);

    };
    console.log('종료:', selectedEndDate);


    return (
        <div className="fundingRegistDetails">
            <div className="fundingRegistDetailsContent">
                <div>
                    <Calender onDateChange={handleDateChange} />
                    <FundingTagBtn onTagSelect={handleTagSelect}/>
                    <FundingMessage selectedTag={selectedTag} />
                </div>
                <div>
                    <div className="FundingRegist-registBtn">
                        <FundingRegistBtn/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FundingRegistDetails;
