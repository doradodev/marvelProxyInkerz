import React, { Component } from 'react'
import './home.css'
import API from '../../utils/api'
import { Button, Card, CardTitle, Col, Input, Pagination, ProgressBar, Row } from 'react-materialize'

class Home extends Component {

  constructor () {
    super()
    this.state = {
      characters: [],
      search: '',
      offset: 0,
      limit: 12,
      loader: true,
      currentPage:1,
      totalPages: 0
    }
  }

  handlePagination = event => {
    let offset = (event) * this.state.limit;
    if(event === 1){
      offset = 0;
    }
    this.setState({
      characters:[],
      loader: true,
      currentPage: event
    })
    this.callToApi(offset);
  }
  handleSearch  = event =>  {
    this.setState({
      characters:[],
      loader: true,
      currentPage: 1
    })
    this.callToApi(0);
  }
  handleSearchChange = event => {
    this.setState({search: event.target.value})
  }

  handleKeyPress = event => {
    if(event.key === 'Enter') {
      this.setState({
        characters: [],
        loader: true,
        currentPage: 1
      })
      this.callToApi(0);
    }
  }
  async componentDidMount () {
    this.state.characters = await API.getCharacters(this.state.search, this.state.limit, this.state.offset)
    const total =  Math.ceil(this.state.characters.total / this.state.characters.limit);
    this.setState({
      characters: this.state.characters.result,
      loader: false,
      totalPages: total
    })
  }

  async callToApi(offset){
    this.state.characters = await API.getCharacters(this.state.search, this.state.limit, offset)
    const total =  Math.ceil(this.state.characters.total / this.state.characters.limit);
    this.setState({
      characters: this.state.characters.result,
      loader: false,
      totalPages: total
    })
  }

  render () {
    return (

      <div>
        <Row>
          <Input  name = "search" s={9} label="SEARCH" onChange={this.handleSearchChange} onKeyPress={this.handleKeyPress}/>
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
          {!this.state.loader ? <Pagination activePage={this.state.currentPage} maxButtons={10} items={this.state.totalPages} onSelect={this.handlePagination}/>:null}
        </div>
      </div>
    )
  }
}

export default Home