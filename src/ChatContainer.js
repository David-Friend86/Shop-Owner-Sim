import React, { Fragment } from "react";
import Chat from "./Chat";


function ChatContainer({messages}){
    return(
       <div style={{display: "flex", justifyContent:"center", textAlign:'center', position:'absolute', marginLeft:'35%', marginRight:'auto', marginTop:'-5%', height: '175px', width:'600px', overflowY: 'hidden',  zIndex:'5'}}>
        {messages.map((message)=> <Chat message={message}/>)}
       </div>
        )
    }


export default ChatContainer