import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Home from './components/Home';
import AboutMe from './components/Aboutme';
import Projects from './components/Projects';
import Contact from './components/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/About',
                element: <AboutMe />,
            },
            {
                path: '/Projects',
                element: <Projects />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
