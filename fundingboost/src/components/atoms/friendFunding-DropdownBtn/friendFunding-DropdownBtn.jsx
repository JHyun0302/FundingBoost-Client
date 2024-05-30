import React, { useState } from 'react';
import "./friendFunding-DropdownBtn.scss";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const FriendFundingDropdownBtn = ({ friendFundingData }) => {
    const [sortOption, setSortOption] = useState('최신 등록순');
    const [sortedData, setSortedData] = useState(friendFundingData); // 새로운 state 추가

    const handleSortSelect = (selectedOption) => {
        setSortOption(selectedOption);

        if (selectedOption === '이름순') {

        } else if (selectedOption === '최신 등록순') {

        } else if (selectedOption === '마감 임박순') {

        }
    };

    return (
        <div className="friendFundingDropdownBtn">
            <>
                <DropdownButton
                    id="dropdown-button-dark-example2"
                    variant="secondary"
                    title={sortOption}
                    className="mt-2"
                    data-bs-theme="dark"
                >
                    <Dropdown.Item onClick={() => handleSortSelect('이름순')} active={sortOption === '이름순'}>
                        이름순
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSortSelect('최신 등록순')} active={sortOption === '최신 등록순'}>
                        최신 등록순
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSortSelect('마감 임박순')} active={sortOption === '마감 임박순'}>
                        마감 임박순
                    </Dropdown.Item>
                </DropdownButton>
            </>

            {/* 여기에 정렬된 데이터를 표시하는 컴포넌트를 추가 */}
        </div>
    );
};

export default FriendFundingDropdownBtn;
