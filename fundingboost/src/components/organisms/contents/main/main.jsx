import React, { useEffect, useState } from 'react';
import '../main/main.scss';
import RankingPersonPane from "../../../molecules/RankingPersonPane/rankingpersonpane";
import RankingItemPane from "../../../molecules/RankingItemPane/rankingitempane";
import MainRankingItem from "../../../molecules/MainRankingList/mainrankingitem";
import axios from "axios";

const MainPane = () => {
    const [memberFundingData, setFundingMemberData] = useState({});
    const [itemDtoList, setItemDtoList] = useState([]); // itemDtoList 상태 추가

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/home?memberId=1`, {
                    responseType: 'json',
                    headers: ({
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials": true,
                        "ngrok-skip-browser-warning": true,
                    }),
                });
                setFundingMemberData(response.data);
                console.log("response ->", response.data);
                setItemDtoList(response.data.data.itemDtoList);
            } catch (error) {
                console.error("Error data:", error);
            }
        };
        fetchData();
    }, []);

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
                    {itemDtoList && itemDtoList.map((product, index) => (
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
