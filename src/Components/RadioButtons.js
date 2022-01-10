import React, { Fragment } from 'react';
import { Formik, ErrorMessage, Field } from 'formik';

const RadioButtons = (props) => {
  const {
    label, name, options, ...rest
  } = props;

  return (
    <div className="radio-buttons">
      <label htmlFor={name} className='label'>{label}</label>
      <Field name={name} {...rest}>
			{
				({field }) => {
					return options.map((option) => (
					<Fragment key={option.key}>
							<input
								type="radio"
								{...field}
								value={option.value}
								id={option.value}
								checked={field.value === option.value}
							/>
						<label htmlFor={option.value}>{option.value}</label>
					</Fragment>
				))
				}}
      </Field>
			<ErrorMessage component="div" name={name} className="error" />
    </div>
  );
};

export default RadioButtons;
