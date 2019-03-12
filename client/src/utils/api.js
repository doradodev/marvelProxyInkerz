

class Api {
    async getCharacters(){
      const query = await fetch('/api/characters');
      const  data  = await query.json();
      console.log('data:::', data )
      return data.data
    }
}

export default new Api()