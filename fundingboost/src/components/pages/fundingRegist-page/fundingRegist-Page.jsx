// FundingRegistPage.js

import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import HeaderBar from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import FundingRegistDetails from "../../molecules/FundingRegist/FundingRegistDetails/fundingRegistDetails";
import FundingRegistItem from "../../molecules/FundingRegist/FundingRegistItem/fundingRegistItem";
import './fundingRegist-Page.scss';
import axios from "axios";
import NonItemImg from "../../../assets/nonItemImg.svg";
import FundingRegistBtn from "../../atoms/button/FundingRegistBtn/fundingRegistBtn";

function FundingRegistPage(props) {
    const [deadline, setDeadline] = useState(new Date());
    const [tag, setTag] = useState("");
    const [fundingMessage, setFundingMessage] = useState("");

    //태그
    const Tag = (tagText) => {
        setTag(tagText);
    };

    //메시지
    const FundingMessage = (messageText) => {
        setFundingMessage(messageText);
    };
    //날짜
    const Deadline = (date) => {
        setDeadline(date);
    };
    useEffect(() => {
        console.log("deadline:", deadline);
        console.log("Tag:", tag);
        console.log("fundingMessage:", fundingMessage);
    }, [deadline, tag, fundingMessage]);


    // 종료일 ,메시지, 태그 정보 전송
    const handleSubmit = async () => {
        try {

            let fundingTag = tag;
            if (tag === "펀딩 해주세요🎁") {
                fundingTag = "기타";
            } else if (tag === "생일이에요🎉 축하해주세요") {
                fundingTag = "생일";
            } else if (tag === "졸업했어요🧑‍🎓 축하해주세요") {
                fundingTag = "졸업";
            }

            const response = await axios.post('https://6e7c48eb-1b4f-4777-b960-9cc07bec54f4.mock.pstmn.io/FundingRegist', {
                fundingMessage: fundingMessage,
                deadline: deadline,
                tag: fundingTag
            });
            console.log('POST 결과:', response.data);
        } catch (error) {
            console.error('POST 에러:', error);
        }
    };

    return (
        <div className="fundingRegist-Page">
            <HeaderBar />
            <div className="fundingRegistContent">
                <FundingRegistItem/>
                <div className="fundingRegist-Details">
                    <FundingRegistDetails onTagSelect={Tag} onMessageChange={FundingMessage} onDateChange={Deadline} />
                    <div className="FundingRegist-registBtn">
                        <FundingRegistBtn onClick={handleSubmit}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default FundingRegistPage;
