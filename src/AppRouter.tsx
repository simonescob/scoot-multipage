import { Route, Routes } from 'react-router-dom';

// Import your components here
import About from './pages/About';
import Careers from './pages/Careers';
import Home from './pages/Home';
import Locations from './pages/Locations';
import NotFound from './pages/NotFound';

const routerList = [
  {
    path: '/',
    element: <Home/>,
    exact: false,
  },
  {
    path: '/about',
    element: <About/>,
    exact: false,
  },
  {
    path: '/careers',
    element: <Careers/>,
    exact: false,
  },
  {
    path: '/locations',
    element: <Locations/>,
    exact: false,
  },
  {
    path: '*',
    element: <NotFound/>,
    exact: false,
  },
]

const AppRouter: React.FC = () => {
  return (
    // <Router>
      <Routes>
        {routerList.map(route => <Route path={route.path} element={route.element} />)}
      </Routes>
    // </Router>
  );
};

export default AppRouter;
