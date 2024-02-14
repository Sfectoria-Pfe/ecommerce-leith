import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Cards extends Component {
    constructor(props){
        super()

    }
  render() {
    return (
       


   
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.imge} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
         {this.props.decription}
          </Card.Text>
          <ListGroup className="list-group-flush">
        <ListGroup.Item>{this.props.price}£</ListGroup.Item>
      </ListGroup>
          <Button variant="primary">See more</Button>
          <Button variant="primary">Add</Button>

        </Card.Body>
      </Card>
    )
  }
}
