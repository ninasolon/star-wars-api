import React, { Component } from 'react'
import Card from './components/Card'
import Button from './components/Button'
import { getPlanet, getBase } from './service/base'
import './App.css'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      base: [],
      planet: [],
      films: [],
      error:'',
    }
  }

  swapiRequest(){

    //requisição de todos os planetas, armazenados no state 'base'
    getBase()
    .then(response => {
      this.setState({
        base: response.data.results,
        error: '',
      })
    })
    .catch(error => {
      this.setState({
        error: error.message,
      })
    })

    //variável recebe número aleatório gerado com a length do array 'base'
    let randomId = Math.floor(Math.random() * this.state.base.length + 1) 

    //requisição de dados de planeta aletatório, armazenados no state 'planet'
    getPlanet(randomId)
    .then(response => {
      this.setState({
        planet: response.data,
        films: response.data.films, //array armazenado no state 'films' para acessar length
        error: '',
      })
    })
    .catch(error => {
      this.setState({
        error: error.message,
      })
    })
  }

  componentDidMount(){
    this.swapiRequest()
  }

  render(){
    const { planet, films, error } = this.state
    return(
      <div className='App'>
        {
          error === '' ?
          <Card
            name={planet.name}
            population={planet.population}
            climate={planet.climate}
            terrain={planet.terrain}
            films={films.length}
          /> :
          <div className='error-message'>
            <h3>Patience you must have, my young padawan</h3>
            <p>Error: {error}</p>
          </div>
        }
      
        <Button click={() => {this.swapiRequest()}}>
          {error === '' ? 'Next' : 'Try again'}
        </Button>
      </div>
    );
  }
}