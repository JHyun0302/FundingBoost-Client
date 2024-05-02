import React from 'react';
import logo from '../../../assets/logo.svg';
// import  header from '../../organisms/header/header'
// import HeaderBar from "../../organisms/header/header";
import HeaderBar from "../../organisms/header/header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from '../../organisms/footer/footer'
import MainPane from '../../organisms/contents/main/main'
import MainMyfunding from "../../molecules/mainMyfunding/mainMyfunding/mainMyfunding";
import MemberYesFunding from "../../molecules/mainMyfunding/memberYesFunding/memberYesFunding";

function MainPage() {
    return (
        <div className="Main-pages">
            <HeaderBar />
            {/*<MemberYesFunding/>*/}
            <MainMyfunding/>
            <MainPane />
            <Footer />
        </div>
    );
}

export default MainPage;
