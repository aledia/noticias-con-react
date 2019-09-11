import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";


class App extends Component {
  state = {
    noticias: []
  };
  componentDidMount() {
    this.consultarNoticias();
  }
  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b400e4dd619d4916b1367d6d196914de`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    });
  };

  render() {
    return (
    <Fragment>
        <Header
          titulo='Noticias React API'
        />
        <div className="container white contenedor-noticias">
          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>
    </Fragment>
    )
  }
}

export default App;
