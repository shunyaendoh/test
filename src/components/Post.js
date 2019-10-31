import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'gatsby'

const Post = (props) => (
  <Card className="col-7 col-sm-3 pl-0 px-2 pt-2 mx-sm-4 mb-3 mx-auto">
    <div className="row">
      <Card.Img variant="top" src={props.image} className="col-12" style={{height: '10rem'}}/>
    <Card.Body>
        <Card.Title className="mt-2 mx-auto" style={{ height: '3rem', overflow: 'scroll'}}>{props.title}</Card.Title>
        <ul className="actions">
          <li><Link to={props.readMore} className="button">詳細</Link></li>
        </ul>
    </Card.Body>
    </div>
  </Card>

)

export default Post