import React from "react"
import axios from "axios"
import styled from "styled-components"



class createUser extends React.Component{
    state ={
        createUser:[],
    }
   
        
        render(){
        const renderizarPagina=this.props.createUser.map((createUser)=>{
            return <p>{createUser.nome}</p>;
        });
        return (
        <div>
          {renderizarPagina}
          <button>Deletar</button>
        </div>
        );
        
    }
  
}


