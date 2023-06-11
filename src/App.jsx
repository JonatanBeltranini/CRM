import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'; //rotas

//Importar páginas
import Site from "./site/Site";
import Login from "./app/Login/login";
import NovaConta from "./app/NovaConta/novaconta";
import ResetSenha from "./app/ResetSenha/resetsenha";
import Home from "./app/Home/home";
import NovoCliente from "./app/NovoClientes/novocliente";

function App(){
    return <BrowserRouter>
    <Routes>
    <Route path='/' element={<Site/>} exact/>
    <Route path='/app' element={<Login/>} exact/>
    <Route path='/app/novaconta' element={<NovaConta/>} exact/>
    <Route path='/app/resetsenha' element={<ResetSenha/>} exact/>
    <Route path='/app/home' element={<Home/>} exact/>
    <Route path='/app/novocliente' element={<NovoCliente/>} exact/>
    </Routes>
    </BrowserRouter> 
  }

  export default App