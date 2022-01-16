import React from "react";
import {
  screen,
  render,
  waitFor,
  fireEvent
} from "@testing-library/react";
import FormScreen from "./FormScreen";
import axios from 'axios';

jest.mock('axios');

describe("<FormScreen />", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    render(<FormScreen />, div)
  });

  it("should submit validated data", async () => {
    const { container } = render(<FormScreen />)
    const postSpy = jest.spyOn(axios, 'post');
    const title = container.querySelector('input[name="title"]')
    const description = container.querySelector('textarea[name="description"]')
    const status = container.querySelector('input[name="status"]')
    const date = container.querySelector('input[name="date"]')
    const submit = container.querySelector(".form__submit--btn");
  
    await waitFor(() => {
      fireEvent.change(title, {
        target: {
          value: "First todo title"
        }
      })
    })
  
    await waitFor(() => {
      fireEvent.change(description, {
        target: {
          value: "first todo description"
        }
      })
    })
  
    await waitFor(() => {
      fireEvent.change(status, {
        target: {
          value: "completed"
        }
      })
    })

    await waitFor(() => {
      fireEvent.change(date, {
        target: {
          value: "2022-02-03T00:00:00.000Z"
        }
      })
    })
  
    await waitFor(() => {
      fireEvent.click(submit)
    })
    expect(postSpy).toBeCalled();
  });

  it("should not submit untill all the data are validated", async () => {
    const { container } = render(<FormScreen />)
    const postSpy = jest.spyOn(axios, 'post');
    const title = container.querySelector('input[name="title"]')
    const description = container.querySelector('textarea[name="description"]')
    const status = container.querySelector('input[name="status"]')
    const date = container.querySelector('input[name="date"]')
    const submit = container.querySelector(".form__submit--btn");
  
    await waitFor(() => {
      fireEvent.change(title, {
        target: {
          value: ""
        }
      })
    })
  
    await waitFor(() => {
      fireEvent.change(description, {
        target: {
          value: "first todo description"
        }
      })
    })
  
    await waitFor(() => {
      fireEvent.change(status, {
        target: {
          value: "completed"
        }
      })
    })

    await waitFor(() => {
      fireEvent.change(date, {
        target: {
          value: "2022-02-03T00:00:00.000Z"
        }
      })
    })
  
    await waitFor(() => {
      fireEvent.click(submit)
    })
    expect(postSpy).not.toHaveBeenCalled();
  });

});
