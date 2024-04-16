import React from 'react';
import './rankingpersonpane.scss';
import AllButton from "../../atoms/buttons/MainRankingButton/AllButton/allbutton";
import ManButton from "../../atoms/buttons/MainRankingButton/ManButton/manbutton";
import WomanButton from "../../atoms/buttons/MainRankingButton/WomanButton/womanbutton";

const MainPane = () => {
    return (
        <div className="ranking-pane-container">
            <AllButton />
            <ManButton />
            <WomanButton />
        </div>
    );
}

export default MainPane;
