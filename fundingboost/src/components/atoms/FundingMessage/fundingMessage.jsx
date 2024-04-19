import React,{ useState } from 'react';
import './fundingMessage.scss';

export default function FundingMessage () {
    const [inputCount, setInputCount] = useState(0);
    //글자 Byte 계산
    const onTextareaHandler = (e) => {
        setInputCount(
            e.target.value.replace(/[0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
        );
    };
    const onInputHandler = (e) => {
        setInputCount(e.target.value.length);
    };
    return (
        <div className="fundingMessageBox">
            <div className="fundingMessageView">
                <div className="fundingMessageTitle">
                    <span className="fundingMessageTitleText1">📜 펀딩 메세지 </span>
                    <span className="fundingMessageTitleText2">(선택)</span>
                </div>
                <input type='text'  className="fundingMessage"  maxLength={19} onChange={onInputHandler}/>
                <p className="textCount">
                    <span>{inputCount}</span>
                    <span>/20 자</span>
                </p>
            </div>
        </div>
    );
};

