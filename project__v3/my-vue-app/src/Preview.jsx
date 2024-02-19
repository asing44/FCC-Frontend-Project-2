import { useState } from 'react'
import './main.css'

function Preview() {

  return (
        <div className="container">
            <header className='container-header-w'>
                <div className="header-left">
                    <i className="container-icon-action fa-regular fa-eye"></i>
                    <h2 className='container-heading'>Preview</h2>
                </div>
                <i className="container-icon-expand fa-solid fa-expand"></i>
            </header>
            <div className="paste-box-w">
            </div>
        </div>
    );
}

export default Preview;