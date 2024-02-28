import { useState } from "react"
import './app.css'
import Paste from './Paste.jsx'
import Preview from './Preview.jsx'

function App({}) {
    const [userText, setUserText] = useState("");

    return (
        <div className="container">
            <h1 className="h1">Markdown Preview Tool!</h1>
            <Paste userPaste={ userText } onType={(e) => setUserText(e.target.value)}/>
            <Preview userPreview={ userText }/>
        </div>
    );
}

export default App