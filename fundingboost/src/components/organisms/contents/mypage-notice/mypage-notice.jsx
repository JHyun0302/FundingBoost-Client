import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './mypage-notice.scss';
import MypageProfile from '../../../molecules/MypageProfile/mypageprofile';
import MyPageIndex from '../../../molecules/MypageIndex/mypageindex';
import NonMemberModal from '../../../atoms/nonMemberModal/nonMemberModal';

const NOTICE_ITEMS = [
    {
        id: 1,
        category: '업데이트',
        title: '실시간 선물랭킹 가격대 필터가 추가되었습니다.',
        date: '2026-03-01',
        body: '홈 화면 실시간 선물랭킹에서 1만원 이하, 1-3만원, 3-5만원, 5만원 이상 가격대별로 상품을 바로 확인할 수 있습니다.'
    },
    {
        id: 2,
        category: '안내',
        title: '마이페이지 이력 화면이 10개 단위 페이지네이션으로 변경되었습니다.',
        date: '2026-03-01',
        body: '지난 펀딩 이력, 친구 펀딩 기록, 구매 이력, 위시리스트, 배송지 관리, MY 리뷰가 모두 10개씩 페이지 단위로 분리되어 더 안정적으로 확인할 수 있습니다.'
    },
    {
        id: 3,
        category: '테스트 데이터',
        title: '로컬/운영 공통 QA 계정과 샘플 데이터가 자동으로 생성됩니다.',
        date: '2026-03-01',
        body: '초기 Docker 배포 시 마리오, 루이지, 피치공주, 키노피오, 요시 계정이 자동 생성되며 친구 관계, 북마크, 펀딩, 주문, 리뷰 데이터도 함께 구성됩니다.'
    },
    {
        id: 4,
        category: '운영',
        title: '이미지 URL 정규화와 크롤러 썸네일 보정이 적용되었습니다.',
        date: '2026-02-28',
        body: '카카오 CDN 이미지 URL이 percent-encoding 된 상태로 저장되던 문제를 수정했고, 배지 이미지가 대표 이미지로 저장되지 않도록 크롤러 선택 로직을 개선했습니다.'
    },
    {
        id: 5,
        category: '예정',
        title: '문의 접수 페이지와 관리자용 공지 관리 기능은 추후 추가 예정입니다.',
        date: '2026-02-27',
        body: '현재는 토이 프로젝트 운영 범위에 맞춰 정적 공지와 FAQ 중심으로 제공하고 있으며, 추후 필요 시 작성형 기능을 별도 추가할 수 있습니다.'
    }
];

const MypageNoticePane = () => {
    const [profileData, setProfileData] = useState(null);
    const [modalShowState, setModalShowState] = useState(false);

    const handleButtonClick = (index) => {
        console.log(`Selected index: ${index}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    setModalShowState(true);
                    return;
                }

                const response = await axios({
                    method: 'GET',
                    url: `${process.env.REACT_APP_FUNDINGBOOST}/funding/my-funding-status`,
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    },
                    responseType: 'json'
                });

                setProfileData(response.data.data);
            } catch (error) {
                console.error('공지사항 정보를 불러오는 중 오류가 발생했습니다.', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mypageNoticePane">
            {modalShowState && <NonMemberModal message="로그인 후 펀딩부스트를 시작해보세요." />}
            <div className="mypageNoticePane-left">
                {profileData && <MypageProfile profileInfo={profileData} />}
                <MyPageIndex onButtonClick={handleButtonClick} currentPageIndex={7} />
            </div>
            <div className="mypageNoticePane-right">
                <div className="mypageNoticePane-card">
                    <div className="mypageNoticePane-header">
                        <div>
                            <div className="mypageNoticePane-eyebrow">Notice</div>
                            <h2>공지사항</h2>
                        </div>
                        <p>배포 변경사항과 운영 안내를 한곳에서 확인할 수 있습니다.</p>
                    </div>
                    <div className="mypageNoticePane-list">
                        {NOTICE_ITEMS.map((notice) => (
                            <article key={notice.id} className="mypageNoticeItem">
                                <div className="mypageNoticeItem-meta">
                                    <span className={`mypageNoticeBadge ${notice.category === '업데이트' ? 'accent' : ''}`}>
                                        {notice.category}
                                    </span>
                                    <span className="mypageNoticeDate">{notice.date}</span>
                                </div>
                                <h3>{notice.title}</h3>
                                <p>{notice.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MypageNoticePane;
