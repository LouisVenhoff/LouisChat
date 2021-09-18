import React, {useState} from "react";
import {TextField, Button }  from '@mui/material';
import "./nameInputStyle.css";
//import wallpaper from "../graphics/wallpaper.jpg";

const NameInput:React.FC = () =>
{

    const [chatName, setChatName] = useState<String | null | undefined>(null);


    function textChangeHandler(e:any)
    {
        setChatName(e.target.value);
    }


    function startBtnClickHandler()
    {
        //TODO: Der Name muss irgendwie bis in die nächste Session gespeichert werden
    }



    return(
    <div id="nameInputDiv">
        <h1>LouisChat!</h1>
        <div id="nameInputFieldDiv">
        <TextField id="nameInputField" variant="outlined" label="chatName" color="primary" onChange={(e) => textChangeHandler(e)} />
        </div>
        <Button id="nameInputBtn" variant="contained" color="primary" onClick={startBtnClickHandler}>Start Chatting!</Button>


    </div>);
}

export default NameInput;