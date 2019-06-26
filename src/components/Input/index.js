import React from 'react';

import { Field, Error } from './styles';

function Input({
  name,
  value,
  type,
  placeholder,
  touched,
  error,
  onChange,
  onBlur
}) {
  return (
    <>
      <Field
        name={name}
        value={value}
        placeholder={placeholder}
        error={error}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && !!error && <Error>{error}</Error>}
    </>
  );
}

export default Input;
