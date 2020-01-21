import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
afterEach(cleanup);

describe('<App/>', () => {
  it("Properly Renders the App Component", () => {
    const { asFragment } = render(<Router><App /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
})
