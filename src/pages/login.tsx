import React from 'react';
import Button from '../components/button'
import Input from '../components/input'

function Login(){


    const[username, setusername] = React.useState("Username");

    const[password, setpassword] = React.useState("Password");


    function handleLogin(){
        // Put Post Request Here
    }




    return(
        <div style={{display: 'block',  justifyContent:'center', alignItems:'center', height: '100vh'}} >
            <h1>Please Login</h1>
            <form>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><Input defaultValue="Username"/></div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><Input defaultValue="Password"/></div>
                <br/>
                <div><Button>Login</Button></div>
            </form>
        </div>
    )
}

export default Login;

