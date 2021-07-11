import React from 'react';

class HornedBeast extends React.Component {
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        <img alt={this.props.alt} src={this.props.imageUrl} title={this.props.title}/>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;