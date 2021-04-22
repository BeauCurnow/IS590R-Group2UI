import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";

import Button from "../components/button";
import Input from "../components/input";
import Title from "../components/title";
function Journal(props: any) {
  const editorRef = useRef();
  const [journalId] = useState(props.location.state.id);
  const [markdown, setMarkdown] = useState(props.location.state.journal);
  const [title, setTitle] = useState(props.location.state.title);
  const [saved, setSaved] = useState(true);
  const [user] = useState(props.location.state.user);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  function saveJournal() {
    if (editorRef !== null) {
      // @ts-ignore: Object is possibly 'null'.
      setMarkdown(editorRef.current.getValue());
      if (journalId) {
        fetch(
          "http://ec2-34-215-202-19.us-west-2.compute.amazonaws.com:8080/api/v1/journalentry/" +
            journalId,
          {
            method: "PUT",
            headers: {
              Authorization: localStorage.getItem("token") ?? "",
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
              id: journalId,
              title,
              // @ts-ignore: Object is possibly 'null'.
              markdown: editorRef.current.getValue(),
              html: "",
              userid: user.id,
            }),
          }
        ).then((response) => {
          if (response.status === 200) setSaved(true);
          else console.error(response);
        });
      } else {
        fetch(
          "http://ec2-34-215-202-19.us-west-2.compute.amazonaws.com:8080/api/v1/journalentry/",
          {
            method: "POST",
            headers: {
              Authorization: localStorage.getItem("token") ?? "",
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
              id: null,
              title,
              // @ts-ignore: Object is possibly 'null'.
              markdown: editorRef.current.getValue(),
              html: "",
              userid: user.id,
            }),
          }
        ).then((response) => {
          if (response.status === 200) setSaved(true);
          else console.error(response);
        });
      }
    }
  }
  return (
    <div>
      <br />
      <div
        style={{
          backgroundColor: "white",
          width: "70vw",
          marginLeft: "15vw",
          marginRight: "15vw",
          border: "3px solid",
        }}
      >
        <br />
        <Title>{title}</Title>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            data-testid="titleInput"
            defaultValue={title}
            onChange={(e) => {setTitle(e.target.value); setSaved(false)}}
          />
          {saved ? (
            <Button style={{ background: "grey", color: "black" }} disabled>
              Saved
            </Button>
          ) : (
            <Button onClick={saveJournal}>Save Journal</Button>
          )}
        </div>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Editor
          data-testid="monicoEditor"
          height="70vh"
          width="70vw"
          defaultLanguage="markdown"
          defaultValue=""
          value={markdown}
          onMount={handleEditorDidMount}
          theme="vs-dark"
          onChange={() => setSaved(false)}
        />
      </div>
    </div>
  );
}

export default Journal;
