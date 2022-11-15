export const selectCharacters = (reduxState) =>
  reduxState.characters.allCharacters;
export const selectScore = (reduxState) => reduxState.characters.points;
