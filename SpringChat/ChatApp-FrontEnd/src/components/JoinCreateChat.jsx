import React from "react";
import { Button } from "@mui/material";
import {TextField} from "@mui/material";


const JoinCreateChat = ()=>{

    return (

        <div className="min-h-screen flex items-center justify-center">
            <div className="p-8 w-full flex flex-col gap-5 max-w-md rounded  shadow border dark:shadow-gray-900">
                <div>
                    <img src="" alt="" />
                </div>
                <h1 className="text-2xl font-semibold text-center">
                    Join room / Create Room ...
                </h1>
                {/* name div */}
                <div className="">
                    <label htmlFor="name" className="block font-medium mb-2">
                        Your Name
                    </label>
                    <TextField id="outlined-basic" required  fullWidth type="text"/>
                    {/* <input type="text"  id="name" className="w-full dark:bg-gray-600 px-4 py-2 dark:border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring:blue-500"/> */}
                </div>
                {/* room id div */}
                 <div className="">
                    <label htmlFor="name" className="block font-medium mb-2">
                        Room ID/ New Room ID
                    </label>
                    {/* <input type="text"  id="name" className="w-full dark:bg-gray-600 px-4 py-2 dark:border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring:blue-500"/> */}
                    <TextField id="outlined-basic" required fullWidth type="text"/>
                </div>
                {/* button */}
               <div className="flex justify-center gap-10 cursor:pointer;">
                 <div>
                    <Button variant="contained" color="primary">
                        Join Room
                    </Button>
                </div>
                <div>
                    <Button variant="contained" color="secondary">Create Room</Button>
                </div>
               </div>
            </div>
        </div>
    )
}

export default JoinCreateChat