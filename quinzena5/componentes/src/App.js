import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import bruno from './bruno.jpg';
import download from './download.png';
import download2 from './download2.png';
import CardPequeno from './components/CardPequeno';
import { getDefaultNormalizer } from '@testing-library/dom';
import email from "./email.png"
import endereco from "./endereco.jpg"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={bruno} 
          nome="Bruno" 
          descricao="Oi, eu sou Bruno. Tenho 30 anos e moro em Brasília estou estudando na Labenu para me tornar um
          programador."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={download} 
          nome="Grupo Pão de Açúcar" 
          descricao="Técnico e manutenção de computadores e redes." 
        />
        
        <CardGrande 
          imagem={download2} 
          nome="CTIS" 
          descricao="Administrador de banco de dados do  Ministério da Sáude." 
        />
      </div>

      <div className="page-section-container">
      <CardPequeno
      imagem = {email}
      palavra= "E-mail:"
      email = " brunnoluann@live.com"
      />
      </div>

      <div className="page-section-container">
      <CardPequeno
      imagem = {endereco}
      palavra= "Endereço:"
      email = " Brasília"
      />
      </div>


      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;