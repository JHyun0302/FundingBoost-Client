import React from 'react';
import '../AllButton/allbutton.scss';
import manRankingIcon from '../../../../../assets/ranking/manranking.png';

const ManButton = () => {
    return (
        <div className="button-container">
            <button className="circle-button">
                <img src={manRankingIcon} alt="All Ranking" className="button-icon" />
                <p className="button-label">남자가</p>
            </button>
        </div>
    );
}

export default ManButton;
