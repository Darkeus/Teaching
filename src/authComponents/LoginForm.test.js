import LoginForm from 'authComponents/loginForm';
import '@testing-library/jest-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup, set } from "@testing-library/react"
import { screen } from '@testing-library/dom'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "reducers/index"
import { act } from 'react-dom/test-utils';

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

it('Wrong user does not work', async () => {
  // GIVEN
  const password = 'dasfagjij2i2ji4uf';
  const email = 'f3jbfjb3htbh3bhf3b3bh3hb3@gmail.com';
  const { getByLabelText, getByText } = renderWithRedux(<LoginForm />)
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
    fireEvent.click(getByText('Login'));
  })
  await act(async () => {
    await new Promise((r) => setTimeout(r, 150));
  })
  expect(typeof (localStorage.getItem("token-access")) === "string").toBe(false)
  expect(typeof (localStorage.getItem("token-refresh")) === "string").toBe(false)
  expect(screen.getByText('Login')).toBeEnabled();
});

it('fetches & receives a user after clicking the fetch user button', async () => {
  // GIVEN
  const password = 'test';
  const email = 'test@gmail.com';
  const { getByLabelText, getByText } = renderWithRedux(<LoginForm />)
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
    fireEvent.click(getByText('Login'));
  })
  await act(async () => {
    await new Promise((r) => setTimeout(r, 250));
  })
  expect(typeof (localStorage.getItem("token-access")) === "string").toBe(true)
  expect(typeof (localStorage.getItem("token-refresh")) === "string").toBe(true)
  expect(screen.getByText('Login')).toBeDisabled();
});

