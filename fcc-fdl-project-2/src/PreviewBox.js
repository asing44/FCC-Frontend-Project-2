import './previewBox.css';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

function PreviewBox(props) {
    const parsed = marked.parse(props.toParse)

    return (
        <div className="container">
            <header className='container-header-w'>
                <div className="header-left">
                    <i className="container-icon-action fa-regular fa-eye"></i>
                    <h2 className='container-heading'>Preview</h2>
                </div>
                <i className="container-icon-expand fa-solid fa-expand"></i>
            </header>
            <div id="previewer" className="preview-box-w">
                {parsed}
            </div>
        </div>
    );
}

// const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');

export default PreviewBox;