import Navbar from './Navbar'
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';



afterEach(cleanup)
test('Form component snapshot HTML', () => {
  const output = renderer.create(<Navbar/>).toJSON();
  expect(output).toMatchSnapshot();
});