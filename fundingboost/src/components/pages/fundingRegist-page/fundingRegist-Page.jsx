import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import HeaderBar from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import FundingRegistRight from "../../molecules/FundingRegist/FundingRegistRight/fundingRegistRight";
import FundingRegistLeft from "../../molecules/FundingRegist/FundingRegistLeft/fundingRegistLeft";
import './fundingRegist-Page.scss';

function FundingRegistPage() {
    return (
        <div className="fundingRegist-Page">
            <HeaderBar />
            <div className="fundingRegistContent">

                    <FundingRegistLeft className="fundingRegist-Left" />
                    <FundingRegistRight className="fundingRegist-Rigth"/>

            </div>
            <Footer/>
        </div>
    );
}

export default FundingRegistPage;