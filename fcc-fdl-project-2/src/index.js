import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import PasteBox from './PasteBox';
import PreviewBox from './PreviewBox';
import reportWebVitals from './reportWebVitals';

function Parent() {
  const [toParse, setToParse] = useState("")

  const setParsed = (data) => {
    setToParse(data)
  };


  return (
    <React.StrictMode>
      <h1>Markdown Previewing Tool!</h1>
      <PasteBox updateParsed = { setParsed }/>
      <PreviewBox toParse = { toParse }/>
    </React.StrictMode>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);

reportWebVitals(console.log);