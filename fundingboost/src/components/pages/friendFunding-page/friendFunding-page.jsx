import React, {useEffect, useState} from 'react';
import './friendFunding-page.scss';
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import SingleFriendFunding from "../../molecules/Single-friendFunding/single-friendFunding";
import FriendFundingDropdownBtn from "../../atoms/friendFunding-DropdownBtn/friendFunding-DropdownBtn";
import axios from "axios";

const FriendFundingPage = () => {
    const [friendFundingData, setFriendFundingData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://fd14-112-218-95-58.ngrok-free.app/api/v1/funding/friends?memberId=1`, {
                    responseType: 'json',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials": true,
                        "ngrok-skip-browser-warning": true,
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
            <FriendFundingDropdownBtn className="friendFundingDropdownBtn" friendFundingData={friendFundingData}/>
            <SingleFriendFunding friendFundingData={friendFundingData} />
            <Footer />
        </div>
    );
};

export default FriendFundingPage;