export const selectCharacters = (reduxState) => {
  const clonedArray = [...reduxState.characters.allCharacters];
  return clonedArray.sort(() => Math.random() - 0.5);
};
export const selectScore = (reduxState) => reduxState.characters.points;
