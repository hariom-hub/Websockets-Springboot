import React, { useState } from "react";

import { Button } from "@mui/material";
import { MdAttachFile, MdSend } from "react-icons/md";


const ChatPage = () => {


    const [messages, setMessages] = useState([

        {
            content: "hello!!",
            sender: "hariom"
        },
        {
            content: "hii thereaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!",
            sender: "roman"
        },
        {
            content : "abcd",
            sender : "durgesh"
        },
        {
            content : "pqrs",
            sender : "harru"
        },
        {
            content : "pqrs",
            sender : "harru"
        },
        {
            content : "pqrs",
            sender : "harru"
        },
        {
            content : "pqrs",
            sender : "harru"
        },
        {
            content : "pqrs",
            sender : "harru"
        }
    ]);

    const [input, setInput] = useState("");
    const [stompClient, setStompClient] = useState(null);
    const [roomId, setRoomId] = useState("");
    const [currentUser] = useState("durgesh");



    return (
        <div className="">
            {/* headerbox */}
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
                    <Button id="LeaveButton" variant="contained" color="error">Leave Room</Button>

                </div>

            </header>

            {/* main content */}

            <main className="py-20 border w-2/3 mx-auto bg-slate-600 h-screen overflow-auto text-white">
                {
                    messages.map((message, index) => {
                        // display message in the main content
                        return (
                            <div key={index} className= {`flex ${message.sender === currentUser ? "justify-end" : "justify-start"}`}>
                                <div  className="my-2  mx-w-xs rounded">
                                {/* Added 'flex' to parent to help control alignment if needed */}
                                <div className = { `${ message.sender === currentUser ? "bg-blue-400" : "bg-green-400"} flex flex-row items-start rounded px-4 py-2 mx-3 my-1 w-fit  gap-2}`}>
                                    <img
                                        className="h-10 w-10 rounded-full flex-shrink-0"
                                        src={"https://api.dicebear.com/9.x/pixel-art/svg"}
                                        alt="avatar"
                                    />
                                    <div className="flex flex-col min-w-0">
                                        <p className="text-white font-bold text-lg">{message.sender}</p>
                                        <p className="text-sm break-words">{message.content}</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
            </main>

            {/* input message container */}
            <div className="fixed bottom-2 w-full h-16">
                <div className="h-full rounded w-180 mx-auto bg-cyan-100 flex gap-2 items-center justify-center border rounded-full">

                    <input type="text" placeholder="Type your message here..." className=" border bg-blue-300 dark px-3 py-2 rounded-full w-120 h-full"></input>
                    <button className="bg-purple-500 rounded-full h-10 hover:bg-purple-400">
                        <MdAttachFile size={30} />
                    </button>
                    <button className="bg-green-600 h-10  w-10 flex rounded items-center justify-center hover:bg-green-500">
                        <MdSend size={30} />
                    </button>
                </div>

            </div>

        </div>

    )
}
export default ChatPage;