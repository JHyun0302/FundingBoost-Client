import React from 'react';
import '../main/main.scss';
import RankingPersonPane from "../../../molecules/RankingPersonPane/rankingpersonpane";
import RankingItemPane from "../../../molecules/RankingItemPane/rankingitempane";
import MainRankingItem from "../../../molecules/MainRankingList/mainrankingitem";

const product = [
    {
    id: 1,
    title: "NEW 루쥬 알뤼르 벨벳 뉘 블랑쉬 리미티드 에디션",
    price: 61000,
    thumbnail: "https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240315092736_2ffa91bc2e0d4430bb0fa69db5d2a431.jpg",
    isSoldOut: false
},{
    id: 2,
    title:"한우",
    thumbnail: "https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20231227090524_1b979e0b92184f37a79b5909c4fb2298.png",
    price: 320000,
    isSoldOut: false
}
];

const MainPane = () => {
    return (
        <div className="main-pane-container">
            <div className="ranking-button-area">
                <h1 className="rankging-text"> 🏆급상승 선물랭킹🏆 </h1>
                <RankingPersonPane />
                <RankingItemPane />
            </div>
            <div className="ranking-item-area">
                <div className="item-list-single">
                    <div className="single-item"><MainRankingItem products={product[0]}/></div>
                    <div className="single-item"><MainRankingItem products={product[1]}/></div>
                    <div className="single-item"><MainRankingItem products={product[0]}/></div>
                    <div className="single-item"><MainRankingItem products={product[1]}/></div>
                    <div className="single-item"><MainRankingItem products={product[0]}/></div>


                </div>
            </div>
        </div>

    );
}

export default MainPane;
