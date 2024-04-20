import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Main from "../src/components/pages/main-page/main-page"
import Login from "../src/components/pages/login-page/login-page"
import FundingRegistPage from "./components/pages/fundingRegist-page/fundingRegist-Page";
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/home" element={<Main />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/funding" element={<FundingRegistPage />} />
            </Routes>
        </BrowserRouter>
    );
}