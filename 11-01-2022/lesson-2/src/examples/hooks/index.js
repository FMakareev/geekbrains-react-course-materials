import {useState, useCallback} from 'react'

const initialState = {login: '', password: ''}

export const LoginForm = ({handleSubmit}) => {
  const [formState, setFormState] = useState(initialState);

  const resetForm = useCallback(() => {
    setFormState(initialState)
  },[])

  const onSubmit = (event) => {
    event.preventDefault();
    if (handleSubmit) {
      handleSubmit(formState);
    }
    resetForm();
  }

  const onChangeLogin = useCallback((event) => {
    setFormState((formState) => {
      return {
        ...formState,
        login: event.target.value,
      }
    })
  }, []);

  const onChangePassword = useCallback((event) => {
    setFormState((formState) => {
      return {
        ...formState,
        password: event.target.value,
      }
    })
  },[])


  return <form onSubmit={onSubmit} onReset={resetForm}>
    <input
      onChange={onChangeLogin}
      value={formState.login} type="text" name="login"/> <br/>
    <input
      onChange={onChangePassword}
      value={formState.password} type="password" name="password"/><br/>

    <button type="reset">
      reset
    </button>
    <button type="submit">
      submit
    </button>
  </form>
}
