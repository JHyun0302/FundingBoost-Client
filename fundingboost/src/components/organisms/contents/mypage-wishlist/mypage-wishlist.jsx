import React, {useEffect, useState} from 'react';
import './mypage-wishlist.scss';
import MypageIndex from '../../../molecules/MypageIndex/mypageindex';
import MypageProfile from '../../../molecules/MypageProfile/mypageprofile';
import MyPageIndex from "../../../molecules/MypageIndex/mypageindex";
import axios from "axios";
import WishList from "../../../molecules/wishList/wishList";
import NonMemberModal from "../../../atoms/nonMemberModal/nonMemberModal";

const WishListPane = () => {
    const [apiData, setApiData] = useState(null);
    const [modalShowState, setModalShowState] = useState(false);
    const [isRemoving, setIsRemoving] = useState(false);

    const handleButtonClick = (index) => {
        console.log(`Selected index: ${index}`);
    };

    useEffect(() => {
        // API 호출 함수
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    setModalShowState(true);
                    return;
                }

                const response = await axios({
                    method: 'GET',
                    url: `${process.env.REACT_APP_FUNDINGBOOST}/bookmark`,
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                    },
                    responseType: 'json'
                });
                console.log(response.data); // 콘솔에 데이터 출력
                setApiData(response.data.data); // 상태에 데이터 저장

            } catch (error) {
                console.error("API 호출 중 오류가 발생했습니다.", error);
            }
        };

        fetchData();
    }, []);

    const handleRemoveBookmark = async (itemId) => {
        if (isRemoving) {
            return;
        }

        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
                setModalShowState(true);
                return;
            }

            setIsRemoving(true);
            await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_FUNDINGBOOST}/bookmark/like/${itemId}`,
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                },
                responseType: 'json'
            });

            setApiData((prev) => {
                if (!prev) {
                    return prev;
                }

                return {
                    ...prev,
                    bookmarkItemDtos: (prev.bookmarkItemDtos || []).filter((bookmarkItem) => bookmarkItem.itemId !== itemId)
                };
            });
        } catch (error) {
            console.error("위시리스트 삭제 중 오류가 발생했습니다.", error);
        } finally {
            setIsRemoving(false);
        }
    };

    return (
        <div className="mypage-myhistory-total-container">
            {modalShowState && <NonMemberModal message="로그인 후 펀딩부스트를 시작해보세요." />}
            <div className="mypage-myhistory-left-pane-container">
                {apiData && <MypageProfile profileInfo={apiData} />}
                <MyPageIndex onButtonClick={handleButtonClick} currentPageIndex={5} />
            </div>
            <div className="mypage-myhistory-right-pane-containter">
               <WishList wishListData={apiData} onRemoveBookmark={handleRemoveBookmark} isRemoving={isRemoving} />
            </div>
        </div>
    );
}

export default WishListPane;
