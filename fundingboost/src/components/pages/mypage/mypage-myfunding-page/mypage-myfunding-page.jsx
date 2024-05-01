import React from 'react';
import logo from '../../../../assets/logo.svg';
import HeaderBar from "../../../organisms/header/header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from '../../../organisms/footer/footer'
import MypagePane from '../../../organisms/contents/mypage-myfunding/mypage-myfunding'

function MypageMyfundingPage() {
    return (
        <div className="Mypage-pages">
            <HeaderBar />
            <MypagePane />
            <Footer />
        </div>
    );
}

export default MypageMyfundingPage;