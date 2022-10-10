import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import renderer from 'react-test-renderer';



test('submitting the form',()=>{
    render(
        <MemoryRouter>
            <Login/>
        </MemoryRouter>
    )
    userEvent.type(screen.getByPlaceholderText(/email/i),'Joshua')
    userEvent.type(screen.getByPlaceholderText(/password/i),'i need none')
    userEvent.click(screen.getByRole('button',{name:/login/i}))
    screen.debug()

    const output = renderer.create(<MemoryRouter>
        <Login/>
    </MemoryRouter>  ).toJSON();
  expect(output).toMatchSnapshot();
})