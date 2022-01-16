import React from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { TextField } from './TextField';
import {TextAreaField} from './TextAreaField';
import RadioButtons from './RadioButtons';
import DatePicker from './DatePicker';
import log from 'loglevel';

const statusOptions = [
  {
    key: 'completed',
    value: 'completed',
  },
  {
    key: 'incomplete',
    value: 'incomplete',
  },
];

const FormScreen = ({changeScreen}) => {
	const validate = Yup.object().shape({
		title: Yup.string()
		.min(10, 'Minimum 10 characters required')
		.required('Required'),
		description: Yup.string()
		.required('Required'),
		status: Yup.string()
		.required('Required'),
		date: Yup.date()
		.required('Required').nullable(),
	})

  const createTodo = (todo) => {
    axios.post('https://suman-todo.herokuapp.com/api/v1/todos', todo)
      .then(response => {
        console.log(response);
      })
      .then(res => {
        console.log(res);
      });
  };

	return(
  <div>
    <button onClick={changeScreen}>Go to todo list</button>
    <Formik
      initialValues={{
        title: '',
        description: '',
        date: '',
        status: 'incomplete',
        date: null
      }}
      validationSchema={validate}
      onSubmit={(values, {resetForm}) => {
				const todo = {
          title: values.title,
          description: values.description,
          date: values.date,
          status: values.status === 'completed' ? true : false,
        };
        createTodo(todo);
        resetForm();
      }}
    >
      {(formik) => (
        <div className="form-container">
          <h1 className="form__title">Create todo</h1>
          <Form>
            <TextField
						label="Title"
						name="title"
						type="text"
						placeholder="Todo title"
						/>
            <TextAreaField
						label="Description"
						name="description"
						rows={5}
						cols={50}
						placeholder="Todo description"
						/>

            <DatePicker
              label="Due date"
              name="date"
            />
            <RadioButtons
              name="status"
              label="Completion status"
              options={statusOptions}
            />
            <button className="form__submit--btn" type="submit">Create</button>
          </Form>
        </div>
      )}
    </Formik>
  </div>
);
}
export default FormScreen;
