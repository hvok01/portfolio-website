import Home from './components/home/Home';
import About from './components/about/About';
import Works from './components/work/Works';
import Contact from './components/contact/Contact';
import Pintper from './components/pintper/Pintper';
import EstadoReal from './components/estadoReal/EstadoReal';
import NotFound from './components/notFound/NotFound';

const routes = [
    {
    exact: true,
    path: '/',
    component: Home 
    },
    {
    exact: true,
    path: '/about',
    component: About 
    },
    {
    exact: true,
    path: '/work',
    component: Works 
    },
    {
    exact: true,
    path: '/contact',
    component: Contact 
    },
    {
    exact: true,
    path: '/pintper',
    component: Pintper 
    },
    {
    exact: true,
    path: '/estadoReal',
    component: EstadoReal 
    },
    {
    exact: true,
    path: '/404',
    component: NotFound 
    }
];

export default routes;
