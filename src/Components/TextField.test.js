import React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';
import {useField, ErrorMessage} from 'formik';


let fieldMock = {value: 'first random'};
let metaMock = {touched: true, error: 'Title must be more than 10 chars'};
let helperMock = {};

jest.mock("formik", () => ({
  ...jest.requireActual("formik"),
  useField: () => {
    return [fieldMock, metaMock, helperMock];
  },
}));

let props, wrapper;

describe("<TextField />", () => {
  beforeEach(() => {
    props = {label: "Title", name: "title", type: "text", placeholder: "Todo title"};
    wrapper = shallow(<TextField {...props} />);
  });
  
  it("should show the correct input value", () => {
    expect(wrapper.find("input").prop("value")).toBe("first random");
  });

  it("should ", () => {
    expect(wrapper.find("input").prop("value")).not.toBe("first");
  });

  it("show red border color when requirement doesn't match", () => {
    expect(wrapper.find("input").hasClass("is-invalid")).toBe(true);
  });
});