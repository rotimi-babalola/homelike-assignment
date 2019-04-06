import HomeView from '../containers/HomeView';
import ApartmentView from '../containers/ApartmentView';
import ApartmentLocationView from '../containers/ApartmentLocationView';
import SearchApartmentView from '../views/SearchApartmentView';

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
    {
      exact: true,
      path: '/search/:locationId',
      component: SearchApartmentView,
      id: 4,
    },
  ],
};

export default routes;
