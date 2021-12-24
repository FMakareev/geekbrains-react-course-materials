import React from 'react'

import {render, fireEvent, act} from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import {LoginForm, LoginFormTestIds} from "./index";


describe('LoginForm', () => {

  it('вызов метода onSubmit по клику на кнопки', () => {
    const onSubmit = jest.fn();
    const getFieldValue = jest.fn();
    const component = render(<LoginForm getFieldValue={getFieldValue} onSubmit={onSubmit}/>)

    act(() => {
      fireEvent.click(component.queryByTestId(LoginFormTestIds.submit));
    })

    expect(onSubmit).toBeCalled();
  });

  it('вызов метода onReset по клику на кнопки', () => {
    const onReset = jest.fn();
    const getFieldValue = jest.fn();
    const component = render(<LoginForm getFieldValue={getFieldValue} onReset={onReset}/>)

    act(() => {
      fireEvent.click(component.queryByTestId(LoginFormTestIds.reset));
    })

    expect(onReset).toBeCalled();
  });

  it('ввод данных в поле Login', () => {
    const loginValue = 'auth';
    const setFieldValue = jest.fn();
    const getFieldValue = jest.fn();
    const component = render(<LoginForm getFieldValue={getFieldValue} setFieldValue={setFieldValue}/>)

    const loginField = component.queryByTestId(LoginFormTestIds.loginField);

    act(() => {
      fireEvent.change(loginField, {
        target: {
          value: loginValue,
        }
      })
    })

    expect(setFieldValue).toHaveBeenCalledWith('login', loginValue);
  })

})
