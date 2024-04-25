import React, {useState} from 'react';
import FundingRegistBtn from "../../../atoms/button/FundingRegistBtn/fundingRegistBtn";
import FundingMessage from "../../../atoms/FundingMessage/fundingMessage";
import FundingTagBtn from "../../../atoms/button/FundingTagBtn/fundingTagBtn";
import Calender from "../../../atoms/Calendar/calender";
import './fundingRegistDetails.scss';

function FundingRegistDetails(props) {
    const [selectedTag, setSelectedTag] = useState("");

    const handleTagSelect = (tagText) => {
        setSelectedTag(tagText);
    };

    return (
        <div className="fundingRegistDetails">
            <div className="fundingRegistDetailsContent">
                <div>
                    <Calender/>
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