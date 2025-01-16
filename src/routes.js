import Output from './pages/output';
import Recommend from './pages/recommend';
import Home from './pages/sweethome';

const routes = [
  { path: '/output', element: <Output /> },
  { path: '/recommand', element: <Recommend /> },
  { path: '/', element: <Home /> },
];

export default routes;
