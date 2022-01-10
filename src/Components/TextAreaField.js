import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextAreaField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-field">
      <label htmlFor={field.name} className="label">{label}</label>
      <textarea
        className={`input ${meta.touched && meta.error && 'is-invalid'}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
export default TextAreaField;
