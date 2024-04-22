import React, {useEffect, useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import HeaderBar from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import FundingRegistDetails from "../../molecules/FundingRegist/FundingRegistDetails/fundingRegistDetails";
import FundingRegistItem from "../../molecules/FundingRegist/FundingRegistItem/fundingRegistItem";
import './fundingRegist-Page.scss';
import axios from "axios";
import NonItemImg from "../../../assets/nonItemImg.svg";

function FundingRegistPage() {
    // const[data,setData]=useState([]);
    // useEffect(() => {
    //     fetchData();
    // }, []);
    //
    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get("https://a77443a3-ce83-4082-b661-bf8e8150b7da.mock.pstmn.io/funding");
    //         setData(response.data.data);
    //     } catch (error) {
    //         console.error('Error data:', error);
    //     }
    // }

    return (
        <div className="fundingRegist-Page">
            <HeaderBar />
            <div className="fundingRegistContent">
                <FundingRegistItem className="fundingRegist-Item" />
                <FundingRegistDetails className="fundingRegist-Details"/>
            </div>
            <Footer/>
        </div>
    );
}

export default FundingRegistPage;