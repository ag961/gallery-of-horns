import React from 'react';
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {

  render(){    
    let beastArr = this.props.data.map((beast, index) => (
      <HornedBeast
        key={index}        
        showModalPropMain={this.props.showModalPropApp}
        beast={beast}
      />)
      )    
      
    return(
    <main>
      <CardColumns>
        {beastArr}    
      </CardColumns>
    </main>
    )
  }
}

export default Main;