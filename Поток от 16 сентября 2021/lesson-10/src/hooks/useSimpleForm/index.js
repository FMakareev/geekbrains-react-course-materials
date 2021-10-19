import { useState, useCallback, useEffect } from 'react';

export const useSimpleForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);


  useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  const resetForm = () => {
    setValues({});
  };

  const setFieldValue = useCallback(
    (name, value) => {
      setValues((values) => ({
        ...values,
        [name]: value,
      }));
    },
    [],
  );

  const getFieldValue = (name) => values[name] || '';

  return {
    values,
    setFieldValue,
    getFieldValue,
    resetForm,
  };
};
