import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/button";
import Title from "../components/title";
import { FaTrash } from "react-icons/fa";
import { BsTrash2Fill } from "react-icons/bs";
import Subtitle from "../components/subtitle";

function Entries(props: any) {
  let location = useLocation();
  const [user, setUser] = useState<User>();
  const [entries, setEntries] = useState<Array<JournalEntry>>([]);
  const [trashHover, setTrashHover] = useState<number>(-1)

  useEffect(() => {
    let user = location.state as User;
    setUser(user);
    fetch(
      "http://ec2-34-215-202-19.us-west-2.compute.amazonaws.com:8080/api/v1/journalentry/user/" +
        user.id
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setEntries(data);
      });
  }, []);

  function deleteEntry(entryId: string, index: number) {
    fetch(
      "http://ec2-34-215-202-19.us-west-2.compute.amazonaws.com:8080/api/v1/journalentry/" +
        entryId,
      {
        method: "DELETE",
      }
    )
    let temp = entries.slice();
    temp.splice(index, 1);
    setEntries(temp);
  }

  var list = entries.map((entry, index) => {
    return (
      <div key={index}>
        <Link
          to={{
            pathname: "/journal",
            state: {
              id: entry.id,
              title: entry.title,
              journal: entry.markdown,
              user: user,
            },
          }}
        >
          <Button style={{width: "30%"}}>{entry.title}</Button>
        </Link>
        {trashHover !== index ? <FaTrash data-testid={`closedDeleteIcon${index}`} onMouseEnter={() => setTrashHover(index)} /> : <BsTrash2Fill data-testid={`deleteIcon${index}`} onClick={() => deleteEntry(entry.id, index)} onMouseLeave={() =>setTrashHover(-1)} />}
      </div>
    );
  });
  return (
    <div>
      <Title>Your Entries</Title>
      {entries.length !== 0 ? (
        <div>{list}</div>
      ) : (
        <div>
          <Subtitle>No entries yet :(</Subtitle>
          <Link
            to={{
              pathname: "/journal",
              state: {
                title: "New Journal",
                journal: "",
                user: user,
              },
            }}
          >
            <Button>Add one now!</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Entries;

interface User {
  id: string;
  name: string;
  email: string;
}

interface JournalEntry {
  id: string;
  title: string;
  markdown: string;
}
