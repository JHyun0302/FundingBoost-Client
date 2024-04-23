import React from 'react';
import logo from '../../../assets/logo.svg';
// import  header from '../../organisms/header/header'
// import HeaderBar from "../../organisms/header/header";
import HeaderBar from "../../organisms/header/header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from '../../organisms/footer/footer'
import MainPane from '../../organisms/contents/main/main'
import FundingRegistRight from "../../molecules/FundingRegist/FundingRegistRight/FundingRegistRight";
function MainPage() {
    return (
        <div className="Main-pages">
            <HeaderBar />
            <FundingRegistRight />
            <MainPane />
            <Footer />
        </div>
    );
}

export default MainPage;