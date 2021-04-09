import React, { useRef } from 'react';
import Editor from "@monaco-editor/react";
import { useEffect } from 'react';

import Button from '../components/button'
import Input from '../components/input'

function Journal() {

    const editorRef = useRef(null);

    const [journal, setJournal] = React.useState("Journal");
    const [title, setTitle] = React.useState("Title")

    // useEffect(() => {
    // })


    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
    }

    function showValue() {
        if (editorRef != null) {
            // @ts-ignore: Object is possibly 'null'.
            alert(editorRef.current.getValue());
            // @ts-ignore: Object is possibly 'null'.
            setJournal(editorRef.current.getValue());
            console.log(journal)
        }
    }


    return (
        <div>
            <h3>{title}</h3>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><Input defaultValue={title} onChange={(e) => setTitle(e.target.value)}/><Button onClick={showValue}>Save Journal</Button></div>
            <div></div>
            <br/>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Editor
                height="70vh"
                width="70vw"
                defaultLanguage="markdown"
                defaultValue=""
                value={journal}
                onMount={handleEditorDidMount}
                theme="vs-dark"
            />
            </div>

        </div>
    );
}

export default Journal;