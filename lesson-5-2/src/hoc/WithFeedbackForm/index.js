import {useState} from "react";


export const WithFeedbackForm = (Component, initialValues = {}) => {

  return (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [values, setValues] = useState(initialValues);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      setIsLoading(true);
      setTimeout(() => {
        console.log(values);
        setIsLoading(false);
      }, 1500)
    }

    const setFieldValue = (name, value) => setValues((values) => ({
      ...values,
      [name]: value,
    }))

    const getFieldValue = (name) => values[name];

    return <Component
      {...props}
      isLoading={isLoading}
      getFieldValue={getFieldValue}
      setFieldValue={setFieldValue}
      handleSubmit={handleSubmit}
    />
  }
}