import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Main from "../src/components/pages/main-page/main-page"
import Login from "../src/components/pages/login-page/login-page"
import FundingRegistPage from "./components/pages/fundingRegist-page/fundingRegist-Page";
import Gifthub from "./components/pages/gifthub-page/gifthub-page";

// 동적으로 로드할 컴포넌트를 lazy 함수를 사용하여 import
const Main = lazy(() => import('../src/components/pages/main-page/main-page'));
const Login = lazy(() => import('../src/components/pages/login-page/login-page'));
const Gifthub = lazy(() => import('./components/pages/gifthub-page/gifthub-page'));
const Mypage = lazy(() => import('./components/pages/mypage-page/mypage-page'));

// Suspense 컴포넌트를 사용하여 로딩 중일 때 보여줄 UI를 지정
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Suspense fallback={<div>Loading FundingBoost...</div>}><Main /></Suspense>} />
                <Route path="/home" element={<Suspense fallback={<div>Loading FundingBoost...</div>}><Main /></Suspense>} />
                <Route path="/login" element={<Suspense fallback={<div>Loading FundingBoost...</div>}><Login /></Suspense>} />
                <Route path="/gifthub" element={<Suspense fallback={<div>Loading FundingBoost...</div>}><Gifthub /></Suspense>} />
                <Route path="/mypage" element={<Suspense fallback={<div>Loading FundingBoost...</div>}><Mypage /></Suspense>} />

                <Route path="/funding" element={<FundingRegistPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;