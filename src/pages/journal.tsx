import React, { useRef } from 'react';
import Editor from "@monaco-editor/react";
import { useEffect } from 'react';

import Button from '../components/button'
import Input from '../components/input'
import Title from '../components/title'
function Journal(props: any) {

    const editorRef = useRef(null);
    // const id = React.useState(props.location.state.entry.id)
    const [journal, setJournal] = React.useState(props.location.state.entry.journal);
    const [title, setTitle] = React.useState(props.location.state.entry.title)

    // useEffect(() => {
        // fetch journal based on id
        // setJouranl(entry.journal)
        // setTitle(entry.title)
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
            <br/>
            <div style={{backgroundColor: "white", width:"70vw", marginLeft: "15vw", marginRight: "15vw", border: "3px solid"}}>
                <br/>
            <Title>{title}</Title>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><Input defaultValue={title} onChange={(e) => setTitle(e.target.value)}/><Button onClick={showValue}>Save Journal</Button></div>
            </div>
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