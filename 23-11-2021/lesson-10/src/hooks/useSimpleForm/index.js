import { useState, useCallback, useEffect } from 'react';

const baseInitialValues = {}

export const useSimpleForm = (initialValues = baseInitialValues) => {
  const [values, setValues] = useState(initialValues);


  useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  const resetForm = () => {
    setValues(baseInitialValues);
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
