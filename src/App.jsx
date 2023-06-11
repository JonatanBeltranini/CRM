import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'; //rotas

//Importar páginas
import Site from "./site/Site";
import Login from "./app/login";

function App(){
    return <BrowserRouter>
    <Routes>
    <Route path='/' element={<Site/>} exact/>
    <Route path='/app' element={<Login/>} exact/>
    </Routes>
    </BrowserRouter> 
  }

  export default App