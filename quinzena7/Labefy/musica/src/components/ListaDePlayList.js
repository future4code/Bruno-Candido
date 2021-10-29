import React from "react"
import axios from "axios"
import styled from "styled-components"
import DetalharPlayList from "./DetalharPlayList"


const CardMusica = styled.div`
  display: inline-block;
  display: flex;
  border: 0px solid black;
  align-items: center;
  width: 800px;
  margin-bottom: 20px;
  padding-left: 10px;
  justify-content: space-evenly;
  background-image: linear-gradient(to left, #0000ff, #F7E2FD, #0000ff);
  height: 80px;
  font-size: 25px;
  color: black; 
  border-radius:15px;
  
 
  `
const Topzera = styled.button`
    margin-left: 65px;
    border: 2px solid gray;
    border-radius:15px;
    height: 35px;
    background-color: black;
    color: #F7E2FD;
    width: 100px;
`
const Topone = styled.button`
    display:flex;
    margin: 15px;
    margin-top: 40px;
    padding: 15px;
    width: 100px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    flex-direction: column;
    border-radius:15px;
    border: 0px solid gray;
    height: 35px;
    background-image: linear-gradient(to left, #F7E2FD, #0000ff);
    
 

`
const Escrito = styled.h1`
    text-shadow: 1vw 1vw 1vw #000, 0 0 3vw #0000ff, 0 0 3vw #0000ff, 0 0 3vw #0000ff;
    color:#F7E2FD;
    font-size: 74px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;

`

const Central = styled.div`
display: flex;
text-align: center;
flex-direction: column;
border: 10px solid white;
border-radius:15px;
background-image: url(https://elegirhoy.com/uploads/fichas-eventos-imagenes/music98b0ccb4.jpg) ;
background-repeat: no-repeat;
position: relative ;
background-position: center,center;
height: 97vh;
width: 98vw;
padding: 5px;



`




class ListaDePlayList extends React.Component {
  state = {
    playList: [],
    paginaDetalhe: false,
    playListSelect: ""

  }
  pegarUsuario = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    axios.get(url, {
      headers: {
        Authorization: "bruno-luan-banu"
      }

    })
      .then((res) => {
        this.setState({ playList: res.data.result.list })
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente!")
      })
  }
  componentDidMount() {
    this.pegarUsuario()
  }


  deletarUsuario = (id) => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "bruno-luan-banu"
      }

    })
      .then((res) => {
        alert("Usuario deletado com sucesso")
        this.pegarUsuario()
      })
      .catch((err) => {
        alert("Ocorreu um erro tente novamente")
      })
  }

  renderizaPaginaDetalhe = (playboy) => {
    this.setState({ paginaDetalhe: true, playListSelect: playboy })
  };

  renderizarPaginaVoltar = () => {
    this.setState({ paginaDetalhe: false })
  };

  render() {

    if (this.state.paginaDetalhe) {
      return (
        <DetalharPlayList
          renderizarPaginaVoltar={this.renderizarPaginaVoltar}
          playListSelect={this.state.playListSelect}
        />

      );
    }
    const listaUsuarios = this.state.playList.map((playlist) => {
      return (
        <CardMusica key={playlist.id}>
          {playlist.name}
          <Topzera onClick={() => this.deletarUsuario(playlist.id)}> Deletar </Topzera>
          <Topzera onClick={() => this.renderizaPaginaDetalhe(playlist)}> Mostar Mais </Topzera>

        </CardMusica>)


    })
    return (
      <Central>


        <Escrito>Listas</Escrito>
        {listaUsuarios}
        <Topone onClick={this.props.irParaCriar}>Inicio</Topone>
      </Central>

    )
  }
}

export default ListaDePlayList;