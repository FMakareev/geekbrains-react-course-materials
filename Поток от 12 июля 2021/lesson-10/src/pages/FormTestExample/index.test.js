import React from 'react';
import {fireEvent, render, act} from '@testing-library/react';
import {FormTestExample} from "./index";
import {userApi} from "../../api";
import {LoginFormTestIds} from "../../components/LoginForm";

jest.mock('../../api/request/user.js')


describe('FormTestExample', () => {

  it('корректная авторизация', () => {

    const login = 'example@example.com';
    const password = '12345678';

    const {getByTestId} = render(<FormTestExample/>)


    const loginField = getByTestId(LoginFormTestIds.loginField);
    act(() => {
      fireEvent.change(loginField, {target: {value: login}});
    })

    const passwordField = getByTestId(LoginFormTestIds.passwordField);
    act(() => {
      fireEvent.change(passwordField, {target: {value: password}});
    })

    act(() => {
      fireEvent.click(getByTestId(LoginFormTestIds.submit));
    })


    expect(userApi.login).toHaveBeenLastCalledWith(login, password);

  });

})