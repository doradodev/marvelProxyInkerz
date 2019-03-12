

class Api {
    async getCharacters(offset){
      const query = await fetch('http://localhost:3001/api/characters?offset='+offset);
      const  data  = await query.json();
      return data
    }

  async getCharactersByQuery(search, offset){
    const query = await fetch('http://localhost:3001/api/characters?nameStartsWith='+query+'offset='+offset);
    const  data  = await query.json();
    return data
  }
}

export default new Api()