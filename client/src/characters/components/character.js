import React from 'react'
import {
  Card,
  CardTitle,
  Col
} from 'react-materialize'

function Character (props) {
    return(
      <Col m={6}>
        <Card
          header={<CardTitle className="img-responsive center-align" reveal image={props.img}/>}
          title={props.name}
          className="center-align"
          reveal={<p>{props.description}</p>}>
        </Card>
      </Col>
    )
}

export default Character