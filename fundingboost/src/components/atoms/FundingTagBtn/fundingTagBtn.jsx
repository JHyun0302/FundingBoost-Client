import React from "react";
import "./fundingTagBtn.scss";
import Button from "react-bootstrap/Button";


export default function FundingTagBtn () {
  return (
      <div className="fundingOpenBtnBox">
          <div className="fundingOpenBtnView">
              <div className="fundingOpenBtnTitle">🔗 펀딩 태그</div>
              <div className="fundingOpenTagBtn">
                <Button className="birthdayTagBtn" ># 생일</Button>
                <Button className="graduateTagBtn"># 졸업</Button>
                <Button className="etcTagBtn"># 기타</Button>
              </div>
          </div>
      </div>
  );
};