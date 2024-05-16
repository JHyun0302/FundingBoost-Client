import React, { useState } from 'react';
import './shopping-item-category.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function ShoppingCategory() {
    const [sortOption, setSortOption] = useState('구매 인기순'); // 초기값 설정
    const [selectedCategory, setSelectedCategory] = useState('뷰티'); // 선택된 카테고리 상태 추가

    const handleSortSelect = (selectedOption) => {
        setSortOption(selectedOption); // 선택한 옵션으로 title 변경
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category); // 선택된 카테고리 업데이트
    };

    return (
        <div>
            <div className="item-category-button-wrapper">
                <button
                    className={`item-category-button-style ${selectedCategory === '뷰티' ? 'selected' : ''}`}
                    onClick={() => handleCategorySelect('뷰티')}
                >
                    뷰티
                </button>
                <button
                    className={`item-category-button-style ${selectedCategory === '패션' ? 'selected' : ''}`}
                    onClick={() => handleCategorySelect('패션')}
                >
                    패션
                </button>
                <button
                    className={`item-category-button-style ${selectedCategory === '식품' ? 'selected' : ''}`}
                    onClick={() => handleCategorySelect('식품')}
                >
                    식품
                </button>
                <button
                    className={`item-category-button-style ${selectedCategory === '디지털' ? 'selected' : ''}`}
                    onClick={() => handleCategorySelect('디지털')}
                >
                    디지털
                </button>
                <button
                    className={`item-category-button-style ${selectedCategory === '리빙/도서' ? 'selected' : ''}`}
                    onClick={() => handleCategorySelect('리빙/도서')}
                >
                    리빙/도서
                </button>
                <button
                    className={`item-category-button-style ${selectedCategory === '스포츠' ? 'selected' : ''}`}
                    onClick={() => handleCategorySelect('스포츠')}
                >
                    스포츠
                </button>
            </div>
            <div className="shopping-dropdown-wrapper">
                <>
                    <DropdownButton
                        id="dropdown-button-dark-example2"
                        variant="secondary"
                        title={sortOption} // title을 state 값으로 설정
                        className="mt-2"
                        data-bs-theme="dark"
                    >
                        <Dropdown.Item onClick={() => handleSortSelect('구매 인기순')} active={sortOption === '구매 인기순'}>
                            구매 인기순
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSortSelect('펀딩 인기순')} active={sortOption === '펀딩 인기순'}>
                            펀딩 인기순
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSortSelect('리뷰 많은순')} active={sortOption === '리뷰 많은순'}>
                            리뷰 많은순
                        </Dropdown.Item>
                    </DropdownButton>
                </>
            </div>
        </div>
    );
};
