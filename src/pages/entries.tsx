import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/button";
import Title from "../components/title";
import { FaTrash } from 'react-icons/fa';

function Entries(props: any) {
  let location = useLocation();
  const [user, setUser] = useState<User>();
  const [entries, setEntries] = useState<Array<JournalEntry>>([]);

  useEffect(() => {
    let user = location.state as User;
    setUser(user);
    fetch("http://ec2-34-215-202-19.us-west-2.compute.amazonaws.com:8080/api/v1/journalentry/user/" + user.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEntries(data);
      });
  }, []);

  function deleteEntry(entryId: string, index: number) {
    fetch("http://ec2-34-215-202-19.us-west-2.compute.amazonaws.com:8080/api/v1/journalentry/" + entryId, {
      method: "DELETE",
    }).then((response) => {
      console.log(response);
    });
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
          <Button>{entry.title}</Button>
        </Link>
        <FaTrash onClick={() => deleteEntry(entry.id, index)} />
      </div>
    );
  });
  return (
    <div>
      <Title>Your Entries</Title>
      <div>{list}</div>
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
