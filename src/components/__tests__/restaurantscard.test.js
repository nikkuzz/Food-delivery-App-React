import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/restCardMockData.json";
import React from 'react';

test("restaurant card rendered with props", () => {

    render(<RestaurantCard resDetails= {MOCK_DATA}/>);

    const name = screen.getByText("Burgers, American, Fast Food, Beverages, Desserts");

    expect(name).toBeInTheDocument();
    
});