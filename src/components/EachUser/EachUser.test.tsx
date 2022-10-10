import EachUser from './EachUser'
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';



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
    const {container}= render(<EachUser data={mockData}/>)
    // console.log(container.firstChild)
  const output = renderer.create(<EachUser data={mockData}/>).toJSON();
  expect(output).toMatchSnapshot();
});