import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router';
import AppBar from './components/AppBar/AppBar';
import operations from './redux/auth/operations';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

const Homepage = lazy(() => import('./views/Homepage/Homepage'));
const Register = lazy(() => import('./views/Register/Register'));
const Login = lazy(() => import('./views/Login/Login'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>loading</p>}>
          <PrivateRoute>
            <Route path="/contacts" exact component={Homepage} />
          </PrivateRoute>
          <PublicRoute restricted>
            <Route path="/register" exact component={Register} />
          </PublicRoute>
          <PublicRoute restricted>
            <Route path="/login" exact component={Login} />
          </PublicRoute>
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
