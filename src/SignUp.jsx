import React from "react";
import Jdenticon from 'react-jdenticon';
import "./signUp.css";

export default function SignUp(props){

    return(
        <div className="signUp--outerFrame">
            <div className="Login--profilePicture">
                <Jdenticon 
                    value={props.userName} 
                />
            </div>
            <label htmlFor="userName"> 
                <span className="hidden">User Name</span>
            </label>
            <input 
                className="Login--userName"
                onChange={props.handelNameEdit}
                type="text" 
                placeholder="User Name" 
                id="userName"
                value={props.userName}
            />
            <button
                className="Login--signUp"
                onClick={props.handelSubmit}
                >Sign Up</button>
        </div>
    )
}