import { useState } from 'react'
import './main.css'

function Paste({ userPaste, onType}) {

  return (
    <div className="container">
      <header className='container-header-w'>
        <div className="header-left">
          <i className="container-icon-action fa-regular fa-paste"></i>
          <h2 className='container-heading'>Editor</h2>
        </div>
        <i className="container-icon-expand fa-solid fa-expand"></i>
      </header>
      <div className="paste-box-w">
        <textarea className="paste-box" type="textbox" placeholder="Paste Markdown here..." value={ userPaste } onChange={onType}></textarea>
      </div>
    </div>
  );
}

export default Paste