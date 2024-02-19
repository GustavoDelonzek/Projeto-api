import{ Link, redirect, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import "./estilo.css"

import stars from "../../assets/image/undraw_outer_space_re_u9vd.svg"

function Home(){
    const [apodData, setApodData] = useState(null);
  const [dataEscolhida, setDataEscolhida] = useState(dataAtual());
  const API_KEY = '6hbSF0dO6LHta3b0ghWtGepdEU9v7CriQwOvQQ52'
    const navigate = useNavigate();
  useEffect(() => {
    buscarDados();
  }, []);

  const buscarDados = () => {
    const apodApi = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dataEscolhida}`;

    fetch(apodApi)
      .then((r) => r.json())
      .then((data) => {
        setApodData(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  };



  const mudaData = (e) => {
    setDataEscolhida(e.target.value);
  };

  function dataAtual(){
    const data = new Date();

    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0'); 
    const dia = String(data.getDate()).padStart(2, '0'); 

    return  `${ano}-${mes}-${dia}`;
  }
 

  return (
    <main  className="d-flex flex-column justify-content-center">

      <section className="introducao d-flex p-5">
        <div className="col-lg-5 d-flex justify-content-center align-items-center texto-introducao">
            <div className="p-2 d-flex flex-column align-items-center justify-content-center">
                <h2 className="titulo-introducao">Bem-vindo ao APOD da NASA!</h2>
                <p className="texto-introducao">O APOD (Astronomy Picture of the Day) oferece uma visão cativante do cosmos todos os dias. Cada imagem é acompanhada por uma breve explicação escrita por astrônomos profissionais, proporcionando uma experiência educativa e inspiradora. Explore o universo conosco e descubra sua beleza infinita!</p>
            </div>
        </div>
        <div className="col-lg-7 text-center p-2 imagem-introducao">
                <img src={stars} className="imagem-astronomica"></img>
        </div>
        
      </section>


      <section className=" d-flex justify-content-center escolha-data bg-nuvem pt-5 data">
        <article className="d-flex flex-column align-items-center justify-content-center">
          <div>
          <p className='data-texto'>Escolha uma data:</p>
          </div>
          <div className="d-flex data-escolha">
            <input type='date' id='dataEscolhida'  onChange={mudaData} value={dataEscolhida}></input>
            <button className="btn botao-data " onClick={buscarDados}>Confirmar</button>       
          </div>  
        </article>
      </section>

      <section className="card-limite bg-nuvem p-5">
        <article className="d-flex flex-column align-items-center justify-content-center card-limite">
          {apodData && (
            <div className=' p-4 m-3 card' >
          {apodData.media_type === 'image' ? (
            <div className="imagem" style={{backgroundImage: `url(${apodData && apodData.url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
          ) : apodData.media_type === 'video' ? (
            <iframe src={apodData.url} height={'360px'} width={'100%'} allowFullScreen  />
          ) : (
            navigate('/erro')
          )}
          <div className='card-body'>
            <h5 className="card-title text-center">{apodData.title}</h5>
            <p className="card-text">{apodData.explanation}</p>
            <p className='card-text'>{apodData.date}</p>
          </div>
        </div>
      )}
        </article>
      </section>
    </main>
  );
}

export default Home;