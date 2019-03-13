import React, { Component } from 'react'
import './home.css'
import API from '../../utils/api'
import { Pagination, ProgressBar, Row } from 'react-materialize'
import Search from '../../search/components/search'
import Character from '../../characters/components/character'

class Home extends Component {

  constructor () {
    super()
    this.state = {
      characters: [],
      search: '',
      offset: 0,
      limit: 12,
      loader: true,
      currentPage: 1,
      totalPages: 0
    }
  }

  async componentDidMount () {
    await this.callToApi(0)
  }

  handlePagination = event => {
    let offset = (event) * this.state.limit
    if (event === 1) {
      offset = 0
    }
    this.setState({
      characters: [],
      loader: true,
      currentPage: event
    })
    this.callToApi(offset)
  }
  handleSearch = event => {
    this.setState({
      characters: [],
      loader: true,
      currentPage: 1
    })
    this.callToApi(0)
  }
  handleSearchChange = event => {
    this.setState({search: event.target.value})
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.setState({
        characters: [],
        loader: true,
        currentPage: 1
      })
      this.callToApi(0)
    }
  }

  async callToApi (offset) {
    this.state.characters = await API.getCharacters(this.state.search, this.state.limit, offset)
    const total = Math.ceil(this.state.characters.total / this.state.characters.limit)
    this.setState({
      characters: this.state.characters.result,
      loader: false,
      totalPages: total
    })
  }

  render () {
    return (

      <div>
        <Search handleSearch={this.handleSearch} handleSearchChange={this.handleSearchChange}
                handleKeyPress={this.handleKeyPress}/>
        <Row>
          {this.state.loader ? <ProgressBar className="red"/> : null}
          {this.state.characters.map(character => <Character key={character.id} {...character}/>)}
        </Row>
        <div className="center-align">
          {!this.state.loader ? <Pagination activePage={this.state.currentPage} maxButtons={10}
                                            items={this.state.totalPages} onSelect={this.handlePagination}/> : null}
        </div>
      </div>
    )
  }
}

export default Home