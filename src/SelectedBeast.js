import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
     
  render() {
    return (
      <Modal show={this.props.modalVisible} onHide={this.props.closeModalProp}>
        <Modal.Header closeButton>
          <h2>{this.props.beast.title}</h2>
        </Modal.Header>
        <img
          alt={this.props.beast.alt}
          src={this.props.beast.image_url}
          title={this.props.beast.title} 
        />
        <Modal.Body>{this.props.beast.description}</Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast;
