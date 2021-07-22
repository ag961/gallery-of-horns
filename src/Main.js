import React from 'react';
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    let filteredByHorn;
    if (e.target.value === 'all') {
      filteredByHorn = this.props.data;
    } else {
      filteredByHorn = this.props.data.filter(beast => beast.horns === Number(e.target.value));
    }
    this.setState({
      data: filteredByHorn
    })
  }

  render() {
    let beastArr = this.state.data.map((beast, index) => (
      <HornedBeast
        key={index}
        showModalPropMain={this.props.showModalPropApp}
        beast={beast}
      />)
    )

    return (
      <main>
        <Form onChange={this.handleChange}>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Form.Label>Sort by number of horns</Form.Label>
              <Form.Control as="select" custom>
                <option value='all'>Show all</option>
                <option value="1">beasts with 1 horn</option>
                <option value="2">beasts with 2 horns</option>
                <option value="3">beasts with 3 horns</option>
                <option value="100">beasts with 100</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </Form>
        <CardColumns>
          {beastArr}
        </CardColumns>
      </main>
    )
  }
}

export default Main;