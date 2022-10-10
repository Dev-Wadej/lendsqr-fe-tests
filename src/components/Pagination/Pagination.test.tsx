import Pagination from './Pagination'
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';



afterEach(cleanup)
test('Material ui component snapshot HTML', () => {
  const output = renderer.create(<Pagination totalPage={2}/>).toJSON();
  expect(output).toMatchSnapshot();
});