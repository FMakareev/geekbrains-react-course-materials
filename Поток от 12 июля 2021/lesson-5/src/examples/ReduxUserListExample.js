import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAddUserAction, createRemoveUserAction } from "../store/user";
import { createUser } from "../index";

export const ReduxUserListExample = (props) => {
  // @desc: получить список пользователей из хранилища
  const users = useSelector((state) => state.list);

  // @desc: получить функцию для вызова экшенов
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(createAddUserAction(createUser()));
        }}
      >
        add user
      </button>
      <ul>
        {users.map(({ name, id }) => (
          <li key={id}>
            {name}
            <button
              onClick={() => {
                dispatch(createRemoveUserAction(id));
              }}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
