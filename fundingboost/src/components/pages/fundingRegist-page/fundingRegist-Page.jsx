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

    return (
        <div className="fundingRegist-Page">
            <HeaderBar />
            <div className="fundingRegistContent">
                <FundingRegistItem />
                <FundingRegistDetails className="fundingRegist-Details"/>
            </div>
            <Footer/>
        </div>
    );
}

export default FundingRegistPage;