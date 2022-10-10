import StatusDropDown from './StatusDropDown'
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';



afterEach(cleanup)
test('Form component snapshot HTML', () => {
  render(
    <MemoryRouter initialEntries={["/users/2"]}>
      <StatusDropDown id='2'/>
    </MemoryRouter>
  );
//   expect(output).toMatchSnapshot();
});