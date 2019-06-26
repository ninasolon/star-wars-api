import React, { Component } from 'react'
import '../assets/card.css'

export default class Card extends Component{
  render(){
    return(
      <div className='card--container'>
        <h1 className='card--title'>{this.props.name}</h1>
        <hr />
        <div className='card--info'>
          <ul>
            <li><span>Population:</span> {this.props.population}</li>
            <li><span>Climate:</span> {this.props.climate}</li>
            <li><span>Terrain:</span> {this.props.terrain}</li>
          </ul>
          <p className='card--info__featured'>Featured in {this.props.films} film(s)</p>
        </div>
      </div>
    )
  }
}