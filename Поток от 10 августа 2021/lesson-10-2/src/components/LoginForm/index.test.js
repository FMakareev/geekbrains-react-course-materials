import React from 'react'

import {render, fireEvent, act} from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import {LoginForm, LoginFormTestIds} from "./index";


describe('LoginForm', () => {

  it('вызов метода onSubmit по клику на кнопки', () => {

    const onSubmit = jest.fn();
    const onReset = jest.fn();
    const setFieldValue = jest.fn();

    const component = render(<LoginForm onReset={onReset} onSubmit={onSubmit} setFieldValue={setFieldValue}/>)

    const button = component.queryByTestId(LoginFormTestIds.submit);

    act(() => {
      fireEvent.click(button);
    })

    expect(onSubmit).toBeCalled();
  });

  it('вызов метода onReset по клику на кнопки', () => {

    const onSubmit = jest.fn();
    const onReset = jest.fn();
    const setFieldValue = jest.fn();

    const component = render(<LoginForm onReset={onReset} onSubmit={onSubmit} setFieldValue={setFieldValue}/>)

    const button = component.queryByTestId(LoginFormTestIds.reset);

    act(() => {
      fireEvent.click(button);
    })

    expect(onReset).toBeCalled();
  });

  it('ввод данных в поле Login', () => {

    const login = 'test@login.com';

    const onSubmit = jest.fn();
    const onReset = jest.fn();
    const setFieldValue = jest.fn();

    const component = render(<LoginForm onReset={onReset} onSubmit={onSubmit} setFieldValue={setFieldValue}/>)

    const field = component.queryByTestId(LoginFormTestIds.loginField);

    act(() => {
      fireEvent.change(field, {
        target: {
          value: login,
        },
      })
    })

    expect(setFieldValue).toHaveBeenLastCalledWith('login', login)

  })

})