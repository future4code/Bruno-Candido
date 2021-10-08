import React from "react";
import styled from "styled-components";
import axios from "axios";
// import CreateUser from "./components/CreateUser";

const url= "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";


export default class App extends React.Component {
  state = {
    inputValue: "",
    inputValueEmail: "",
  
  };

  createUser = () => {
    const body = {
      name: this.state.inputValue,
      email: this.state.inputValueEmail
    };
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "bruno-luan-banu"
          }
        }
      )
      .then((res) => {
        alert("Usuário cadastrado com sucesso!");
        this.setState({ inputValue: "" });
        this.setState({ inputValueEmail: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  onChangeInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  onChangeinputValueEmail = (e) => {
    this.setState({ inputValueEmail: e.target.value });
  };
  render(){

    <createUser usuarios={this.state.createUser}/>

      return(
        <div >
            <div>
             <h1>Labenusers</h1>
              <button onclick={this.renderizaPagina}>Trocar de Página</button>
                </div>
              
             <div>
               <h2>Cadastro</h2>
             <input
            placeholder="Nome"
            value={this.state.inputValue}
            onChange={this.onChangeInputValue}
            />
             <input
            placeholder="email"
            value={this.state.inputValueEmail}
            onChange={this.onChangeinputValueEmail}
            />
           
            
          <button onClick={this.createUser}>Criar</button>



             </div>

          
        </div>
      )
  }
}