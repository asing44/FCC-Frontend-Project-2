import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import PasteBox from './PasteBox';
import PreviewBox from './PreviewBox';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Markdown Previewing Tool!</h1>
    <PasteBox />
    <PreviewBox />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
