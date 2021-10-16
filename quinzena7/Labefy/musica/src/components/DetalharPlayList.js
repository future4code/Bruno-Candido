import React from "react";
import styled from "styled-components";
import axios from "axios"


const ContainerDetalhes = styled.div`
display: flex;
flex-direction: column;
align-items: center;
overflow: auto;
background-image: url(https://www.folhavitoria.com.br/entretenimento/blogs/na-balada/wp-content/uploads/2020/05/M%C3%BAsica-Quarentena-1.jpg);
width:150vh;
height: 98vh;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
h1{
    color:#F7E2FD;
    text-shadow: 1vw 1vw 1vw #000, 0 0 3vw #0000ff, 0 0 3vw #0000ff, 0 0 3vw #0000ff;
}
h2 {
    margin-top: 40px;
    color:#F7E2FD;
    text-shadow: 1vw 1vw 1vw #000, 0 0 3vw #0000ff, 0 0 3vw #0000ff, 0 0 3vw #0000ff;
}
`

const Topzera = styled.button`

    display:flex;
    margin: 15px;
    margin-top: 40px;
    padding: 15px;
    width: 200px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    flex-direction: column;
    border-radius:15px;
    border: 1px solid gray;
    height: 40px;
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
const Imputo = styled.input`
    height: 40px;
    background:transparent;
    border: none;
    border-bottom: 1px solid white;
    justify-content: center;
    text-align: center;
    align-items: center;
    display: flex;
    color:#F7E2FD;
    font-size:20px;
    margin: 15px;
    width: 500px;
    :focus {
      outline: none;
    }

`



class DetalharPlayList extends React.Component {
    state = {
        name: "",
        artist: "",
        url: "",
        listaDeMusica: []
    }

    detalhaPlay = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListSelect.id}/tracks`

        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url,
        }

        axios.post(url, body, {
            headers: {
                authorization: "bruno-luan-banu"
            }


        })
            .then((res) => {
                alert("A música foi adicionada com sucesso!")
                this.setState({ name: "", artist: "", url: "" })
                this.pegarMusicaPlaylist()
            })
            .catch((err) => {
                alert(err.response.data.message)

            })
    }
    onChangeInputName = (e) => {
        this.setState({ name: e.target.value })
    };
    onChangeInputArtista = (e) => {
        this.setState({ artist: e.target.value })
    };
    onChangeInputUrl = (e) => {
        this.setState({ url: e.target.value })
    }

    pegarMusicaPlaylist = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListSelect.id}/tracks`

        axios.get(url, {
            headers: {
                authorization: "bruno-luan-banu"
            }


        })
            .then((res) => {
                this.setState({ listaDeMusica: res.data.result.tracks })
                this.pegarMusicaPlaylist()
            })
            .catch((err) => {
                alert(err.response.data.message)

            })
    }
    componentDidMount() {
        this.pegarMusicaPlaylist()
    }

    render() {
        const retornarMusica = this.state.listaDeMusica.map((musicas) => {
            return (<div key={musicas.id}>
                <p>{musicas.name}</p>
                <p>{musicas.artist}</p>
                <p><audio controls src={musicas.url} /></p>

            </div>)
        })
        return (

            <ContainerDetalhes>
                <Escrito>Musicas</Escrito>

                <Imputo
                    placeholder="Nome da Musica"
                    value={this.state.name}
                    onChange={this.onChangeInputName} />
                <Imputo
                    placeholder="Artista"
                    value={this.state.artist}
                    onChange={this.onChangeInputArtista} />
                <Imputo
                    placeholder="Url"
                    value={this.state.url}
                    onChange={this.onChangeInputUrl} />


                <Topzera onClick={this.detalhaPlay}> Adicionar Música </Topzera>
                <Topzera onClick={this.props.renderizarPaginaVoltar}>Voltar Para Lista </Topzera>
                {retornarMusica}
            </ContainerDetalhes>

        )
    }
}

export default DetalharPlayList;