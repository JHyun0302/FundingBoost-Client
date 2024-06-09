import React, { useState, useEffect } from 'react';
import FundingMessage from "../../../atoms/FundingMessage/fundingMessage";
import FundingTagBtn from "../../../atoms/button/FundingTagBtn/fundingTagBtn";
import Calender from "../../../atoms/Calendar/calender";
import './fundingRegistDetails.scss';

function FundingRegistDetails({ onTagSelect, onMessageChange, onDateChange, onValidityChange }) {
    const [selectedTag, setSelectedTag] = useState("");
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    const [selectedMessage, setSelectedMessage] = useState("");

    useEffect(() => {
        const defaultEndDate = new Date();
        defaultEndDate.setDate(defaultEndDate.getDate() + 13);
        setSelectedEndDate(defaultEndDate);
        onDateChange(defaultEndDate);
    }, [onDateChange]);

    const handleTagSelect = (tagText) => {
        setSelectedTag(tagText);
        onTagSelect(tagText);
    };

    const handleMessageChange = (messageText) => {
        setSelectedMessage(messageText);
        onMessageChange(messageText);
        console.log(messageText)
    };

    const handleEndDate = ({endDate}) => {
        setSelectedEndDate(endDate);
        onDateChange(endDate);
        console.log(endDate)
    };


    return (
        <div className="fundingRegistDetails">
            <div className="fundingRegistDetailsContent">
                <div>
                    <Calender onDateChange={handleEndDate} />
                    <FundingTagBtn onTagSelect={handleTagSelect}/>
                    <FundingMessage selectedTag={selectedTag} onMessageChange={handleMessageChange}/>
                </div>
            </div>
        </div>
    );
}

export default FundingRegistDetails;
