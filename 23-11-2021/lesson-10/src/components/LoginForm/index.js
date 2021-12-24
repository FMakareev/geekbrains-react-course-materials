import React from 'react';


export const LoginFormTestIds = {
  submit: 'LoginForm-submit',
  reset: 'LoginForm-reset',
  loginField: 'LoginForm-loginField',
  passwordField: 'LoginForm-passwordField',
}

export const LoginForm = ({setFieldValue, getFieldValue, onReset, onSubmit}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit('test')
      }}
      onReset={(e) => {
        e.preventDefault();
        onReset()
      }}
    >
      <input
        onChange={(event) => {
          setFieldValue('login', event.target.value)
        }}
        value={getFieldValue('login')}
        data-testid={LoginFormTestIds.loginField}
        name="login"
        type="text"
      />
      <br/>
      <input
        onChange={(event) => {
          setFieldValue('password', event.target.value)
        }}
        value={getFieldValue('password')}
        data-testid={LoginFormTestIds.passwordField}
        name="password"
        type="text"
      />
      <br/>
      <button data-testid={LoginFormTestIds.submit} type="submit">
        Login
      </button>
      <button data-testid={LoginFormTestIds.reset} type="reset">
        resetForm
      </button>
    </form>
  );
};
