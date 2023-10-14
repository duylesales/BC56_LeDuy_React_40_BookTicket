import { render, manhinh } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = manhinh.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
