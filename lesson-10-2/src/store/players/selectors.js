
export const getPlayersSelector = (state) => state.players?.players || [];

export const getPlayerByNameSelector = (name) => (state) => getPlayersSelector(state).find((player) => player.name === name);
