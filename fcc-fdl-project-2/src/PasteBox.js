import './pasteBox.css';
import { useState } from 'react';

function PasteBox(props) {
  const [paste, setPaste] = useState("");
  props.updateParsed(paste);

  return (
    <div className="container">
      <header className='container-header-w'>
        <div className="header-left">
          <i className="container-icon-action fa-regular fa-paste"></i>
          <h2 className='container-heading'>Editor</h2>
        </div>
        <i className="container-icon-expand fa-solid fa-expand"></i>
      </header>
      <div id="editor" className="paste-box-w">
        <textarea className="paste-box" type="textbox" placeholder="Paste Markdown here..." value={paste} onChange={e => { setPaste(e.target.value) }}></textarea>
      </div>
    </div>
  );
}

export default PasteBox;
