import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component {
  render(){
    let beastArr = [];
    data.forEach((beast, index) => {
      beastArr.push(
        <HornedBeast
          key = {index}
          title ={beast.title}
          imageUrl = {beast.image_url}
          description = {beast.description} 
        />
      )
    })    
    return(
    <main>
      {beastArr}      
    </main>
    )
  }
}

export default Main;