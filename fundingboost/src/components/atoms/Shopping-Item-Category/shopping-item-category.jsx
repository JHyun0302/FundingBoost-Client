import React, { useState } from 'react';
import './shopping-item-category.scss';

export default function ShoppingCategory({ onCategorySelect }) {
    const [selectedCategory, setSelectedCategory] = useState('전체');


    const categories = [
        { name: '전체', param: '' },
        { name: '뷰티', param: '뷰티' },
        { name: '패션', param: '패션' },
        { name: '식품', param: '식품' },
        { name: '디지털', param: '디지털' },
        { name: '리빙/도서', param: '리빙/도서' },
        { name: '스포츠', param: '스포츠' },
        { name: '교환권', param: '교환권' }
    ];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category.name); // 선택된 카테고리를 상태로 설정
        onCategorySelect(category); // 카테고리 객체를 부모 컴포넌트로 전달
    };

    return (
        <div className="item-category-button-wrapper">
            {categories.map((category) => (
                <button
                    key={category.param}
                    className={`item-category-button-style ${selectedCategory === category.name ? 'selected' : ''}`}
                    onClick={() => handleCategorySelect(category)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}
