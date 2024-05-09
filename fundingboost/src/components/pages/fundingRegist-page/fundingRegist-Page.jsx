// FundingRegistPage.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
    const location = useLocation();
    const { state: { selectedItems } } = location;
    const [orderedItems, setOrderedItems] = useState([]);
    console.log(selectedItems);

    //변경된 상품 id 순서
    const handleItemOrderChange = (updatedItems) => {
        const itemIds = updatedItems.map(item => item.itemId);
        setOrderedItems(itemIds);
    };

    //태그
    const Tag = (tagText) => {
        setTag(tagText);
    };

    //메시지
    const FundingMessage = (messageText) => {
        setFundingMessage(messageText);
    };

    //deadline yyyy-mm-dd 형태로 전송
    const FundingDeadLine = (date) => {
        if (date && date.toISOString) {
            return date.toISOString().split('T')[0];
        } else {
            return "";
        }
    };

    //날짜
    const Deadline = (date) => {
        const fundingDeadline = FundingDeadLine(date);
        setDeadline(fundingDeadline);
    };

    // 종료일 ,메시지, 태그 정보 전송
    const handleSubmit = async () => {
        try {
            const url = 'https://58aa-112-218-95-58.ngrok-free.app/api/v1/funding';
            let fundingTag = tag;
            if (tag === "펀딩 해주세요🎁") {
                fundingTag = "기타";
            } else if (tag === "생일이에요🎉 축하해주세요") {
                fundingTag = "생일";
            } else if (tag === "졸업했어요🧑‍🎓 축하해주세요") {
                fundingTag = "졸업";
            }
            const data = JSON.stringify({
                itemIdList:orderedItems,
                fundingMessage: fundingMessage,
                deadline: deadline,
                tag: fundingTag
            })

            const response = await axios.post('https://07ae-112-218-95-58.ngrok-free.app/api/v1/funding?memberId=1', data,
                {
                    responseType: 'json',
                    headers: ({
                        "Content-Type" : "application/json",
                        "Access-Control-Allow-Credentials" : true,
                        "ngrok-skip-browser-warning": true
                    })

                });
            console.log('itemIdList: ' + orderedItems);
            console.log('fundingMessage: ' + fundingMessage);
            console.log('deadline: ' + deadline);
            console.log('tag: ' + fundingTag);
            console.log('POST 결과:', response.data);
        } catch (error) {
            console.error('POST 에러:', error);
        }
    };


    return (
        <div className="fundingRegist-Page">
            <HeaderBar />
            <div className="fundingRegistContent">

                <FundingRegistItem selectedItems={selectedItems} onItemOrderChange={handleItemOrderChange}  />
                <div className="fundingRegist-Details">
                    <div className="fundingRegistOption">
                        <FundingRegistDetails className="fundingRegist-Details" onTagSelect={Tag} onMessageChange={FundingMessage} onDateChange={Deadline} />
                        <div className="FundingRegist-registBtn">
                            <FundingRegistBtn onClick={handleSubmit}/>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}

export default FundingRegistPage;