import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
//
// root.render(
//     <React.StrictMode>
//         <RecoilRoot>
//             <App />
//         </RecoilRoot>
//     </React.StrictMode>,
//     document.getElementById("root")
// );

reportWebVitals();
