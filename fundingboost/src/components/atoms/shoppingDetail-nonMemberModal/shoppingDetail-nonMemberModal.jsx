import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './shoppingDetail-nonMemberModal.scss';

const NonMemberModal = ({message,onClose }) => {
    // const navigate = useNavigate();

    return (
        // <div className={`shoppingNonMember-modal-boby ${showModal ? 'showModal' : ''}`}>
        <div className={"shoppingNonMember-modal-body"}>
            <div className="shoppingNonMember-modal">
                <div className="shoppingNonMember-modal-content">
                    <div className="shoppingNonMember-">
                        <h3>로그인이 필요한 서비스입니다.</h3>
                    </div>
                    <div className="shoppingNonMember-modal-message1">{message}</div>
                    <div className="shoppingNonMember-modal-message2">로그인하시겠습니까?</div>
                    <div className="shoppingNonMember-modal-button">
                        <button className="shoppingNonMember-modal-myPageBtn">로그인</button>
                        <button className="shoppingNonMember-modal-closeBtn">닫기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NonMemberModal;
