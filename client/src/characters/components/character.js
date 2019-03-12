import React from 'react'
import {
  Card,
  CardTitle
} from 'react-materialize'

function Character (props) {
    return(
      <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
            title={props.name}
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
      </Card>
    )
}

export default Character