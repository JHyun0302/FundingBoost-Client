import React from 'react';
import './fundingRegistModal.scss';

const FundingRegistPageModal = ({ show, onClose, message, onMyPage }) => {
    if (!show) {
        return null;
    }
    return (
        <div className="modal-boby">
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>{message}</h3>
                    </div>

                    <div className="modal-message1">펀딩은 한개만 진행이 가능합니다. 새로운 펀딩을 진행하시려면 진행중인 펀딩을 종료해주세요.</div>
                    <div className="modal-message2">마이페이지로 이동하시겠습니까?</div>
                    <div className="modal-button">
                        <button className="modal-myPageBtn" onClick={onMyPage}>마이페이지 이동</button>
                        <button className="modal-closeBtn" onClick={onClose}>닫기</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default FundingRegistPageModal;