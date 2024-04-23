import React,{ useState } from 'react';
import './fundingMessage.scss';

export default function FundingMessage ({selectedTag}) {

    const [inputCount, setInputCount] = useState(0);
    const [inputText, setInputText] = useState("");

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
    };

    return (
        <div className="fundingMessageBox">
            <div className="fundingMessageView">
                <div className="fundingMessageTitle">
                    <span className="fundingMessageTitleText1">📜 펀딩 메세지 </span>
                    <span className="fundingMessageTitleText2">(선택)</span>
                </div>
                <input type='text' className="fundingMessage" maxLength={20} onChange={onInputHandler} defaultValue={selectedTag} placeholder="펀딩을 소개해보세요" />
                <p className="textCount">
                    <span>{inputCount}</span>
                    <span>/20 자</span>
                </p>
            </div>
        </div>
    );
};

