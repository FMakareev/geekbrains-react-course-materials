import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {profileToggleActive} from "../../store/profile/actions";


export const Homework = () => {
  const dispatch = useDispatch();

  const active = useSelector((state) => {
    return state.active;
  });

  return (
    <div>
      <input
        type="checkbox"
        value={active}
        onChange={() => {
          dispatch(profileToggleActive())
        }}
      />
    </div>
  );
};
