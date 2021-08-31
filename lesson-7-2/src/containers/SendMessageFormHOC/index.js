import {useState} from "react";


export const SendMessageFormHOC = (Component) => {

  return ({ onSend, ...rest }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');

    const resetValue = () => setValue('');

    const onChange = (event) => setValue(event.target.value);

    const onSubmit = () => {
      onSend(value);
      resetValue()
    }

    return <Component value={value} onChange={onChange} onSubmit={onSubmit} {...rest}/>
  }
}