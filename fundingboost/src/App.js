import React from 'react';
import './App.css';
import Footer from "./components/organisms/footer/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import LoginPage from './components/pages/login-page/login-page'
import HeaderBar from "./components/organisms/header/header";

function App() {
    return (
        <div className="App">
            <LoginPage/>
        </div>
    );
}

export default App;