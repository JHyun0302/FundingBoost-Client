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
    },
    {
        id: 2,
        title:"티파니 T1 와이드 힌지드 뱅글",
        thumbnail: "https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20201113163447_fa637a9163a8446db21c029e41fe0c4b.jpg",
        price: 11100000,
        isSoldOut: false
    },
    {
        id: 3,
        title:"[카카오 단독] [김희선 PICK] 1등기기 부스터 프로 (파우치&리프팅크림 증정)",
        thumbnail: "https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240408205352_b011db2c5cd642faaadb3f62b806c59d.jpg",
        price: 339000,
        isSoldOut: false
    },
    {
        id: 4,
        title:"선물하기 좋아요 그린 or 크림 스탠리 켄처 텀블러 +에코텀블러음료쿠폰(MMS발송)",
        thumbnail: "https://img1.kakaocdn.net/thumb/C320x320@2x.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20231227152358_f775b058619c4c4fa26d0f535f9b8468.jpg",
        price: 130000,
        isSoldOut: false
    },
    {
        id: 5,
        title:"아디다스 런닝머신 T-19i 가정용 유산소 접이식 아파트 워킹 저소음 패드 실내 트레드밀",
        thumbnail: "https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20230511154115_da57987fafee42aaac243d397e57afc0.jpg",
        price: 2580000,
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
                    <div className="single-item"><MainRankingItem products={product[2]}/></div>
                    <div className="single-item"><MainRankingItem products={product[3]}/></div>
                    <div className="single-item"><MainRankingItem products={product[4]}/></div>
                </div>
            </div>
        </div>

    );
}

export default MainPane;
