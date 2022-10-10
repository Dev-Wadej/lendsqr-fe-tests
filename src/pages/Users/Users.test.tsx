import User from './User'
import renderer from 'react-test-renderer';
import {cleanup,} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from '../../features/api/apiSlice';



afterEach(cleanup)
test('User component snapshot HTML', () => {
    const output = renderer.create(<MemoryRouter>
        <ApiProvider api={apiSlice}>
       <User/>
        </ApiProvider>
    </MemoryRouter>  ).toJSON();
  expect(output).toMatchSnapshot();
});