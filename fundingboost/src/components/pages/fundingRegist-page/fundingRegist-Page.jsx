import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import HeaderBar from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import FundingRegistDetails from "../../molecules/FundingRegist/FundingRegistDetails/fundingRegistDetails";
import FundingRegistItem from "../../molecules/FundingRegist/FundingRegistItem/fundingRegistItem";
import './fundingRegist-Page.scss';
import axios from "axios";
import FundingRegistBtn from "../../atoms/button/FundingRegistBtn/fundingRegistBtn";
import FundingRegistModal from "../../atoms/fundingRegistModal/fundingRegistModal";
import NonMemberModal from "../../atoms/nonMemberModal/nonMemberModal";

function FundingRegistPage(props) {
    const [tag, setTag] = useState("");
    const [fundingMessage, setFundingMessage] = useState("");
    const [deadline, setDeadline] = useState(new Date());

    const location = useLocation();
    const { fundingNowData, selectedItems } = location.state || {};

    const [orderedItems, setOrderedItems] = useState(() => {
        if (selectedItems) {
            return selectedItems.reduce((acc, fundingItem) => {
                for (let i = 0; i < fundingItem.quantity; i++) {
                    acc.push({
                        ...fundingItem,
                        id: `${fundingItem.itemId}-${i}`
                    });
                }
                return acc;
            }, []);
        } else if (fundingNowData) {
            const items = [];
            for (let i = 0; i < fundingNowData.quantity; i++) {
                items.push({
                    ...fundingNowData,
                    id: `${fundingNowData.itemId}-${i}`
                });
            }
            return items;
        } else {
            return [];
        }
    });

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [tagIsSelected, setTagIsSelected] = useState(false);
    const [modalShowState, setModalShowState] = useState(false);

    useEffect(() => {
        const checkFundingStatus = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    setModalShowState(true);
                    return;
                }

                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/funding`, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });

                if (response.data.data.isRegisterFunding) {
                    setShowModal(true);
                }
            } catch (error) {
                console.error('Error fetching funding status:', error);
            }
        };

        checkFundingStatus();
    }, []);

    const closeModal = () => {
        setShowModal(false);
        navigate('/');
    };

    const myPageBtnModal = () => {
        setShowModal(false);
        navigate('/mypage');
    };

    const handleItemOrderChange = (updatedItems) => {
        setOrderedItems(updatedItems);
    };

    const handleTagSelect = (tagText) => {
        setTag(tagText);
        setTagIsSelected(!!tagText);
    };

    const handleMessageChange = (messageText) => {
        setFundingMessage(messageText);
    };

    const handleDateChange = (endDate) => {
        setDeadline(endDate);
    };

    const handleSubmit = async () => {
        try {
            const itemIdList = orderedItems.map(item => item.itemId);
            let fundingTag = tag;
            if (tag === "펀딩 해주세요🎁") {
                fundingTag = "기타";
            } else if (tag === "생일이에요🎉 축하해주세요") {
                fundingTag = "생일";
            } else if (tag === "졸업했어요🧑‍🎓 축하해주세요") {
                fundingTag = "졸업";
            }

            const data = JSON.stringify({
                itemIdList: itemIdList,
                fundingMessage: fundingMessage,
                tag: fundingTag,
                deadline: deadline
            });

            const accessToken = localStorage.getItem('accessToken');

            const response = await axios.post(`${process.env.REACT_APP_FUNDINGBOOST}/funding`, data, {
                responseType: 'json',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                    "Authorization": `Bearer ${accessToken}`,
                    "Access-Control-Allow-Origin": "http://localhost:3000/"
                }
            });

            console.log("post :", response);
            console.log(data);
        } catch (error) {
            console.error('POST 에러:', error);
        }
    };

    return (
        <div className="fundingRegist-Page">
            <HeaderBar />
            {modalShowState && <NonMemberModal message="로그인 후 친구들의 펀딩을 구경해보세요." />}
            <FundingRegistModal show={showModal} onClose={closeModal} onMyPage={myPageBtnModal} message="진행중인 펀딩이 존재합니다." />
            <div className="fundingRegistContent">
                <FundingRegistItem selectedItems={orderedItems} onItemOrderChange={handleItemOrderChange} />
                <div className="fundingRegist-Details">
                    <div className="fundingRegistOption">
                        <FundingRegistDetails
                            className="fundingRegist-Details"
                            onTagSelect={handleTagSelect}
                            onMessageChange={handleMessageChange}
                            onDateChange={handleDateChange}
                            messageText={fundingMessage}
                            endDate={deadline}
                        />
                        <div className="FundingRegist-registBtn">
                            <FundingRegistBtn onClick={handleSubmit} tagIsSelected={tagIsSelected} orderedItems={orderedItems} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FundingRegistPage;
