import FormDropDown from './FormDropDown'
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';



afterEach(cleanup)
test('Form component snapshot HTML', () => {
  const output = renderer.create(<FormDropDown/>).toJSON();
  expect(output).toMatchSnapshot();
});