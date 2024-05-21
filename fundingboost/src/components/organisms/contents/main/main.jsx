import React, { useEffect, useState } from 'react';
import './main.scss';
import RankingPersonPane from "../../../molecules/RankingPersonPane/rankingpersonpane";
import RankingItemPane from "../../../molecules/RankingItemPane/rankingitempane";
import MainRankingItem from "../../../molecules/MainRankingList/mainrankingitem";
import axios from "axios";


const MainPane = ({mainData}) => {
    console.log("item 데이터:", mainData.data?.itemDtoList);
    return (
        <div className="main-pane-container">
            <div className="ranking-button-area">
                <h1 className="rankging-text"> 🏆급상승 선물랭킹🏆 </h1>
                <RankingPersonPane />
                <RankingItemPane />
            </div>
            <div className="ranking-item-area">
                <div className="item-list-single">
                    {/* itemDtoList가 존재하는 경우에만 매핑하여 MainRankingItem 컴포넌트를 렌더링 */}
                    {mainData.data?.itemDtoList && mainData.data?.itemDtoList.map((product, index) => (
                        <div className="single-item" key={index}>
                            <MainRankingItem product={product} key={index}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainPane;
