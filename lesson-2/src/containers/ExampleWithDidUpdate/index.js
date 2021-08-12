import React from 'react';
import {useListState} from "../../hooks/useListState";
import {useToggle} from "../../hooks/useToggle";
import {useDidUpdate} from "../../hooks/useDidUpdate";


const createUser = (name, id) => ({
  name,
  id
})


export const ExampleWithDidUpdate = (props) => {
  const [state, {append, prepend, clear, remove}] = useListState();
  const [toggle, {onToggle}] = useToggle();


  useDidUpdate(() => {
    console.log(state.length);
  })

  useDidUpdate(() => {
    console.log(state);
  }, [state.length])
  return (
    <div>

      <button onClick={onToggle}>
        onToggle {toggle}
      </button>

      <div>
        <button onClick={clear}>
          clear
        </button>

        <button
          onClick={() => {
            remove(0, 2)
          }}
        >
          remove
        </button>

        <button
          onClick={() => {
            append(createUser('user', Date.now()));
          }}
        >
          append
        </button>

        <button onClick={() => {
          append(createUser('user', Date.now()), createUser('user', Date.now()), createUser('user', Date.now()));
        }}>
          multiply append
        </button>

        <button onClick={() => {
          prepend(createUser('user', Date.now()));
        }}>
          prepend
        </button>

        <button onClick={() => {
          prepend(createUser('user', Date.now()), createUser('user', Date.now()), createUser('user', Date.now()));
        }}>
          multiply prepend
        </button>
      </div>

      <ul>

        {
          state.map(({name, id}) => <li>
            <h3>
              name: {name}
            </h3>
            <p>
              id: {id}
            </p>
          </li>)
        }
      </ul>
    </div>
  );
};