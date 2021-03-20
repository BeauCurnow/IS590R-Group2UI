import React, { useRef } from 'react';
import Editor from "@monaco-editor/react";

function Journal() {

    const editorRef = useRef(null);

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
    }

    function showValue() {
        if (editorRef != null) {
            // @ts-ignore: Object is possibly 'null'.
            alert(editorRef.current.getValue());
        }
    }

    return (
        <div>
            <div><button onClick={showValue}>Show value</button></div>
            <div><input defaultValue="Entry Title"></input></div>
            <Editor
                height="90vh"
                defaultLanguage="javascript"
                defaultValue="// some comment"
                onMount={handleEditorDidMount}
            />
        </div>
    );
}

export default Journal;