import React from 'react';
import logo from './logo.svg';
import './App.css';
import  header from './components/orgenisms/header/header'
import HeaderBar from "./components/orgenisms/header/header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from './components/organisms/footer/footer'

function App() {
    return (
        <div className="App">
                <HeaderBar />
                <Footer />
        </div>
    );
}

export default App;