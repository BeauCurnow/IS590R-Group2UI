import { render } from '@testing-library/react';
import { title } from 'node:process';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/title'


function Entries(props: any){

    const [entries, setEntries] = React.useState([
        {title: 'Test1', journal: 'This is a bunch of markdown!'},
        {title: 'Test2', journal: 'This is a bunch of markdown!'},
      ]);

      function deleteEntry(index: number){
          var holder = entries;
          holder.splice(index, 1);
          setEntries(holder);
      }


    var list = entries.map((entry, index) => {
        return(<p><Link to={{
            pathname:"/journal",
            state:{
                entry: entry
            }
        }}  >{entry.title}</Link> <p onClick={()=> deleteEntry(index)}>Delete</p></p>)
    })
    return(
    <div>
        <Title>Your Entries</Title>
        <div>
            {list}
        </div> 
    </div>)

}

export default Entries