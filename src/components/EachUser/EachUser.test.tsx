import EachUser from './EachUser'
import renderer from 'react-test-renderer';
import {cleanup,screen, fireEvent, render} from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';



afterEach(cleanup)
test('Each user component snapshot HTML', () => {
    const mockData={
        createdAt:'June 2022',
        orgName:'Lendsqr',
        email:'lendsr@gmail.com',
        id:'2',
        userName:'Grace',
        phoneNumber:'8199234',
    }
    const {container}= render(
      <MemoryRouter initialEntries={["/users/2"]}>
      <EachUser data={mockData}/>
    </MemoryRouter>
      )

   const statusToggler =(container.querySelector('ul > li:nth-child(6)'))
   userEvent.click(statusToggler!)

  const output = renderer.create(<EachUser data={mockData}/>).toJSON();
  expect(output).toMatchSnapshot();
});

