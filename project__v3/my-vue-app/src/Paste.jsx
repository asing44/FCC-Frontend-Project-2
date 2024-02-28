import { useState } from 'react'

function Paste({ userPaste, onType}) {

  return (
    <div className="container">
      <header className='container__header'>
        <div className="header__left">
          <i className="icon container-icon-action fa-regular fa-paste"></i>
          <h2 className='header__heading'>Paste</h2>
        </div>
        <i className="icon container-icon-expand fa-solid fa-expand"></i>
      </header>
      <div className="container__paste-area">
        <textarea className="textbox paste-area__textbox" type="textbox" placeholder="Paste Markdown here..." value={ userPaste } onChange={onType}></textarea>
      </div>
    </div>
  );
}

export default Paste