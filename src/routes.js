import Output from './pages/output';
import Recommend from './pages/recommend';
import SweetHome from './pages/sweethome';

const routes = [
  { path: '/output', element: <Output /> },
  { path: '/recommand', element: <Recommend /> },
  { path: '/', element: <SweetHome /> },
];

export default routes;
