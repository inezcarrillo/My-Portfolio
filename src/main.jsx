import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Home from './Home';
import AboutMe from './Aboutme';
import Projects from './Projects';
import Contact from './Contact';

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
                index: true,
                element: <AboutMe />,
            },
            {
                index: true,
                element: <Projects />,
            },
            {
                index: true,
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
