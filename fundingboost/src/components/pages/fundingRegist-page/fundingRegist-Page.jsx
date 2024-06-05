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
    const [deadline, setDeadline] = useState(new Date());
    const [tag, setTag] = useState("");
    const [fundingMessage, setFundingMessage] = useState("");
    const location = useLocation();
    const { fundingNowData, selectedItems } = location.state || {};

    const [orderedItems, setOrderedItems] = useState(() => {
        //gifthub에서 아이템 선택한 경우
        if (selectedItems) {
            return selectedItems.reduce((acc, fundingItem) => {
                //펀딩 수량 만큼 반복해줌
                for (let i = 0; i < fundingItem.quantity; i++) {
                    acc.push({
                        ...fundingItem,
                        id: `${fundingItem.itemId}-${i}` // 고유 id 지정
                    });
                }
                return acc;
            }, []);

        // 쇼핑상세에서 펀딩 바로 가기를 통해 아이템 선택한 경우
        } else if (fundingNowData) {
            const items = [];

            for (let i = 0; i < fundingNowData.quantity; i++) {
                items.push({
                    ...fundingNowData,
                    id: `${fundingNowData.itemId}-${i}` //고유id 지정
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

    // 모달창 닫기버튼
    const closeModal = () => {
        setShowModal(false);
        navigate('/');
    };
    // 모달창 마이페이지 이동버튼
    const myPageBtnModal = () => {
        setShowModal(false);
        navigate('/mypage');
    };

    //변경된 상품 id 순서
    const handleItemOrderChange = (updatedItems) => {
        setOrderedItems(updatedItems);
    };

    //태그
    const Tag = (tagText) => {
        setTag(tagText);
        setTagIsSelected(!!tagText);
        if (tagText === "생일이에요🎉 축하해주세요") {
            setFundingMessage("생일이에요🎉 축하해주세요");
        } else if (tagText === "졸업했어요🧑‍🎓 축하해주세요") {
            setFundingMessage("졸업했어요🧑‍🎓 축하해주세요");
        } else if (tagText === "펀딩 해주세요🎁") {
            setFundingMessage("펀딩 해주세요🎁");
        }
    };

    //메시지
    const FundingMessage = (messageText) => {
        if (!tagIsSelected) {
            setFundingMessage(messageText);
        }
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
                deadline: deadline,

            })


            const accessToken = localStorage.getItem('accessToken');

            const response = await axios.post(`${process.env.REACT_APP_FUNDINGBOOST}/funding`, data,

                {
                    responseType: 'json',
                    headers: ({
                        "Content-Type" : "application/json",
                        "Access-Control-Allow-Credentials" : true,
                        "Authorization": `Bearer ${accessToken}`,
                        "Access-Control-Allow-Origin": "https://k14f4ad097352a.user-app.krampoline.com/"
                    })

                });
            console.log("post :", response);
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

                <FundingRegistItem selectedItems={orderedItems} onItemOrderChange={handleItemOrderChange}  />
                <div className="fundingRegist-Details">
                    <div className="fundingRegistOption">
                        <FundingRegistDetails className="fundingRegist-Details" onTagSelect={Tag} onMessageChange={FundingMessage} onDateChange={Deadline} />
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