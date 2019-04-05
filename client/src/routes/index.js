import HomeView from '../containers/HomeView';
import ApartmentView from '../containers/ApartmentView';
// eslint-disable-next-line import/no-unresolved
import LocationView from '<views>/LocationView';

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
      path: '/locations',
      component: LocationView,
      id: 3,
    },
  ],
};

export default routes;
