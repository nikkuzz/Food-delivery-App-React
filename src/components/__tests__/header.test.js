import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { userStore } from "../../utils/userStore";
import React from "react";


test("Logout button is rendered/clicked", () => {

    render(
    <BrowserRouter>
        <Provider store={userStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const Login = screen.getByRole("button", {name:"Login"});

    fireEvent.click(Login);     //click event in the background

    const Logout = screen.getByRole("button",{name:"Logout"});

    expect(Logout).toBeInTheDocument();
});