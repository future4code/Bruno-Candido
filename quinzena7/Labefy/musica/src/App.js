import React from 'react';
import CriarPlayList from './components/CriarPlayList';
import ListaDePlayList from './components/ListaDePlayList';
import styled from 'styled-components';




class App extends React.Component {
  state = {
    telaAtual: "criar",
  };

  onChangeTela = () => {
    switch (this.state.telaAtual) {
      case "criar":
        return <CriarPlayList irParaLista={this.irParaLista} />
      case "lista":
        return <ListaDePlayList irParaCriar={this.irParaCriar} />
      default:
        return <div>Tocar musica</div>


    }
  }

  irParaCriar = () => {
    this.setState({ telaAtual: "criar" })
  }

  irParaLista = () => {
    this.setState({ telaAtual: "lista" })
  }


  render() {
    return (
      <div>
        {this.onChangeTela()}

      </div>

    )
  }
}

export default App;
