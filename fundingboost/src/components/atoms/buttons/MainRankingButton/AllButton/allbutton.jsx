import React from 'react';
import '../AllButton/allbutton.scss';
import allRankingIcon from '../../../../../assets/ranking/allranking.png';

const AllButton = () => {
    return (
        <div className="button-container">
            <button className="circle-button">
                <img src={allRankingIcon} alt="All Ranking" className="button-icon" />
                <p className="button-label">모두가</p>
            </button>
        </div>
    );
}

export default AllButton;
