import './mypage-myfunding.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MypageProfile from '../../../molecules/MypageProfile/mypageprofile';
import MyPageIndex from "../../../molecules/MypageIndex/mypageindex";
import MyfundingNonFundingPane from "../../../molecules/Mypage-Myfunding/mypage-myfunding-nonfunding";
import MyfundingDoFundingPane from "../../../molecules/Mypage-Myfunding/mypage-myfunding-dofunding";
import MyfundingFinFundingPane from "../../../molecules/Mypage-Myfunding/mypage-myfunding-finfunding";

const MypagePane = () => {
    const [apiData, setApiData] = useState(null);

    const handleButtonClick = (index) => {
        // 선택된 버튼에 대한 로직을 작성합니다.
        console.log(`Selected index: ${index}`);
    };

    useEffect(() => {
        // API 호출 함수
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'GET',
                    url: 'https://58aa-112-218-95-58.ngrok-free.app/api/v1/funding/my-funding-status?memberId=1',
                    headers: {
                        "Access-Control-Allow-Credentials": "true",
                        "ngrok-skip-browser-warning": "true"
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

    return (
        <div className="mypage-total-container">
            <div className="mypage-left-pane-container">
                {apiData && <MypageProfile profileInfo={apiData} />}
                <MyPageIndex onButtonClick={handleButtonClick} currentPageIndex={0} />
            </div>
            <div>
                <MyfundingNonFundingPane />
                {apiData && <MyfundingDoFundingPane
                    deadline={apiData.deadline}
                    deadlineDate={apiData.deadlineDate}
                    totalPercent={apiData.totalPercent}
                    message={apiData.message}
                    tag={apiData.tag}
                    participateFriendDtoList={apiData.participateFriendDtoList}
                    myPageFundingItemDtoList={apiData.myPageFundingItemDtoList} />}
                {apiData && <MyfundingFinFundingPane
                    deadline={apiData.deadline}
                    deadlineDate={apiData.deadlineDate}
                    totalPercent={apiData.totalPercent}
                    message={apiData.message}
                    tag={apiData.tag}
                    participateFriendDtoList={apiData.participateFriendDtoList}
                    myPageFundingItemDtoList={apiData.myPageFundingItemDtoList} />}
            </div>
        </div>
    );
}

export default MypagePane;
