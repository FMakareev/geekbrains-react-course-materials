import { useState, useCallback } from 'react';

export const useSimpleForm = () => {
  const [values, setValues] = useState({});

  const resetForm = () => {
    setValues({});
  };

  const setFieldValue = useCallback(
    (name: string, value: any) => {
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values],
  );

  const getFieldValue = (name: string) => (values as any)[name] || '';

  return {
    values,
    setFieldValue,
    getFieldValue,
    resetForm,
  };
};
