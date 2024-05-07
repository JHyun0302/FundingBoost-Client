import React from 'react';
import { Link } from 'react-router-dom';
import './mypage-myfunding-nonfunding.scss';
import emptyImage from "../../../assets/empty.png";
import nonItemImg from '../../../assets/nonItemImg.svg';

const MyfundingNonFundingPane = () => {

    return (
        <div className="mypage-total-container">
            <div className="mypage-right-pane-containter">
                <div className="mypage-myfunding-content-wrapper">
                    <div className="mypage-myfunding-title-wrapper">
                        <div className="mypage-myfunding-title">MY 펀딩</div>
                        <Link to="/gifthub" className="mypage-create-funding">💫펀딩 생성하기💫</Link>
                    </div>
                    <div className="horizontalLine"></div>
                    <div className="empty-image-container">
                        <img src={emptyImage} alt="Empty" className="empty-image"/>
                        <img src={nonItemImg} alt="NonItem" className="nonItem-image"/>
                        <div className="mypage-nonfunding-noti-text">현재 진행 중인 펀딩이 없어요 😭</div>
                    </div>
                    <div className="mypage-horizontalUnderLine"></div>
                </div>
            </div>
        </div>
    );
}

export default MyfundingNonFundingPane;
