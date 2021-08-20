import React, { Component } from 'react';
import { from } from 'responselike';
import Button from './component/Button';
import data from './data.json'
import Beasts from './component/Beasts';

export class App extends Component {
  render() {
    return (
      <div>
        <h1 style ={{color :'#FFE4C4' , background : "#6495ED" , textAlign: 'center'}}>Horened Beasts Gallery  </h1>
        
        {data.map(item=>{
          return(
            <Beasts image_url = {item.image_url} title ={item.title} description ={item.description}></Beasts>
          )
        })}
         
      
      </div>
    )
  }
}

export default App
