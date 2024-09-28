import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { About } from './pages/index';

// Define the routes using createBrowserRouter
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/about',
        element: <About />,
    },
    // Add more routes here if needed
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;