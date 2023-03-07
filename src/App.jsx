import React from "react";
import SignUp from "./SignUp.jsx";
import ChatWindow from "./ChatWindow.jsx"
import "./app.css"

export default function App(){
    const [userName,setUserName] = React.useState("");
    const [signUpMode,setSignUpMode] = React.useState(true);
    function handelNameEdit(event){
        const txt=event.target.value;
        setUserName(txt==="" ? "":
                    txt[0].toUpperCase() + txt.slice(1))
    }

    function handelSubmit(){
        setSignUpMode(oldMode=> !oldMode)
    }
    return(
        <>
        {signUpMode ? 
            <SignUp
            userName={userName}
            handelNameEdit={handelNameEdit}
            handelSubmit={handelSubmit}
            />
            :<ChatWindow
            userName={userName}
            handelNameEdit={handelSubmit}
            />
        }
        </> 
    
    )
}
