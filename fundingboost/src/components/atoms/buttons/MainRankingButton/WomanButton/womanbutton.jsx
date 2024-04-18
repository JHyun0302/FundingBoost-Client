import React from 'react';
import '../AllButton/allbutton.scss';
import womanRankingIcon from '../../../../../assets/ranking/womanranking.png';

const WomanButton = () => {
    return (
        <div className="button-container">
            <button className="circle-button">
                <img src={womanRankingIcon} alt="All Ranking" className="button-icon" />
                <p className="button-label">여자가</p>
            </button>
        </div>
    );
}

export default WomanButton;
