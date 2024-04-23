import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Main from "../src/components/pages/main-page/main-page"
import Login from "../src/components/pages/login-page/login-page"
import Gifthub from "./components/pages/gifthub-page/gifthub-page";
import Mypage from "./components/pages/mypage-page/mypage-page"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/home" element={<Main />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/api/v1/gifthub" element={<Gifthub />} />
                <Route path="/api/v1/mypage" element={<Mypage />} />
            </Routes>
        </BrowserRouter>
    );
}