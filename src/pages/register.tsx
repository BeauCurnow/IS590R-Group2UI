import React from 'react';

function Register(){


    const[username, setusername] = React.useState("");

    const[password, setpassword] = React.useState("");

    const[email, setemail] = React.useState("");

    
    return(
        <div>
            <form>
                <div><input defaultValue={username}/></div>
                <div><input defaultValue={password}/></div>
                <div><input defaultValue="confirm password"/></div>
                <div><input defaultValue={email}/></div>
                <div><button>Login</button></div>
            </form>
        </div>
    )
}

export default Register;