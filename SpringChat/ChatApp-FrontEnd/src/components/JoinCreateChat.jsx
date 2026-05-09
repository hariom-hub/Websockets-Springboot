import React, { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import chatIcon from "../assets/chat.png";
import toast from "react-hot-toast";

const JoinCreateChat = () => {

    const [detail, setDetail] = useState({
        userName: "",
        roomId: ""
    });

    // function will handle the current event that is being triggered and will update the state of the component accordingly

    function handleFormInputChange(event) {

        // this will bring the changed key and will set the value

        setDetail({
            ...detail, [event.target.name]: event.target.value,
        });
    }

      function validateForm() {
        if (detail.roomId === "" || detail.userName === "") {

            toast.error("Please fill all the fields");
            return false;
        }
        return true;
    }


    function joinChat() {
        if(validateForm()){

        }
    }

    function createRoom() {
        if(validateForm()){
         toast.success("Room created Successfully.");
        }

    }

    return (

        <div className="min-h-screen flex items-center justify-center">
            <div className="p-8 w-full flex flex-col gap-5 max-w-md rounded  shadow border dark:shadow-gray-900">
                <div>
                    <img src={chatIcon} className="h-20 mx-auto" alt="chaticon" />
                </div>
                <h1 className="text-2xl font-semibold text-center">
                    Join room / Create Room ...
                </h1>
                {/* name div */}
                <div className="">
                    <label htmlFor="name" className="block font-medium mb-2">
                        Your Name
                    </label>
                    <TextField onChange={handleFormInputChange} name="userName" value={detail.userName} placeholder="Enter your name" id="outlined-basic" required fullWidth type="text" />
                    {/* <input type="text"  id="name" className="w-full dark:bg-gray-600 px-4 py-2 dark:border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring:blue-500"/> */}
                </div>
                {/* room id div */}
                <div className="">
                    <label htmlFor="name" className="block font-medium mb-2">
                        Room ID/ New Room ID
                    </label>
                    {/* <input type="text"  id="name" className="w-full dark:bg-gray-600 px-4 py-2 dark:border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring:blue-500"/> */}
                    <TextField name="roomId" onChange={handleFormInputChange} value={detail.roomId} id="outlined-basic" placeholder="Enter Room ID" required fullWidth type="text" />
                </div>
                {/* button */}
                <div className="flex justify-center gap-10 cursor:pointer;">
                    <div>
                        <Button onClick={joinChat} variant="contained" color="primary">
                            Join Room
                        </Button>
                    </div>
                    <div>
                        <Button onClick={createRoom} variant="contained" color="success">Create Room</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinCreateChat