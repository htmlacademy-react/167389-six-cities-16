import {useLocation, Navigate} from 'react-router-dom';

type PrivateRoute = {
  children: JSX.Element;
};

export const PrivateRoute = ({children}: PrivateRoute): JSX.Element => {
  const location = useLocation();
  const auth = false;

  if(!auth) {
    return <Navigate to='/login' state={{from: location}} />;
  }

  return children;

};

export default PrivateRoute;
