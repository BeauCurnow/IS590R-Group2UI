import React, { useRef } from 'react';
import Editor from "@monaco-editor/react";
import { useEffect } from 'react';

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
            <div><h3>{title}</h3><input defaultValue={title} onChange={(e) => setTitle(e.target.value)}/></div>
            <div><button onClick={showValue}>Save Journal</button></div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <Editor
                height="80vh"
                width="80vw"
                defaultLanguage="markdown"
                defaultValue="// some comment"
                value={journal}
                onMount={handleEditorDidMount}
                theme="vs-dark"
            />
            </div>
        </div>
    );
}

export default Journal;