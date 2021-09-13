import React from 'react';
import {LoginForm} from "../../components/LoginForm";
import {useSimpleForm} from "../../hooks/useSimpleForm";
import {userApi} from "../../api";


export const FormTestExample = () => {
  const { setFieldValue, getFieldValue, resetForm, values} = useSimpleForm();

  const onSubmit = () => {
    console.log('values', values);
    userApi.login(values.login, values.password);
  }


  return (
    <div>
      <LoginForm
        onSubmit={onSubmit}
        setFieldValue={setFieldValue}
        getFieldValue={getFieldValue}
        onReset={resetForm}
      />
    </div>
  );
};