import React, { Component } from 'react'
import Search from '../../search/containers/search'
import API from '../../utils/api'
import { Card, CardTitle, Row, Col, Pagination, Input, Button } from 'react-materialize'

class Home extends Component {

  constructor () {
    super()
    this.state = {
      characters: [],
      search: ''
    }
  }

  onSelect(e){
    console.log('onselect',e)
  }
  handleSearch  = event =>  {
    console.log(this.state.search)
    API.getCharactersByQuery('sp').then( data => {
      this.setState({characters: data})
      })
  }
  handleSearchChange = event => {
    this.setState({search: event.target.value})
  }
  async componentDidMount () {
    this.state.characters = await API.getCharacters(this.state.offset)
    this.setState({
      characters: this.state.characters
    })
  }

  render () {
    return (
      <div>
        <Row>
          <Input  name = "search" s={8} label="Marvel Character" onChange={this.handleSearchChange}/>
          <Button className='red Button' s={3} onClick={this.handleSearch}>Search</Button>
        </Row>
        <Row>
          {this.state.characters.map(character => {
            return (
              <Col key={character.id} s={3}>
                <Card
                  header={<CardTitle className="img-responsive center-align" reveal image={character.img}/>}
                  title={character.name}
                  className="center-align"
                  reveal={<p>{character.description}</p>}>
                </Card>
              </Col>
            )
          })
          }
        </Row>
        <div className="center-align">
          <Pagination/>
        </div>
      </div>
    )
  }
}

export default Home