import React from 'react';
import { Link } from 'react-router-dom';
import BadgesList from '../components/BadgesList'
import confLogo from '../images/badge-header.svg';
import './styles/Badges.css';

class Badges extends React.Component {
  constructor(props){
    super(props)
    // fijamos el constructor con el estado.
    // El nextPage empieza en 1 e ira aumentando.
    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        results: [],
      }
    };
  }
  componentDidMount(){
    // Al montarse el componente vamos a llamar a la API
    this.fetchCharacters()
  }
  fetchCharacters = async () => {
    this.setState({loading: true, error: null})
    // ocupamos el primer state para cargar el loading.
    try {
      // Try para tratar de obtener los datos.
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await response.json();
      this.setState({
        // Si se pueden traer los datos, entonces fijamos un nuevo estado
        // quitamos el loading.
        loading: false,
        data:{
          info: data.info,
          // results tiene los resultados concatenados de 
          // this.state.data.results y se concatenara con data.results que es
          // nuevo bloque de datos
          results: [].concat(
            this.state.data.results, data.results
          )
        },
        // al terminar agregamos una pagina a llamar a la API
        nextPage: this.state.nextPage + 1
      });   
    } catch(error) {
      this.setState({
        loading: false,
        error: error
      })
    };
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps: prevProps, prevState: prevState
    });
    console.log({
      props: this.props, state: this.state
    });
  };
  componentWillUnmount(){
    console.log('6. componentWillUnmount()');
    clearTimeout(this.timeoutId);
  };
  render() {
    if(this.state.error){
      return `Error: ${this.state.error.message}`;
    }
    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img 
                className="Badges_conf-logo"
                alt='logo'
                src={confLogo}
                />
            </div>
          </div>
        </div>
        <div className='Badge__container'>
          <div className='Badges_buttons'>
            <Link to='/badges/new' className='btn btn-primary'>
              New badge
            </Link>
          </div>
          {this.state.loading && (
            <div className='loading'>
              <p>Esperando</p>
            </div>
          )}
          <div className='Badges__list'>
            <div className='Badges__container'>
              <BadgesList badges={this.state.data.results} />
            </div>
          </div>
          {!this.state.loading && (
            // Como no queremos que le pase el evento, lo colocamos como funcion anonima.
            <button onClick={() => this.fetchCharacters()}>Load More</button>
          )}
        </div>
      </div>
    )
  }
};

export default Badges;