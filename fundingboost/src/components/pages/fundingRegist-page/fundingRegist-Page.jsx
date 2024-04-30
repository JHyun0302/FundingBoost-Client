import React from 'react';
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

function FundingRegistPage() {
    const location = useLocation();
    const { state: { selectedItems } } = location;

    console.log(selectedItems);

    return (
        <div className="fundingRegist-Page">
            <HeaderBar />
            <div className="fundingRegistContent">
                <FundingRegistItem selectedItems={selectedItems} />
                <FundingRegistDetails className="fundingRegist-Details"/>
            </div>
            <Footer/>
        </div>
    );
}

export default FundingRegistPage;