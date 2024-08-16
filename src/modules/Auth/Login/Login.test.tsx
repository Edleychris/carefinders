import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Login from "./index";
import { useLogin } from "../../../hooks/auth";

// Mock the `useLogin` hook
// jest.mock("../../../hooks/auth", () => ({
//   useLogin: jest.fn(),
// }));

// describe("Login Component", () => {
//   beforeEach(() => {
//     // Mock the hook behavior
//     (useLogin as jest.Mock).mockReturnValue({
//       mutate: jest.fn(),
//       isSuccess: false,
//       isError: false,
//       reset: jest.fn(),
//     });
//   });

//   it("renders the login form", () => {
//     render(
//       <Router>
//         <Login />
//       </Router>
//     );

//     expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
//     expect(
//       screen.getByRole("checkbox", { name: /Remember me/i })
//     ).toBeInTheDocument();
//     expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
//     expect(screen.getByText(/Forgot password?/i)).toBeInTheDocument();
//     expect(screen.getByText(/Don't have an account?/i)).toBeInTheDocument();
//   });

//   it("submits the form with email and password", () => {
//     const mockMutate = jest.fn();

//     (useLogin as jest.Mock).mockReturnValue({
//       mutate: mockMutate,
//       isSuccess: false,
//       isError: false,
//       reset: jest.fn(),
//     });

render(
  <Router>
    <Login />
  </Router>
);

//     fireEvent.change(screen.getByLabelText(/Email/i), {
//       target: { value: "test@example.com" },
//     });
//     fireEvent.change(screen.getByLabelText(/Password/i), {
//       target: { value: "password123" },
//     });
//     fireEvent.click(screen.getByRole("checkbox", { name: /Remember me/i }));
//     fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

//     expect(mockMutate).toHaveBeenCalledWith({
//       email: "test@example.com",
//       password: "password123",
//       remember: true,
//     });
//   });

//   it("displays an error message if form submission fails", () => {
//     const mockReset = jest.fn();

//     (useLogin as jest.Mock).mockReturnValue({
//       mutate: jest.fn(),
//       isSuccess: false,
//       isError: true,
//       reset: mockReset,
//     });

render(
  <Router>
    <Login />
  </Router>
);

//     expect(mockReset).toHaveBeenCalledTimes(1);
//   });

//   it("navigates to the dashboard on successful login", () => {
//     const mockReset = jest.fn();
//     const mockNavigate = jest.fn();

//     jest.mock("react-router-dom", () => ({
//       ...jest.requireActual("react-router-dom"),
//       useNavigate: () => mockNavigate,
//     }));

//     (useLogin as jest.Mock).mockReturnValue({
//       mutate: jest.fn(),
//       isSuccess: true,
//       isError: false,
//       reset: mockReset,
//     });

//     render(
//       <Router>
//         <Login />
//       </Router>
//     );

//     expect(mockReset).toHaveBeenCalledTimes(1);
//     expect(mockNavigate).toHaveBeenCalledWith("/dashboard"); // Assuming '/dashboard' is the path to the dashboard
//   });
// });
