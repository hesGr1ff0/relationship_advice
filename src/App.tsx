import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'articles', element: <Articles /> },
      { path: 'articles/:slug', element: <Article /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'categories/:category', element: <Articles /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
