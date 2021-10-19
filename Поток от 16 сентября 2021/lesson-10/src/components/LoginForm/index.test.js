import React from 'react'

import {render, fireEvent, act} from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import {LoginForm, LoginFormTestIds} from "./index";


describe('LoginForm', () => {

  it('вызов метода onSubmit по клику на кнопки', () => {
    const onSubmit = jest.fn();

    const component = render(<LoginForm onSubmit={onSubmit}/>);

    const submitButton = component.queryByTestId(LoginFormTestIds.submit);

    act(() =>{

      fireEvent.click(submitButton)

    })

    expect(onSubmit).toBeCalled();
    expect(onSubmit).toHaveBeenCalledWith('test');
  });

  it('вызов метода onReset по клику на кнопки', () => {

  });

  it('ввод данных в поле Login', () => {

    const setFieldValue = jest.fn();
    const value = 'user1';

    const component = render(<LoginForm setFieldValue={setFieldValue} />);

    const loginField = component.queryByTestId(LoginFormTestIds.loginField);

    act(() => {
      fireEvent.change(loginField, {
        target: {
          value
        }
      })
    })

    expect(setFieldValue).toHaveBeenCalledWith('login', value);

  })

})
