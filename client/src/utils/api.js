

class Api {
    async getCharacters(limit, offset){
      const query = await fetch('http://localhost:3001/api/characters?limit='+limit+'&offset='+offset);
      const  data  = await query.json();
      return data
    }

  async getCharactersByQuery(search, offset){
    const query = await fetch('http://localhost:3001/api/character/'+search);
    const  data  = await query.json();
    return data
  }
}

export default new Api()