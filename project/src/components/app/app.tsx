import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import NotFound from '../../pages/404/notFound';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Hotel from '../../pages/hotel/hotel';
import PrivateRoute from '../private-route/privateRoute';
import { Offer, Location } from '../../types/offer';
import { City } from '../../types/city';
import { ReviewType } from '../../types/reviewType';

type AppProps = {
  offers: Offer[],
  city: City,
  reviews: ReviewType[],
  nearPlaces: Location[],
}

function App({offers, city, reviews, nearPlaces}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          element={<Main offers={offers} city={city} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={<Hotel offers={offers} city={city} reviews={reviews} nearPlaces={nearPlaces} />}
        />
        <Route
          path={'*'}
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
