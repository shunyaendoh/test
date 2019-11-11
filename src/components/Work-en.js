import React from 'react'
import { Card } from 'react-bootstrap'

const WorkEn = (props) => (
  <Card className="col-11 col-sm-5 pl-0 px-2 pt-2 mx-sm-4 mb-3 ml-4">
    <div className="row">
    <a href={props.link}>
      <Card.Img variant="top" src={props.image} className="col-12" style={{height: '10rem', width: '100%'}}/>
    </a>
      <Card.Body>
        <Card.Title className="mt-2 ml-2" style={{ height: '2rem'}}>{props.title}</Card.Title>
    </Card.Body>
    </div>
  </Card>
)

export default WorkEn