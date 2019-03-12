import React, {Component} from 'react'
import Search from '../../search/containers/search'
import Character from '../../characters/components/character'
import API from '../../utils/api'

class Home extends Component {

  async componentDidMount() {
    const characterList = await API.getCharacters();
    console.log(characterList);
  }

  state = {
    modalVisible: false,
  }
  render(){
    return(
      <div>
        <Search/>
        <Character/>
      </div>
    )
  }
}

export default Home