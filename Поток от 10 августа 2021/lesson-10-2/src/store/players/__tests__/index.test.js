import {initialState, playersReducer} from "../reducer";
import {createPlayer} from "../../../entities/Player";
import {createAddPlayer, createRemovePlayer} from "../actions";




describe('playersReducer', () => {

  it('вызов редьюсера без экшена вернет initialState', () => {

    const result = playersReducer();

    expect(result).toEqual(initialState);
  });

  it('пользователь добавляется в конец списка', () => {

    const result = playersReducer(undefined, createAddPlayer({
      name: `player-1`,
      count: 0
    }));

    expect(result).toEqual({
      players: [
        {
          name: 'player-1',
          count: 0,
        }
      ]
    })
  });

  it('пользователь удаляется из списка', () => {
    const players = Array.from({
      length: 5,
    }).map((_, index) => ({
      name: `player-${index + 1}`,
      count: 0
    }))

    const playersResult = Array.from({
      length: 4,
    }).map((_, index) => ({
      name: `player-${index + 1}`,
      count: 0
    }))

    const result = playersReducer(
      {
        players,
      },
      createRemovePlayer('player-5')
    );

    expect(result).toEqual({
      players: playersResult
    })
  })

})