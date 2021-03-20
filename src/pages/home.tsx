import React from 'react';
import Journal from './journal';
import {Link} from 'react-router-dom'

function Home(){

    return(
        <div>
            <div><Link to='/entries'>View Your Journal Entries</Link></div>
            <div><Link to='/journal'>Create a New Journal</Link></div>
        </div>
    )
}

export default Home;