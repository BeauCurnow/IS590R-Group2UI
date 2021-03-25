import React from 'react';


function Login(){


    const[username, setusername] = React.useState("Username");

    const[password, setpassword] = React.useState("Password");


    function handleLogin(){
        // Put Post Request Here
    }




    return(
        <div>
            <h1>Please Login</h1>
            <form>
                <div><input defaultValue="Username"></input></div>
                <div><input defaultValue="Password"></input></div>
                <div><button>Login</button></div>
            </form>
        </div>
    )
}

export default Login;

