import React, { useState } from 'react';
import './shopping-item-category.scss';

export default function ShoppingCategory({ onCategorySelect }) {
    const [selectedCategory, setSelectedCategory] = useState('전체');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category); // 선택된 카테고리를 상태로 설정
        onCategorySelect(category);
    };

    return (
        <div className="item-category-button-wrapper">
            <button
                className={`item-category-button-style ${selectedCategory === '전체' ? 'selected' : ''}`}
                onClick={() => handleCategorySelect('전체')}
            >
                전체
            </button>
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
    );
}
