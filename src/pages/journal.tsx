import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { useEffect } from "react";

import Button from "../components/button";
import Input from "../components/input";
import Title from "../components/title";
function Journal(props: any) {
  const editorRef = useRef();
  const [journalId] = useState(props.location.state.id);
  const [markdown, setMarkdown] = useState(props.location.state.journal);
  const [title, setTitle] = useState(props.location.state.title);
  const [user, setUser] = useState(props.location.state.user);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  function saveJournal() {
    if (editorRef !== null) {
      // @ts-ignore: Object is possibly 'null'.
      setMarkdown(editorRef.current.getValue());
      if (journalId) {
        fetch("http://localhost:8080/api/v1/journalentry/" + journalId, {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          // @ts-ignore: Object is possibly 'null'.
          body: JSON.stringify({ id: journalId, title, markdown: editorRef.current.getValue(), html: "", userid: user.id }),
        }).then((response) => {
          if (response.status === 200) {
            alert("Journal Saved");
          } else {
            console.error(response);
          }
        });
      } else {
        fetch("http://localhost:8080/api/v1/journalentry/", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          // @ts-ignore: Object is possibly 'null'.
          body: JSON.stringify({ id: null, title, markdown: editorRef.current.getValue(), html: "", userid: user.id }),
        }).then((response) => {
          if (response.status === 200) {
            alert("Journal Saved");
          } else {
            console.error(response);
          }
        });
      }
    }
  }
    return (
        <div>
            <br/>
            <div style={{backgroundColor: "white", width:"70vw", marginLeft: "15vw", marginRight: "15vw", border: "3px solid"}}>
                <br/>
            <Title>{title}</Title>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><Input defaultValue={title} onChange={(e) => setTitle(e.target.value)}/><Button onClick={saveJournal}>Save Journal</Button></div>
            </div>
            <br/>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Editor
                height="70vh"
                width="70vw"
                defaultLanguage="markdown"
                defaultValue=""
                value={markdown}
                onMount={handleEditorDidMount}
                theme="vs-dark"
            />
            </div>

        </div>
    );
}

export default Journal;
