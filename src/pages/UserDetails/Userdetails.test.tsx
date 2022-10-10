

import Userdetails from './Userdetails'
import renderer from 'react-test-renderer';
import {cleanup,} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from '../../features/api/apiSlice';



afterEach(cleanup)
test('Userdetails component snapshot HTML', () => {
    const output = renderer.create(<MemoryRouter>
        <ApiProvider api={apiSlice}>
       <Userdetails/>
        </ApiProvider>
    </MemoryRouter>  ).toJSON();
  expect(output).toMatchSnapshot();
});