import React from "react";
import { Button } from "@mui/material";

const ChatPage = () =>{

    return(
         <div className="">
           <header className=" flex justify-around fixed w-full h-20 border dark : bg-gray-500  text-white  shadow  py-5 items-center">

            {/* room name container */}
            <div className="">
                <h1>Room : <span>room name</span></h1>
            </div>
            {/* user name container */}
            <div>
                <h1>User : <span>Username</span></h1>
            </div>
            {/* leave room button  */}
            <div>
               <Button id="LeaveButton"  variant="contained" color="error">Leave Room</Button> 
            </div>

           </header>

         </div>

    )
}
export default ChatPage;