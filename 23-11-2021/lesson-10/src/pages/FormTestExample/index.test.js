import React from 'react';
import {fireEvent, render, act} from '@testing-library/react';
import {FormTestExample} from "./index";
import {userApi} from "../../api/request/user";
import {LoginFormTestIds} from "../../components/LoginForm";

jest.mock('../../api/request/user.js');


describe('FormTestExample', () => {

  it('корректная авторизация', () => {

    const login = 'example@example.com';
    const password = '12345678';

    const component = render(<FormTestExample/>)

    const loginField = component.queryByTestId(LoginFormTestIds.loginField)
    const passwordField = component.queryByTestId(LoginFormTestIds.passwordField)
    const submitButton = component.queryByTestId(LoginFormTestIds.submit)

    act(() => {
      fireEvent.change(loginField, {
        target: {
          value: login,
        }
      })
      fireEvent.change(passwordField, {
        target: {
          value: password,
        }
      })
    })

    act(() => {
      fireEvent.click(submitButton);
    })

    expect(userApi.login).toHaveBeenCalledWith(login, password);

  });

})
