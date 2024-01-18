import './pasteBox.css';

function PasteBox() {
  return (
    <div className="container">
      <header className='container-header-w'>
        <div className="header-left">
          <i className="container-icon-action fa-regular fa-paste"></i>
          <h2 className='container-heading'>Editor</h2>
        </div>
        <i className="container-icon-expand fa-solid fa-expand"></i>
      </header>
      <input className="paste-box" type="textbox"></input>
    </div>
  );
}

export default PasteBox;
