import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Entries(props: any) {
  let location = useLocation();
  const [user, setUser] = useState<User>()
  const [entries, setEntries] = useState<Array<JournalEntry>>([]);

  useEffect(() => {
    let user = location.state as User
    setUser(user)
    fetch("http://localhost:8080/api/v1/journalentry/user/" + user.id)
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEntries(data)
      });
  },[])

  function deleteEntry(index: number) {
    var holder = entries;
    holder.splice(index, 1);
    setEntries(holder);
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
                user: user
            },
          }}
        >
          {entry.title}
        </Link>
        <button onClick={() => deleteEntry(index)}>Delete</button>
      </div>
    );
  });
  return (
    <div>
      <h1>Your Entries</h1>
      <div>{list}</div>
    </div>
  );
}

export default Entries;

interface User {
    id: string,
    name: string,
    email: string
  }

interface JournalEntry {
    id: string,
    title: string,
    markdown: string
}