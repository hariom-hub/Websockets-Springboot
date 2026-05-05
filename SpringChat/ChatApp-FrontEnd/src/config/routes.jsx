import React from "react";
import App from "../App";
import { Route,Routes } from "react-router";

const AppRoutes = () =>{
    return (

      <Routes>
      <Route path='/' element = {<App/>} />
      <Route path='/chat' element = {<h1>Chat page</h1>} />
      <Route path="/about" element = {<h1>This is the about page</h1>} />
      <Route path="*" element = {<h1>404 Page Not Found</h1>}/>
      </Routes>

    );
};

export default AppRoutes