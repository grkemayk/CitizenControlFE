import { Button } from 'bootstrap';
import React from 'react'
import Card from 'react-bootstrap/Card';

const MyCard = (props) => {
  
  console.log(props.data)
  return (
    <Card style={{ width: '30rem' }} className='citizenCard'>
        <Card.Body>
          <Card.Title>ID: {props.data.id}</Card.Title>
          <Card.Text>
            Name: {props.data.name}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">Children Count: {props.data.childrenCount}</Card.Subtitle>
         
          <Card.Link className='link'>Citizen: {props.data.citizen ? 'Yes' : 'No'}</Card.Link>
          <Card.Link className='link'>Driving License: {props.data.hasDrivingLicense ? 'Yes' : 'No'}</Card.Link>
          {
            props.data.childrenCount > 0 ? 
            <div>
              <br></br>
              <h5>Children List</h5>
            </div> : ''
          }
          {
            props.data.childrenCount > 0 ? props.data.children.map((item) =>
              <div>
                <hr></hr>
                <Card.Link className='link'>Id: {item.id}</Card.Link>
                <Card.Link className='link'>Name: {item.name}</Card.Link>
              </div>
            ) : ''
          }
        </Card.Body>
      </Card>
  )
}
export default MyCard;
