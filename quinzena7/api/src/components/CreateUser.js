import React from "react"
import styled from "styled-components"

const Body = styled.div`
text-align: center;

`


class CreateUser extends React.Component{
        
        render(){

        const listUsuario = this.props.pegarUsuario.map((pegarUsuario)=>{
            return <div>

                <li key={pegarUsuario.id}>{pegarUsuario.name}</li>
                <button onClick = {()=>this.props.deleteUsuario(pegarUsuario.id)}>Delete</button>
            </div>;
        });
        return (
       
            <Body>
               <button onClick={()=>this.props.renderizaInicio}> Mudar de Página</button>
                <div>
                      <h2>Usuário</h2>
                      {listUsuario}

                </div>
            </Body>
        );
        
    }
  
}
export default CreateUser

