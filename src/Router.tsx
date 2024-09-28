import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { About, List } from './pages/index';
import { DefaultLayout, LayoutWithoutFooter } from './layouts';

interface Route {
    path: string;
    element: JSX.Element;
    layout?: React.FC<{ children: React.ReactNode }>; // Optional layout
}

const routes: Route[] = [
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/List',
        element: <List />,
        layout: LayoutWithoutFooter,
    },
];


const renderLayout = (element: JSX.Element, Layout?: React.FC<{ children: React.ReactNode }>): JSX.Element => {
    const LayoutToUse = Layout || DefaultLayout; // Use DefaultLayout if no layout is provided
    return (
        <LayoutToUse>
            {element}
        </LayoutToUse>
    );
};

const mappedRoutes = routes.map(route => ({
    ...route,
    element: renderLayout(route.element, route.layout),
}));

const router = createBrowserRouter(mappedRoutes);

const AppRouter: React.FC = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default AppRouter;