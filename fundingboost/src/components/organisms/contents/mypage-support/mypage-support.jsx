import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './mypage-support.scss';
import MypageProfile from '../../../molecules/MypageProfile/mypageprofile';
import MyPageIndex from '../../../molecules/MypageIndex/mypageindex';
import NonMemberModal from '../../../atoms/nonMemberModal/nonMemberModal';

const FAQ_ITEMS = [
    {
        id: 1,
        question: '펀딩이 종료되면 결제는 어떻게 처리되나요?',
        answer: '펀딩이 종료되면 내가 직접 결제한 금액, 포인트 사용 금액, 친구들에게 받은 펀딩 금액이 합산되어 주문 이력에 반영됩니다. 주문 상세 모달에서 결제 비중을 각각 확인할 수 있습니다.'
    },
    {
        id: 2,
        question: '카카오 로그인 후 성별 입력 모달이 보이는 이유가 무엇인가요?',
        answer: '현재 카카오 동의항목 권한 제약으로 성별 정보를 직접 받을 수 없어서, 최초 1회만 서비스 내부에서 성별을 선택하도록 처리했습니다. 선택 후에는 다시 표시되지 않습니다.'
    },
    {
        id: 3,
        question: '쇼핑하기 상품은 어디 기준으로 노출되나요?',
        answer: '상품은 크롤러가 수집한 item 스키마 데이터를 바탕으로 Elasticsearch 인덱스를 구성한 뒤 검색과 목록 노출에 사용합니다. 크롤링 데이터가 바뀌면 인덱스도 자동으로 재구성됩니다.'
    },
    {
        id: 4,
        question: '위시리스트, 지난 펀딩 이력, 구매 이력이 비어 보이면 어떻게 해야 하나요?',
        answer: '로컬/운영 Docker 초기 배포 시 QA 테스트 데이터가 자동 생성됩니다. 데이터가 기대와 다르면 컨테이너 로그를 확인하거나, 완전 초기화 후 재배포해서 테스트 시드를 다시 생성하는 것이 가장 빠릅니다.'
    },
    {
        id: 5,
        question: '문의는 어디로 보내면 되나요?',
        answer: '현재 토이 프로젝트 단계라 별도 1:1 문의 시스템은 없습니다. 이 페이지의 안내 메일을 통해 이슈를 접수하거나, 추후 연결될 이슈 트래커/오픈채팅 채널을 통해 접수하는 방식이 적절합니다.'
    }
];

const MypageSupportPane = () => {
    const [profileData, setProfileData] = useState(null);
    const [modalShowState, setModalShowState] = useState(false);
    const [openFaqId, setOpenFaqId] = useState(FAQ_ITEMS[0].id);

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
                console.error('고객센터 정보를 불러오는 중 오류가 발생했습니다.', error);
            }
        };

        fetchData();
    }, []);

    const toggleFaq = (faqId) => {
        setOpenFaqId((prev) => (prev === faqId ? null : faqId));
    };

    return (
        <div className="mypageSupportPane">
            {modalShowState && <NonMemberModal message="로그인 후 펀딩부스트를 시작해보세요." />}
            <div className="mypageSupportPane-left">
                {profileData && <MypageProfile profileInfo={profileData} />}
                <MyPageIndex onButtonClick={handleButtonClick} currentPageIndex={8} />
            </div>
            <div className="mypageSupportPane-right">
                <div className="mypageSupportPane-card">
                    <div className="mypageSupportPane-header">
                        <div>
                            <div className="mypageSupportPane-eyebrow">Support</div>
                            <h2>고객센터</h2>
                        </div>
                        <p>토이 프로젝트 운영 범위에 맞춰 FAQ와 기본 문의 채널을 제공합니다.</p>
                    </div>

                    <div className="mypageSupportContact">
                        <div className="mypageSupportContactTitle">문의 채널</div>
                        <div className="mypageSupportContactValue">support@fundingboost.test</div>
                        <div className="mypageSupportContactHint">버그 제보, 기능 문의, 테스트 계정 이슈를 메일로 접수할 수 있습니다.</div>
                    </div>

                    <div className="mypageSupportFaqList">
                        {FAQ_ITEMS.map((faq) => {
                            const isOpen = openFaqId === faq.id;

                            return (
                                <div className={`mypageSupportFaqItem ${isOpen ? 'open' : ''}`} key={faq.id}>
                                    <button
                                        type="button"
                                        className="mypageSupportFaqQuestion"
                                        onClick={() => toggleFaq(faq.id)}
                                    >
                                        <span>{faq.question}</span>
                                        <span className="mypageSupportFaqToggle">{isOpen ? '−' : '+'}</span>
                                    </button>
                                    {isOpen && (
                                        <div className="mypageSupportFaqAnswer">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MypageSupportPane;
