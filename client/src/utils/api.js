

class Api {
    async getCharacters(search, limit, offset){
      const query = await fetch('http://localhost:3001/api/characters?nameStartsWith='+search+'&limit='+limit+'&offset='+offset);
      const  data  = await query.json();
      return data
    }
}

export default new Api()