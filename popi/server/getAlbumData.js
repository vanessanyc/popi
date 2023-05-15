export const getAlbumData = () => {
  return fetch('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=c2b279f1bbfca29d3c01815222dafcf9&artist=Cher&album=Believe&format=json')
    .then(res => res.json())
    .then(data => data);
}

export const drawCardFromDeck = (deckId, drawCount=1) => {
  if (!deckId) {
    // If no deck ID, can't make any API calls.
    return;
  }

  return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${drawCount}`)
    .then(res => res.json())
    .then(data => data)
}