import Accidents from 'pages/accidents';
import HomePage from 'pages/home-page';
import Uploads from 'pages/uploads';

export const routers = [
  {
    path: '/',
    name: 'Home Page',
    component: <HomePage />,
  },
  {
    path: '/accident',
    name: 'Accident',
    component: <Accidents />,
  },
  {
    path: '/uploads',
    name: 'Uploads',
    component: <Uploads />,
  },
];
