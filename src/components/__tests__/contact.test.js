import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";
import React from 'react';

describe("Contact us page tests", () => {

it("the heading is coming", () => {
    
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("should button be there",() => {

    render(<Contact />);

    const buttonn = screen.getByPlaceholderText("FirstName");

    expect(buttonn).toBeInTheDocument();
})

test("should lasTName be there",() => {

    render(<Contact />);

    const buttonn = screen.getByPlaceholderText("LastName");

    expect(buttonn).toBeInTheDocument();
})

});