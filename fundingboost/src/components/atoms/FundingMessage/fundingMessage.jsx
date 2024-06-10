import React, { useState, useEffect } from 'react';
import './fundingMessage.scss';
import axios from 'axios';

export default function FundingMessage({ selectedTag, onMessageChange }) {
    const [inputCount, setInputCount] = useState(0);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        // 태그 선택 시 기본 메시지 설정
        setInputText(selectedTag);
        setInputCount(selectedTag.length);
    }, [selectedTag]);

    //글자 Byte 계산
    const onTextareaHandler = (e) => {
        setInputCount(
            e.target.value.replace(/[0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
        );
    };

    const onInputHandler = (e) => {
        const text = e.target.value;
        setInputText(text);
        setInputCount(text.length);
        onMessageChange(text);
    };

    return (
        <div className="fundingMessageBox">
            <div className="fundingMessageView">
                <div className="fundingMessageTitle">
                    <span className="fundingMessageTitleText1">📜 펀딩 메세지 </span>
                    <span className="fundingMessageTitleText2">(선택)</span>
                </div>
                <input
                    type="text"
                    className="fundingMessage"
                    maxLength={19}
                    onChange={onInputHandler}
                    value={inputText}
                    placeholder="펀딩을 소개해보세요"
                />
                <p className="textCount">
                    <span>{inputCount}</span>
                    <span>/20 자</span>
                </p>
            </div>
        </div>
    );
}
