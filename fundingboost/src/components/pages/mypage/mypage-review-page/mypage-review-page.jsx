import React from 'react';
import logo from '../../../../assets/logo.svg';
import './mypage-review-page.scss';
import HeaderBar from "../../../organisms/header/header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from '../../../organisms/footer/footer'
import MypageReview from '../../../organisms/contents/mypage-review/mypage-review';

function MypageReviewPage() {
    return (
        <div className="Mypage-review-page">
            <HeaderBar/>
            <MypageReview/>
            <Footer/>
        </div>
    );
}

export default MypageReviewPage;