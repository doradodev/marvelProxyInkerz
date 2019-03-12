function character(result) {
  let characters = []
  result.forEach(character => {
    const img = imageGenerator(character.thumbnail)
    characters.push({
      id: character.id,
      name: character.name,
      description: character.description,
      img: img
    })
  })
  return characters
}

function imageGenerator(thumbnail){
  return thumbnail.path + '/portrait_medium.'+ thumbnail.extension
}

module.exports = {
  character
}