import React from 'react';
import logo from '../../../assets/logo.svg';
// import  header from '../../organisms/header/header'
// import HeaderBar from "../../organisms/header/header";
import HeaderBar from "../../organisms/header/header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from '../../organisms/footer/footer'
import MypagePane from '../../organisms/contents/mypage/mypage'

function MypagePage() {
    return (
        <div className="Mypage-pages">
            <HeaderBar />
            <MypagePane />
            <Footer />
        </div>
    );
}

export default MypagePage;