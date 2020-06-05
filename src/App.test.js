import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
  // const header = screen.getByText(/add new name/i)
  // expect(header).toBeInTheDocument()
});
