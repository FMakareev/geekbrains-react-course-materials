import {initialState, playersReducer} from "../reducer";
import {createPlayer} from "../../../entities/Player";
import {createAddPlayer, createRemovePlayer} from "../actions";



describe('playersReducer', () => {

  it('вызов редьюсера без экшена вернет initialState', () => {
    const result = playersReducer();

    expect(result).toEqual(initialState);
  });

  it('пользователь добавляется в конец списка', () => {
    const player = createPlayer('player-1');
    const result = playersReducer(undefined, createAddPlayer(player));

    expect(result).toEqual({
      players: [
        player
      ]
    });
  });

  it('пользователь удаляется из списка', () => {
    const players = Array.from({
      length: 5,
    }).map((_, index) => createPlayer(`player-${index + 1}`))

    const playersResult = Array.from({
      length: 4,
    }).map((_, index) => createPlayer(`player-${index + 1}`))

    const result = playersReducer({
      players,
    }, createRemovePlayer('player-5'));

    expect(result).toEqual({
      players: playersResult
    })
  })

})
