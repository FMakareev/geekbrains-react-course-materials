// import dependencies
import React from 'react'

import {render, fireEvent} from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import {LoginForm, LoginFormTestIds} from "./index";


describe('LoginForm', () => {

  it('вызов методов onSubmit и onReset по клику на кнопки', () => {
    const onSubmit = jest.fn();
    const onReset = jest.fn();


    const component = render(<LoginForm onReset={onReset} onSubmit={onSubmit} />)

    fireEvent.click(component.getByTestId(LoginFormTestIds.submit))

    fireEvent.click(component.getByTestId(LoginFormTestIds.reset))

    expect(onSubmit).toBeCalled()
    expect(onReset).toBeCalled()

  });

  it('ввод данных в поле Login', () => {
    const data = 'example'
    const setFieldValue = jest.fn();

    const component = render(<LoginForm setFieldValue={setFieldValue} />)

    const field = component.getByTestId(LoginFormTestIds.loginField);

    fireEvent.change(field, {target: {value: data}});

    expect(setFieldValue).toHaveBeenLastCalledWith('login', data);
  })

})