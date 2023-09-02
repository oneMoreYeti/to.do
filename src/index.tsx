import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home/>
	},
]);

const root = ReactDOM.createRoot(document.querySelector('#root')!);
root.render(<RouterProvider router={router} />);
