import { useState } from 'react'

function Preview({ userPreview }) {

    return (
        <div className="container">
            <header className='container__header'>
                <div className="header__left">
                    <i className="icon header__left__icon fa-regular fa-eye"></i>
                    <h2 className='container-heading'>Preview</h2>
                </div>
                <i className="container-icon-expand fa-solid fa-expand"></i>
            </header>
            <div className="paste-box-w">
                { userPreview }
            </div>
        </div>
    );
}

export default Preview;