import {useState, useCallback} from 'react';

const LoginForm = ({getValue, setValue, onSubmit}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event);
    }

    const onChangeLogin = (event) => {
        setValue('login', event.target.value)
    }

    const onChangePassword = (event) => {
        setValue('password', event.target.value)
    }

    return <form onSubmit={handleSubmit}>
        <input value={getValue('login')} onChange={onChangeLogin} type="text" />
        <input value={getValue('password')} onChange={onChangePassword} type="password" />
        <buton>send</buton>
    </form>
}

const withLoginForm = (Component) => {
    const Wrapped = (props) => {
        const [values, setValues] = useState({});
        const getValue = (name) => values[name];
        const setValue = useCallback((name, value) => {
            setValues((prevValues) => {
                return {
                    ...prevValues,
                    [name]: value
                }
            })
        }, []);

        const onSubmit = () => {
            console.log(values)
        }

        return <Component {...props} onSubmit={onSubmit} getValue={getValue} setValue={setValue} />
    }

    Wrapped.displayName = 'withLoginForm';

    return Wrapped;
}

const LoginFormWithHOC = withLoginForm(LoginForm)


export const HOCs = () => {


    return <div>
        <LoginFormWithHOC/>
    </div>
}