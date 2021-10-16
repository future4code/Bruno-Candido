import React from "react";
import styled from "styled-components";
import axios from "axios";
import createUser from "./components/createUser";

const Body = styled.div`
text-align: center;

`


 class App extends React.Component {
  state = {
    inputValue: "",
    inputValueEmail: "",
    pegarUsuario:[],
    pagina: false,
  
  };
  componentDidMount = () =>{
    this.pegarUsuario();
  };

  
  criarUsuario = () => {
    const body = {
      name: this.state.inputValue,
      email: this.state.inputValueEmail
    };
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "bruno-luan-banu"
          }
        }
      ).then((res) => {
        alert("Usuário cadastrado com sucesso!");
        this.setState({ inputValue: "" });
        this.setState({ inputValueEmail: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  pegarUsuario = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "bruno-luan-banu"
      }
    }).then((resposta) => {
      this.setState({ pegarUsuario: resposta.data })
    }).catch((error) => {
      console.log(error.message)
    });
  };


  deleteUsuario = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: "bruno-luan-banu"
      }
    }).then((resposta) => {
      this.pegarUsuario();
      console.log(resposta);
  }).catch((error) => {
    console.log(error.message);
  })
  };

  onChangeInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  onChangeInputValueEmail = (e) => {
    this.setState({ inputValueEmail: e.target.value });
  };

  renderizaPagina =()=>{
    this.setState({pagina:true})
  };

  renderizaInicio =()=>{
    this.setState({pagina:false})
  };

  render(){

    if(this.state.pagina) {
      return (
        <createUser 
        pegarUsuario={this.state.pegarUsuario}
        renderizaInicio={this.renderizaInicio}
        deleteUsuario={this.deleteUsuario}
        />
      )
    }

      return(
        <Body>

       
        <div >
            <div>
             <h1>LabenUsers</h1>
              <button onClick={this.renderizaPagina}>Trocar de Página</button>
                </div>
              
             <div>
               <h2>Cadastro</h2>
             <input
            placeholder="Informe seu Nome"
            value={this.state.inputValue}
            onChange={this.onChangeInputValue}
            />
             <input
            placeholder="Informe seu e-mail"
            value={this.state.inputValueEmail}
            onChange={this.onChangeInputValueEmail}
            />
           
            
          <button onClick={this.criarUsuario}>Criar</button>



             </div>
            
          
        </div>

        </Body>
      )
  }
}

export default App