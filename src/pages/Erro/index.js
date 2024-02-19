import React, { useEffect, useState } from 'react';
import "./style.css"
import{ Link } from "react-router-dom";
function Erro(){
    return(
        <main className='container-fluid container-erro d-flex flex-column align-items-center justify-content-center'>
            <h1 className='aviso'>Data Inválida!</h1>
            <p className='texto-aviso'>Parece que você tentou dar um passo além no tempo. Não se preocupe, estamos aqui para trazê-lo de volta ao presente.</p>
            <Link to='/' className='btn botao-volta' role='button'>Clique aqui</Link>
        </main>
    );
}

export default Erro;