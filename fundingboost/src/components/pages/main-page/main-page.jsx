import React, {useEffect, useState} from 'react';
import logo from '../../../assets/logo.svg';
// import  header from '../../organisms/header/header'
// import HeaderBar from "../../organisms/header/header";
import HeaderBar from "../../organisms/header/header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from '../../organisms/footer/footer'
import MainPane from '../../organisms/contents/main/main'
import MainFunding from "../../molecules/mainFunding/mainFunding";
import MainFriendFunding from "../../molecules/mainFriendFunding/mainFriendFunding/mainFriendFunding";
import MainFriendNoFunding from "../../molecules/mainFriendFunding/mainFriendNoFunding/mainFriendNoFunding";
import axios from "axios";

function MainPage() {
    const [mainData, setmainData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                let accessToken = "";
                if(localStorage.getItem('accessToken') != null){
                    accessToken = localStorage.getItem('accessToken');
                }

                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/home`,{
                    responseType: 'json',
                    headers: ({
                        "Content-Type" : "application/json",
                        "Access-Control-Allow-Credentials" : true,
                        "Access-Control-Allow-Origin": "http://localhost:3000/",
                        "Authorization": `Bearer ${accessToken}`
                    }),
                });
                setmainData(response.data);
                console.log("main response ->", response.data);

                console.log("nickName: " + response.data.data.homeMemberInfoDto.nickName);
                localStorage.setItem('nickName', response.data.data.homeMemberInfoDto.nickName);


            } catch (error) {
                console.error("Error data:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="Main-pages">
            <HeaderBar />
            <MainFunding mainData={mainData} />
            <MainPane mainData={mainData}/>
            <Footer />
        </div>
    );
}

export default MainPage;
