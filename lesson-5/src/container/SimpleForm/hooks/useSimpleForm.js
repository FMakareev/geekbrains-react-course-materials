import { useState, useCallback } from 'react';

export const useSimpleForm = () => {
  const [values, setValues] = useState({});

  const resetForm = () => {
    setValues({});
  };

  const setFieldValue = useCallback(
    (name, value) => {
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values],
  );

  const getFieldValue = (name) => values[name] || '';

  return {
    values,
    setFieldValue,
    getFieldValue,
    resetForm,
  };
};
