import React from 'react';
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, ErrorMessage, Field } from 'formik';

const DatePicker = (props) => {
  const {label, name, ...rest} = props;
  return(
    <div className="input-field">
      <label htmlFor={name} className='label'>{label}</label>
      <Field name={name} {...rest}>
			{
				({form, field }) => {
          const {setFieldValue} = form;
          const {value} = field;
          return(
          <DateView
            id={name}
            {...field}
            {...rest}
            selected={value}
            onChange={val => setFieldValue(name, val)}
          />)
        }
        }
      </Field>
			<ErrorMessage component="div" name={name} className="error" />
    </div>
  );
};

export default DatePicker;
