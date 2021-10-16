import React from "react";
import axios from "axios"
import styled from "styled-components";

// const InserirUsuario = styled.div`
//    border: 1px solid black;
//    padding: 10px;
//    margin: 10px;
//    width: 300px;
//    display: flex;
//    justify-content: space-between;
//    flex-direction: column;
//    text-align: center;
//  `
const ContainerCriaPlaylist = styled.div`
flex-direction: column;
margin: 0px;
padding: 15px;
flex-grow: 1;
width: 40%;
background-image: url(https://www.folhavitoria.com.br/entretenimento/blogs/na-balada/wp-content/uploads/2020/05/M%C3%BAsica-Quarentena-1.jpg);
width:147vh;
height: 95vh;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
input {
    height: 40px;
    background:transparent;
    border: none;
    border-bottom: 1px solid white;
    justify-content: center;
    text-align: center;
    align-items: center;
    display: flex;
    color:#F7E2FD;
    font-size:35px;
    margin: auto;
    width: 500px;
    :focus {
      outline: none;
    }
}
button {
    display:flex;
    margin: auto;
    margin-top: 40px;
    padding: 15px;
    width: 200px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    flex-direction: column;
    border-radius:15px;
    border: 1px solid gray;
    height: 40px;
    background-image: linear-gradient(to left, #F7E2FD, #1A52AE);
    
}
h1{
    text-shadow: 1vw 1vw 1vw #000, 0 0 3vw #1A52AE, 0 0 3vw #1A52AE, 0 0 3vw #1A52AE;
    color:#F7E2FD;
    font-size: 74px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    
}
`

class CriarPlayList extends React.Component {
  state = {
    nome: "",
  }
  handCriar = (e) => {
    this.setState({ nome: e.target.value })
  }

  fazerPlay = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const body = {
      name: this.state.nome,
      email: this.state.nome
    }

    axios.post(url, body, {
      headers: {
        authorization: "bruno-luan-banu"
      }


    })
      .then((res) => {
        alert("PlayList criada com sucesso!")
        this.setState({ nome: "", })
      })
      .catch((err) => {
        alert(err.response.data.message)

      })
    //  console.log(this.state)
  }

  render() {
    return (
      <ContainerCriaPlaylist>




        <h1>Criar Play List</h1>
        <input placeholder="Nome da Playlist"
          placeholderTextColor="white"
          value={this.state.nome}
          onChange={this.handCriar}

        />
        <button onClick={this.fazerPlay}>Cadastrar</button>
        <button onClick={this.props.irParaLista}>Ir pra Lista</button>

      </ContainerCriaPlaylist>

    )
  }
}

export default CriarPlayList;