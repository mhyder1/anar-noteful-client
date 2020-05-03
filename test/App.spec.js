import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from '../src/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// this is the test case
// it('renders without crashing', () => {
//   // first create a DOM element to render the component into
//   const div = document.createElement('div');

//   // render the component, this is the actual test, if something is wrong it will fail here
//   ReactDOM.render(<App />, div);

//   // clean up code
//   ReactDOM.unmountComponentAtNode(div);
// });