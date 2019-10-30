import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'gatsby'

const PostEn = (props) => (
  <Card className="col-3 pl-0 px-2 pt-2 mx-4 mb-3">
    <div className="row">
      <Card.Img variant="top" src={props.image} className="col-12" style={{height: '10rem'}}/>
    <Card.Body>
        <Card.Title className="mt-2 mx-auto" style={{ height: '3rem', overflow: 'scroll'}}>{props.title}</Card.Title>
        <ul className="actions">
          <li><Link to={props.readMore} className="button">Read More</Link></li>
        </ul>
    </Card.Body>
    </div>
  </Card>

)

export default PostEn