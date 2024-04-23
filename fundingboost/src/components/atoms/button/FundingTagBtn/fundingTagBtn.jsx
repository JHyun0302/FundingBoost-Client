import React from "react";
import "./fundingTagBtn.scss";
import Button from "react-bootstrap/Button";


export default function FundingTagBtn ({onTagSelect}) {

    const handleTagClick = (tagText) => {
        onTagSelect(tagText);
    };

    return (
      <div className="fundingOpenBtnBox">
          <div className="fundingOpenBtnView">
              <div className="fundingOpenBtnTitle" >🔗 펀딩 태그</div>
              <div className="fundingOpenTagBtn">
                <Button className="birthdayTagBtn" onClick={() =>  handleTagClick("생일이에요🎉 축하해주세요") }># 생일</Button>
                <Button className="graduateTagBtn" onClick={() =>  handleTagClick("졸업했어요🧑‍🎓 축하해주세요")}># 졸업</Button>
                <Button className="etcTagBtn" onClick={() => handleTagClick("펀딩 해주세요🎁") }># 기타</Button>
              </div>
          </div>
      </div>
    );
};