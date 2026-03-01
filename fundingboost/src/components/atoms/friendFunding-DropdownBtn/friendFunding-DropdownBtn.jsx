import React from 'react';
import "./friendFunding-DropdownBtn.scss";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const FriendFundingDropdownBtn = ({ sortOption, onSortChange }) => {
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
                    <Dropdown.Item onClick={() => onSortChange('이름순')} active={sortOption === '이름순'}>
                        이름순
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => onSortChange('최신 등록순')} active={sortOption === '최신 등록순'}>
                        최신 등록순
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => onSortChange('마감 임박순')} active={sortOption === '마감 임박순'}>
                        마감 임박순
                    </Dropdown.Item>
                </DropdownButton>
            </>
        </div>
    );
};

export default FriendFundingDropdownBtn;
