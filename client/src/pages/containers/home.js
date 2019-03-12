import React, { Component } from 'react'
import './home.css'
import API from '../../utils/api'
import { Card, CardTitle, Row, Col, Pagination, Input, Button, ProgressBar } from 'react-materialize'
import Header from '../../header/component/header'

class Home extends Component {

  constructor () {
    super()
    this.state = {
      characters: [],
      search: '',
      offset: 1,
      limit: 12,
      loader: true
    }
  }

  onSelect(e){
    console.log('onselect',e)
  }
  handleSearch  = event =>  {
    this.setState({
      characters:[],
      loader: true
    })
    this.componentWillReceiveProps();
  }
  handleSearchChange = event => {
    this.setState({search: event.target.value})
  }
  async componentDidMount () {
    this.state.characters = await API.getCharacters(this.state.limit, this.state.offset)
    this.setState({
      characters: this.state.characters,
      loader: false
    })
  }

  async componentWillReceiveProps(){

    this.state.characters = await API.getCharactersByQuery(this.state.search, this.state.offset)
    this.setState({
      characters: this.state.characters,
      loader: false
    })
  }

  render () {
    return (

      <div>
        <Row>
          <Input  name = "search" s={8} label="SEARCH" onChange={this.handleSearchChange}/>
          <Button className='Button' s={3} onClick={this.handleSearch}>Search</Button>
        </Row>
        <Row>
          {this.state.loader ? <ProgressBar className="red"/>:null}
          {this.state.characters.map(character => {
            return (
              <Col key={character.id} m={6}>
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
          {!this.state.loader ? <Pagination/>:null}
        </div>
      </div>
    )
  }
}

export default Home