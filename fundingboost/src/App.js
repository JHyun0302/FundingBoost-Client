import React from 'react';

import './App.css';

import HeaderBar from "./components/organisms/header/header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from './components/organisms/footer/footer'
import CheckFundingBtn from "./components/atoms/button/checkFunding-btn";
import LogingoBtn from "./components/atoms/button/logingo-btn";
import StartFundingBtn from "./components/atoms/button/startFunding-btn";
import GaugeBar from "./components/atoms/gauge-bar";
import ProfileImg from "./components/atoms/ProfileImg";
import NonMember from "./components/organisms/mainMyfunding/nonMember";
import MemberNoFunding  from "./components/organisms/mainMyfunding/memberNoFunding";
function App() {


    return (
        <div className="App">
            <HeaderBar />
            <NonMember />
            <MemberNoFunding />
            <Footer />

            <GaugeBar />
            <CheckFundingBtn />



        </div>
    );
}

export default App;
