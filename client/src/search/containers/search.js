import React, { Component } from 'react'
import {
  Input,
  Row,
  Button
} from 'react-materialize'
import '../containers/search.css'


class Search extends Component {
  render () {
    return(
      <Row>
        <Input  s={8} label="Marvel Character" />
        <Button className='red Button' s={3} >Search</Button>
      </Row>
    )
  }
}

export default Search
