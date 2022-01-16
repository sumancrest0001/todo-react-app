import React from 'react';
import { shallow } from 'enzyme';
import TextAreaField from './TextAreaField';


let fieldMock = {value: 'first description from test'};
let metaMock = {touched: true, error: 'Required'};
let helperMock = {};

jest.mock("formik", () => ({
  ...jest.requireActual("formik"),
  useField: () => {
    return [fieldMock, metaMock, helperMock];
  },
}));

let props, wrapper;

describe("<TextAreaField />", () => {
  beforeEach(() => {
    props = {label: "Description", name: "description", type: "text", placeholder: "Todo description"};
    wrapper = shallow(<TextAreaField {...props} />);
  });
  
  it("should show the correct input value", () => {
    expect(wrapper.find("textarea").prop("value")).toBe("first description from test");
  });

  it("should ", () => {
    expect(wrapper.find("textarea").prop("value")).not.toBe("first");
  });

  it("show red border color when requirement doesn't match", () => {
    expect(wrapper.find("textarea").hasClass("is-invalid")).toBe(true);
  });
});