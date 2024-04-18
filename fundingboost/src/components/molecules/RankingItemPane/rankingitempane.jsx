import React from 'react';
import './rankingitempane.scss';
import MostFundingButton from "../../atoms/buttons/MainRankingButton/RankingMostButton/mostfundingbutton";

const RankingItemPane = () => {
    return (
        <div className="ranking-item-pane-container">
            <div class="balloon">
                <div className="most-item-category-container">
                <MostFundingButton text="많이 펀딩한" />
                <MostFundingButton text="많이 구매한" />
                <MostFundingButton text="많이 위시에 담은" />
                </div>
            </div>
        </div>
    );
}

export default RankingItemPane;
