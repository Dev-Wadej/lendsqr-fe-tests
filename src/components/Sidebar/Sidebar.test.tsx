import Sidebar from './Sidebar'
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';



afterEach(cleanup)
test('Sidebar component snapshot HTML', () => {
  const output = renderer.create(<Sidebar/>).toJSON();
  expect(output).toMatchSnapshot();
});