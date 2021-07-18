import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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

  showModalHornedBeast = () => {
    this.props.showModalPropMain(this.props.beast);
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
      <Card className="text-center" bg={this.state.bgColor} text='white' border='light'>
        <Card.Body>
        <Card.Header onClick= {this.changeBackground} as="h2">{this.props.beast.title}</Card.Header>
          <Card.Img              
            onClick={this.showModalHornedBeast} 
            alt={this.props.beast.alt} 
            src={this.props.beast.image_url} 
            title={this.props.beast.title}/>
          <Card.Title></Card.Title>
          <Card.Text>{this.state.numberImageClicked ? this.state.numberImageClicked + ' ❤️' : ''}</Card.Text>
          <Button onClick={this.addOne} variant="danger">Like</Button>
          <Card.Text onClick= {this.changeBackground}>{this.props.beast.description}</Card.Text>
        </Card.Body>
      </Card>      
    )
  }
}

export default HornedBeast;