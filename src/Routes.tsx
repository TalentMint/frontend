import { createBrowserRouter } from "react-router"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import SignupPage from "./Pages/SignUp"
import CreateNFT from "./UserAccount/CreateNft"
import Explore from "./UserAccount/explore"

export const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/signup', element: <SignupPage /> },
    { 
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            { index: true, element: <Explore />},
            { path: 'createnft', element: <CreateNFT />}
        ]
    },
])
