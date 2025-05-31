import { createBrowserRouter } from "react-router"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import SignupPage from "./Pages/SignUp"

export const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/signup', element: <SignupPage /> },
    { path: '/dashboard', element: <Dashboard /> },
])
