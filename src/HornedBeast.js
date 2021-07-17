import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';

class HornedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      numberImageClicked: 0,
      bgColor: 'success',
    }
  }

  addOne = () => {
    this.setState({
      numberImageClicked: this.state.numberImageClicked + 1,
    })

  }

  changeBackground = () => {
    if (this.state.bgColor === 'success'){
      this.setState({
        bgColor: 'info',
      });
    } else {
      this.setState({
        bgColor: 'success',
      })
    }
  }

  render(){
    return(
      <CardColumns>
        <Card className="text-center" bg={this.state.bgColor} text='white' border='light'>
          <Card.Body>
          <Card.Header onClick= {this.changeBackground} as="h2">{this.props.title}</Card.Header>
            <Card.Img              
              onClick = {this.addOne} 
              alt={this.props.alt} 
              src={this.props.imageUrl} 
              title={this.props.title}/>
            <Card.Title></Card.Title>
            <Card.Text>{this.state.numberImageClicked ? this.state.numberImageClicked + ' ❤️' : ''}</Card.Text>
            <Card.Text onClick= {this.changeBackground}>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    )
  }
}

export default HornedBeast;