import React, { useRef } from 'react';
import Editor from "@monaco-editor/react";

function Journal() {

    const editorRef = useRef(null);

    const [journal, setjournal] = React.useState("Journal");

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
    }

    function showValue() {
        if (editorRef != null) {
            // @ts-ignore: Object is possibly 'null'.
            alert(editorRef.current.getValue());
            // @ts-ignore: Object is possibly 'null'.
            setjournal(editorRef.current.getValue());
            console.log(journal)
        }
    }

    return (
        <div>
            <div><h3>Journal Title</h3><input defaultValue="Entry Title"></input></div>
            <div><button onClick={showValue}>Save Journal</button></div>
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