import SignUpForm from 'authComponents/signupForm';
import '@testing-library/jest-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup, set } from "@testing-library/react"
import { screen } from '@testing-library/dom'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "reducers/index"
import { act } from 'react-dom/test-utils';
import { decodeToken } from 'react-jwt';
import instance from 'interceptors'

afterEach(() => {
  cleanup();
});

const middleware = [thunk]
function renderWithRedux(component,
  { initialState, store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  ) } = {}) {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}
const localStorageMock = {
};
global.localStorage = localStorageMock;
it('Testing register random user', async () => {
  // GIVEN
  const password = 'dasfgaadasdsadgad414fgdgdd';
  const email = 'dasfgaasdgdsadasad41fgdgdd@gmail.com';
  const username = "dasfasdshu424ruht"
  const { getByLabelText, getByText } = renderWithRedux(<SignUpForm />)
  // expect(localStorage.getItem("token-access")).toBe(String);
  expect(typeof (localStorage.getItem("token-access")) === "string").toBe(false)
  expect(typeof (localStorage.getItem("token-refresh")) === "string").toBe(false)
  act(() => {
    fireEvent.change(getByLabelText(/Email/i), { target: { value: email } });
  })
  act(() => {
    fireEvent.change(getByLabelText(/Password/i), { target: { value: password } });
  })
  act(() => {
    fireEvent.change(getByLabelText(/Username/i), { target: { value: username } });
  })
  act(() => {
    fireEvent.click(getByText(/Sign Up/i));
  })
  await act(async () => {
    await new Promise((r) => setTimeout(r, 500));
  })
  expect(typeof (localStorage.getItem("token-access")) === "string").toBe(true)
  expect(typeof (localStorage.getItem("token-refresh")) === "string").toBe(true)
  expect(screen.getByText('Sign Up')).toBeDisabled();
  await instance.delete("users/" + decodeToken(localStorage.getItem("token-access"))["user_id"] + "/")
});

