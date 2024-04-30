import React from "react";
import "./fundingTagBtn.scss";
import Button from "react-bootstrap/Button";


export default function FundingTagBtn ({onTagSelect}) {
    const [selectedTag, setselectedTag] = React.useState(null);

    const handleTagClick = (tagText) => {
        onTagSelect(tagText);
        setselectedTag(tagText);
    };

    return (
      <div className="fundingOpenBtnBox">
          <div className="fundingOpenBtnView">
              <div className="fundingOpenBtnTitle" >🔗 펀딩 태그</div>
              <div className="fundingOpenTagBtn">
                <Button className={`birthdayTagBtn ${selectedTag === "생일이에요🎉 축하해주세요" ? "selected" : ""}`}
                        onClick={() =>  handleTagClick("생일이에요🎉 축하해주세요") }>
                    # 생일
                </Button>

                <Button className={`graduateTagBtn ${selectedTag === "졸업했어요🧑‍🎓 축하해주세요" ? "selected" : ""}`}
                        onClick={() =>  handleTagClick("졸업했어요🧑‍🎓 축하해주세요")}>
                    # 졸업
                </Button>

                <Button className={`etcTagBtn ${selectedTag === "펀딩 해주세요🎁" ? "selected" : ""}`}
                        onClick={() => handleTagClick("펀딩 해주세요🎁") }>
                    # 기타
                </Button>
              </div>
          </div>
      </div>
    );
};