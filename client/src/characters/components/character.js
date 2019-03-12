import React, { Component } from 'react'
import {
  Card,
  CardTitle
} from 'react-materialize'

class Character extends Component {
  render () {
    return(
      <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
            title="Card Title"
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
        <p><a href="#">This is a link</a></p>
      </Card>
    )
  }
}

export default Character