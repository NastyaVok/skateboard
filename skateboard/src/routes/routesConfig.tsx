import SkateboardPage from '@containers/SkateboardPage';
import ProductPage from '@containers/ProductPage/ProductPage';

const routesConfig = [
    {
        path: '/skateboards',
        element: <SkateboardPage />,
    },
    {
        path: '/skateboards/:id',
        element: <ProductPage />,
    },
];

export default routesConfig;