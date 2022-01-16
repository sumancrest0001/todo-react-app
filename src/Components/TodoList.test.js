import React from 'react';
import axios from 'axios';
import { shallow } from 'enzyme';
import TodoList from './TodoList';
import Todo from './Todo';

jest.mock('axios');

describe('TodoList Component', () => {
  describe('when rendered', () => {
    it('should fetch a list of tasks', () => {
      const getSpy = jest.spyOn(axios, 'get');
      const wrapper = shallow(<TodoList/>);
      expect(getSpy).toBeCalled();
    });
  });
});