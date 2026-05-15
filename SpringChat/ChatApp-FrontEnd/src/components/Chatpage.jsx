import React, { useEffect, useRef, useState } from "react";

import { Button } from "@mui/material";
import { MdAttachFile, MdSend } from "react-icons/md";
import useChatContext from "../Context/ChatContext";
import { useNavigate } from "react-router";
import SockJS from "sockjs-client";
import { API_URL } from "../config/AxiosHelper";
import { Stomp } from "@stomp/stompjs";
import toast from "react-hot-toast";
import { getMessages } from "../services/RoomService";
import { timeAgo } from "../config/helper";

const ChatPage = () => {


    const { roomId, currentUser, connected , setroomId, setCurrentUser, setConnected} = useChatContext();
    // console.log(roomId);
    // console.log(currentUser);
    // console.log(connected);
    const navigate = useNavigate();


    useEffect(() => {

        if (!connected) {
            navigate("/");
            toast.error("Disconnected from the server. Please join a room to continue chatting.");
        }

    }, [roomId, currentUser, connected]);


    const [messages, setMessages] = useState([

       
 
    ]);

    const [input, setInput] = useState("");
    const inputRef = useRef(null);
    const chatBoxRef = useRef(null);
    const [stompClient, setStompClient] = useState(null);

    // page init:
    // loading messages from the server

    // initializing the stomp client and connecting to the server

    useEffect(() => {

        const connecWebSocket = () => {

            const socket = new SockJS(`${API_URL}/chat`);
            const client = Stomp.over(socket);

            client.connect({}, () => {
                setStompClient(client);
                toast.success("connected");
                client.subscribe(`/topic/room/${roomId}`, (message) => {
                    console.log(message);
                    const newMessage = JSON.parse(message.body);
                    setMessages((prev) => [...prev, newMessage]);
                    // rest of the work after success 
                });
            });
        };
        connecWebSocket();

    }, [roomId]);


    // loading messages

    useEffect(() =>{

        if(!roomId){
            toast.error("unable to fetch roomId");
        }
        async function loadMessages(){

            try {

                const messages = await getMessages(roomId);
                console.log(messages);
                setMessages(messages);
                
                
            } catch (error) {
                toast.error("Error occuring in loading messages.")
                throw error;

            }
        }
        loadMessages();
    },[roomId])


    // scroll down

    useEffect(() =>{

        if(chatBoxRef.current){
            chatBoxRef.current.scroll({
                top : chatBoxRef.current.scrollHeight,
                behavior : "smooth"
            });
        }
    },[messages])


    // sending messages 

    const sendMessage = async () => {
        if (stompClient && connected && input.trim()) {
            console.log(input);

            const message = {
                sender: currentUser,
                content: input,
                roomId: roomId,
                messageTime : timeAgo(message.messageTime)
            }

            stompClient.send(`/app/sendMessage/${roomId}`, {}, JSON.stringify(message));
            setInput("");


        }

    }

    // logout

   function handleLogout(){

      stompClient.disconnect();
        setConnected(false);
        setroomId(null);
        setCurrentUser("");
        // toast.success("Successfully disconnected from the server.");
        navigate("/");
    

    }


    return (
        <div className="">
            {/* headerbox */}
            <header className=" flex justify-around fixed w-full h-20 border dark : bg-gray-500  text-white  shadow  py-5 items-center">

                {/* room name container */}
                <div className="">
                    <h1>Room ID : <span>{roomId}</span></h1>
                </div>
                {/* user name container */}
                <div>
                    <h1>User : <span>{currentUser}</span></h1>
                </div>
                {/* leave room button  */}
                <div>
                    <Button onClick={handleLogout} id="LeaveButton" variant="contained" color="error">Leave Room</Button>

                </div>

            </header>
            {/* main content */}

            <main ref={chatBoxRef} className="py-20 border w-2/3 mx-auto bg-slate-600 h-screen overflow-auto text-white">
                {
                    messages.map((message, index) => {
                        // display message in the main content
                        return (
                            <div key={index} className={`flex ${message.sender === currentUser ? "justify-end" : "justify-start"}`}>
                                <div className="my-2  mx-w-xs rounded">
                                    {/* Added 'flex' to parent to help control alignment if needed */}
                                    <div className={`${message.sender === currentUser ? "bg-blue-400" : "bg-green-400"} flex flex-row items-start rounded px-4 py-2 mx-3 my-1 w-fit  gap-2}`}>
                                        <img
                                            className="h-10 w-10 rounded-full flex-shrink-0"
                                            src= {message.sender === currentUser ? "https://api.dicebear.com/9.x/pixel-art/svg?seed=Char" : "https://api.dicebear.com/9.x/pixel-art/svg?seed=Random"}
                                            alt="avatar"
                                        />
                                        <div className="flex flex-col min-w-0">
                                            <p className="text-white font-bold text-lg">{message.sender}</p>
                                            <p className="text-sm break-words">{message.content}</p>
                                            <p className="text-sm break-words">{timeAgo(message.messageTime)}</p>
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

                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type your message here..." className=" border bg-blue-300 dark px-3 py-2 rounded-full w-120 h-full"></input>
                    <button className="bg-purple-500 rounded-full h-10 hover:bg-purple-400">
                        <MdAttachFile size={30} />
                    </button>
                    <button className="bg-green-600 h-10  w-10 flex rounded items-center justify-center hover:bg-green-500">
                        <MdSend onClick={sendMessage} size={30} />
                    </button>
                </div>

            </div>

        </div>

    )
}
export default ChatPage;