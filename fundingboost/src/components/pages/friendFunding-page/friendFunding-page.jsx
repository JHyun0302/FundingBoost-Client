import React, {useEffect, useState} from 'react';
import './friendFunding-page.scss';
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import SingleFriendFunding from "../../molecules/Single-friendFunding/single-friendFunding";
import FriendFundingDropdownBtn from "../../atoms/friendFunding-DropdownBtn/friendFunding-DropdownBtn";
import axios from "axios";
import FriendNonFunding from "../../organisms/contents/FriendNonFunding/FriendNonFunding";

import NonMemberModal from "../../atoms/nonMemberModal/nonMemberModal";

const FriendFundingPage = () => {
    const [modalShowState, setModalShowState] = useState(false);
    const [friendFundingData, setFriendFundingData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {

                const accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    setModalShowState(true);
                    return;
                }

                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/funding/friends`, {

                    responseType: 'json',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`,
                        "Access-Control-Allow-Origin": "http://localhost:3000/",
                        "Access-Control-Allow-Credentials": true
                    },
                });
                setFriendFundingData(response.data);
                console.log("response ->", response.data);
            } catch (error) {
                console.error("Error data:", error);
            }
        };
        fetchData();
    },[] );

    return (
        <div>
            <Header />
            {modalShowState && <NonMemberModal message="로그인 후 친구들의 펀딩을 구경해보세요."/>}
            <FriendFundingDropdownBtn className="friendFundingDropdownBtn" friendFundingData={friendFundingData}/>

            <SingleFriendFunding friendFundingData={friendFundingData} />
                <FriendNonFunding />
            <Footer />
        </div>
    );
};

export default FriendFundingPage;
