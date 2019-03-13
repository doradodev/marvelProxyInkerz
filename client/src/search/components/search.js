import React from 'react'
import { Button, Input, Row } from 'react-materialize'
import './/search.css'

function Search (props) {

  return (
    <Row>
      <Input name="search" s={9} label="SEARCH" onChange={props.handleSearchChange} onKeyPress={props.handleKeyPress}/>
      <Button className='Button' s={3} onClick={props.handleSearch}>Search</Button>
    </Row>
  )

}
export default Search
