import React from 'react';


export const LoginFormTestIds = {
  submit: 'LoginForm-submit',
  reset: 'LoginForm-reset',
  loginField: 'LoginForm-loginField'
}

export const LoginForm = ({setFieldValue, getFieldValue, onReset, onSubmit}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit()
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
        data-testid={LoginFormTestIds.loginField}
        name="login"
        type="text"
      />
      <br/>
      <input name="password" type="text"/>
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