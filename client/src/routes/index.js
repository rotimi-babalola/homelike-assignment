import HomeView from '../containers/HomeView';
import ApartmentView from '../containers/ApartmentView';
import ApartmentLocationView from '../containers/ApartmentLocationView';

const routes = {
  default: [
    {
      exact: true,
      path: '/',
      component: HomeView,
      id: 1,
    },
    {
      exact: true,
      path: '/apartments/:apartmentId',
      component: ApartmentView,
      id: 2,
    },
    {
      exact: true,
      path: '/locations/:locationId',
      component: ApartmentLocationView,
      id: 3,
    },
  ],
};

export default routes;
