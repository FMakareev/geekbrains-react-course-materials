import {useState} from 'react';

const getTargetValue = (event) => {
  if(typeof event === 'object') {
    return event.target.value;
  }
  return event;
}

export const useForm = (initialValues, handleSubmit) => {
  const [values, setValues] = useState({});

  const onChange = (name) => (value) => {
    setValues((prevState) => {
      return{
        ...prevState,
        [name]: getTargetValue(value),
      }
    })
  }

  const getValues = () => values;
  const getValue = (name) => values[name];

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(values);
  };


  return {
    onChange,
    getValues,
    getValue,
    onSubmit,
  }
}
