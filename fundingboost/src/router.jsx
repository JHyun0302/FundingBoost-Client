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
const PaySuccessPage = lazy(() => import('./components/pages/pay-success-page/pay-success-page'));
const FundingPayPage = lazy(() => import('./components/pages/mypay-page/mypay-page'));
const FundingSuccessPage = lazy(() => import('./components/pages/funding-success-page/funding-success-page'));
const FriendFundingDetail = lazy(() => import('./components/pages/friendFundingDetail-page/friendFundingDetail-page'));
const FriendFundingPayPage = lazy(() => import('./components/pages/friendFundingPay-page/friendFundingPay-page'));
const Shopping = lazy(() => import('./components/pages/shopping-page/shopping-page'));
const FriendFunding = lazy(() => import('./components/pages/friendFunding-page/friendFunding-page'));
const ShoppingDetail = lazy(() => import('./components/pages/shopping-detail-page/shopping-detail-page'));
const OrderPayPage = lazy(() => import('./components/pages/order-pay-page/order-pay-page'));
const MypageFriendFundingHistory = lazy(() => import('./components/pages/mypage/mypage-friend-funding-history-page/mypage-friend-funding-history-page'));
const MypageOrderHistory  = lazy(() => import('./components/pages/mypage/mypage-order-history-page/mypage-order-history-page'));
const MypageDeliveryMangement = lazy(() => import('./components/pages/mypage/mypage-delivery-management-page/mypage-delivery-management-page'));
const MypageWishlist= lazy(() => import('./components/pages/mypage/mypage-wishlist-page/mypage-wishlist-page'));
const MypageReview = lazy(() => import('./components/pages/mypage/mypage-review-page/mypage-review-page'));
const SignUpPage    = lazy(() => import('./components/pages/signUp-page/signUp-page'));
const ErrorPage= lazy(() => import('./components/pages/error-handle-page/error-handle-page'));
const KakaoLoginLoadingPage = lazy(() => import('./components/pages/login-page/redirection'));

// 로딩 스피너
const LoadingSpinner = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <HashLoader size={100} color={"#ffd95d"} />
    </div>
);

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Suspense fallback={<LoadingSpinner/>}><Main/></Suspense>}/>
                <Route path="/home" element={<Suspense fallback={<LoadingSpinner/>}><Main/></Suspense>}/>
                <Route path="/login" element={<Suspense fallback={<LoadingSpinner/>}><Login/></Suspense>}/>
                <Route path="/gifthub" element={<Suspense fallback={<LoadingSpinner/>}><Gifthub/></Suspense>}/>
                <Route path="/funding"
                       element={<Suspense fallback={<LoadingSpinner/>}><FundingRegistPage/></Suspense>}/>
                <Route path="/mypage" element={<Suspense fallback={<LoadingSpinner/>}><MypageMyfunding/></Suspense>}/>
                <Route path="/mypage/funding-history"
                       element={<Suspense fallback={<LoadingSpinner/>}><MypageFundingHistory/></Suspense>}/>
                <Route path="/funding/pay"
                       element={<Suspense fallback={<LoadingSpinner/>}><FundingPayPage/></Suspense>}/>
                <Route path="/order/pay" element={<Suspense fallback={<LoadingSpinner/>}><OrderPayPage/></Suspense>}/>
                <Route path="/friend-funding/pay/success"
                       element={<Suspense fallback={<LoadingSpinner/>}><PaySuccessPage/></Suspense>}/>
                <Route path="/order/pay/success"
                       element={<Suspense fallback={<LoadingSpinner/>}><PaySuccessPage/></Suspense>}/>
                <Route path="/funding/pay/success"
                       element={<Suspense fallback={<LoadingSpinner/>}><PaySuccessPage/></Suspense>}/>
                <Route path="/funding/regist/success"
                       element={<Suspense fallback={<LoadingSpinner/>}><FundingSuccessPage/></Suspense>}/>
                <Route path="/friend-funding/detail/:fundingId"
                       element={<Suspense fallback={<LoadingSpinner/>}><FriendFundingDetail/></Suspense>}/>
                <Route path="/friend-funding/pay/:fundingId"
                       element={<Suspense fallback={<LoadingSpinner/>}><FriendFundingPayPage/></Suspense>}/>
                <Route path="/success"
                       element={<Suspense fallback={<LoadingSpinner/>}><FundingSuccessPage/></Suspense>}/>
                <Route path="/shopping" element={<Suspense fallback={<LoadingSpinner/>}><Shopping/></Suspense>}/>
                <Route path="/friend-funding"
                       element={<Suspense fallback={<LoadingSpinner/>}><FriendFunding/></Suspense>}/>
                <Route path="/shopping/detail/:itemId"
                       element={<Suspense fallback={<LoadingSpinner/>}><ShoppingDetail/></Suspense>}/>
                <Route path="/mypage/friend-funding-history"
                       element={<Suspense fallback={<LoadingSpinner/>}><MypageFriendFundingHistory/></Suspense>}/>
                {/* + 지난펀딩 기록 디테일   */}
                <Route path="/mypage/order-history" element={<Suspense fallback={<LoadingSpinner />}><MypageOrderHistory /></Suspense>} />
                <Route path="/mypage/delivery" element={<Suspense fallback={<LoadingSpinner />}><MypageDeliveryMangement /></Suspense>} />
                <Route path="/mypage/favorite" element={<Suspense fallback={<LoadingSpinner />}><MypageWishlist /></Suspense>} />
                <Route path="/mypage/review" element={<Suspense fallback={<LoadingSpinner />}><MypageReview /></Suspense>} />
                <Route path="/signup" element={<Suspense fallback={<LoadingSpinner />}><SignUpPage/></Suspense>} />
                <Route path="/error" element={<Suspense fallback={<LoadingSpinner />}><ErrorPage/></Suspense>} />
                <Route path="/login/oauth2/code/kakao" element={<Suspense fallback={<LoadingSpinner/>}><KakaoLoginLoadingPage/></Suspense>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

