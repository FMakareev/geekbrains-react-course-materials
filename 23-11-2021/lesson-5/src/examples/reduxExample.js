import {useDispatch, useSelector} from "react-redux";
import {ADD_PLAYER, NEXT_PLAYER, REMOVE_PLAYER} from "../store/players/actions";


export const ReduxExample = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players)
  const currentPlayer = useSelector((state) => state.currentPlayer)

  return <div>
    <h1>
      reduxExample
    </h1>

    <h3>
      currentPlayer: {currentPlayer}
    </h3>

    <button onClick={() => {
      dispatch({
        type: NEXT_PLAYER,
      })
    }}>
      next player
    </button>
    <button onClick={() => {
      dispatch({
        type: ADD_PLAYER,
        payload: Date.now(),
      })
    }}>
      add player
    </button>

    <ul>
      {
        players.map((item) => <li key={item}>
          {item}
          <button
            onClick={() => {
              dispatch({
                type: REMOVE_PLAYER,
                payload: item,
              })
            }}
          >
            -
          </button>
        </li>)
      }
    </ul>

  </div>
}
