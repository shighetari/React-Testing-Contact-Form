import React from "react";
import { render, fireEvent, screen, act, getByLabelText, getByTestId } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('test to render', () => {
    render(<ContactForm />);
})

test("renders form without crashing", () => {
    render(<ContactForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last Name/i)
    const emailInput = screen.getByLabelText(/email/i)

   expect(firstNameInput).toBeInTheDocument()
    expect(lastNameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()

    //events 
    fireEvent.change(firstNameInput, { target: { value: 'Francisco' } })
    fireEvent.change(lastNameInput, { target: { value: 'Barrios' } })
    fireEvent.change(emailInput, { target: { value: 'shighetari@gmail.com' } })

    // act(() => {
    //     // render components
    //     render(<ContactForm />)
    //     //click submit button
    //     const submitButton = screen.getAllByTestId(/submit/i);
    //     fireEvent.click(submitButton);

    // });;

    // const submitButton = screen.getAllByTestId(/submit/i)
    // fireEvent.click(submitButton);


    expect(firstNameInput).toBeInTheDocument()
    expect(lastNameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(firstNameInput.value).toContain('Francisco')
});

test('Changing input values', () => {
    render(<ContactForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)

    fireEvent.change(firstNameInput, { target: { value: 'Francisco' } });

    expect(firstNameInput).toBeInTheDocument('Francisco');


    fireEvent.click(screen.getByTestId(/submit/i));

})