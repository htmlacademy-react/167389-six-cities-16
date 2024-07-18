import { AppRoute } from '../../const';
import MainPage from '../../pages/main/main';
import Offer from '../../pages/offer/offer';
//import MainEmpty from '../Main-empty/Main-empty';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';
//import OfferNotLoger from '../../pages/offer-not-logger/offer-not-logger';

type AppScreenProps = {
  placesCount: number;
}


function App({ placesCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage placesCount={placesCount} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<Offer />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
