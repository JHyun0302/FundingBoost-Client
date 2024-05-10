import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { HashLoader } from "react-spinners";

// 동적으로 로드할 컴포넌트를 lazy 함수를 사용하여 import
const Main = lazy(() => import('../src/components/pages/main-page/main-page'));
const Login = lazy(() => import('../src/components/pages/login-page/login-page'));
const Gifthub = lazy(() => import('./components/pages/gifthub-page/gifthub-page'));
const MypageMyfunding = lazy(() => import('./components/pages/mypage/mypage-myfunding-page/mypage-myfunding-page'));
const MypageFundingHistory = lazy(() => import('./components/pages/mypage/mypage-funding-history-page/mypage-myfunding-history-page'));
const FundingRegistPage = lazy(() => import('./components/pages/fundingRegist-page/fundingRegist-Page'));
const FundingSuccessPage = lazy(() => import('./components/pages/pay-success-page/pay-success-page'));
const FundingPayPage = lazy(() => import('./components/pages/mypay-page/mypay-page'));

// 로딩 스피너
const LoadingSpinner = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <HashLoader size={100} color={"#ffd95d"} />
    </div>
);

// Suspense 컴포넌트를 사용하여 로딩 중일 때 보여줄 UI를 지정
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Suspense fallback={<LoadingSpinner />}><Main /></Suspense>} />
                <Route path="/home" element={<Suspense fallback={<LoadingSpinner />}><Main /></Suspense>} />
                <Route path="/login" element={<Suspense fallback={<LoadingSpinner />}><Login /></Suspense>} />
                <Route path="/gifthub" element={<Suspense fallback={<LoadingSpinner />}><Gifthub /></Suspense>} />
                <Route path="/funding" element={<Suspense fallback={<LoadingSpinner />}><FundingRegistPage /></Suspense>} />
                <Route path="/mypage" element={<Suspense fallback={<LoadingSpinner />}><MypageMyfunding /></Suspense>} />
                <Route path="/mypage/funding-history" element={<Suspense fallback={<LoadingSpinner />}><MypageFundingHistory/></Suspense>} />
                <Route path="/success" element={<Suspense fallback={<LoadingSpinner />}><FundingSuccessPage/></Suspense>} />
                <Route path="/funding/pay" element={<Suspense fallback={<LoadingSpinner />}><FundingPayPage/></Suspense>} />

            </Routes>
        </BrowserRouter>
    );
}

export default Router;

