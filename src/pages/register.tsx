import React from 'react';

function Register(){


    const[username, setusername] = React.useState("Username");

    const[password, setpassword] = React.useState("Password");

    const[email, setemail] = React.useState("Email");

    
    return(
        <div>
            <form>
                <div><input defaultValue={username}/></div>
                <div><input defaultValue={password}/></div>
                <div><input defaultValue="Confirm Password"/></div>
                <div><input defaultValue={email}/></div>
                <div><button>Login</button></div>
            </form>
        </div>
    )
}

export default Register;