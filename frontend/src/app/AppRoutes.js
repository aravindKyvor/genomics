import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReportsTable from './basic-ui/ReportsTable';
import Spinner from '../app/shared/Spinner';
import Projectform from './Projectform';
import Annovar from './basic-ui/Annovar';
import Reports1 from './basic-ui/Reports1';
import Basespace from './basic-ui/Basespace';
import Basespace1 from './basic-ui/Basespace1';
import Analysis2 from './basic-ui/Analysis2';
const Dashboard = lazy(() => import('./dashboard/Dashboard'));



const Analysis = lazy(() => import('./basic-ui/Analysis'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));




const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));

const BlankPage = lazy(() => import('./general-pages/BlankPage'));




class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/" component={ Dashboard } />


          <Route path="/basic-ui/Analysis" component={ Analysis } />
          <Route path="/basic-ui/Analysis2" component={ Analysis2 } />

          <Route path="/basic-ui/Basespace1" component={ Basespace1 } />
          <Route path="/basic-ui/Basespace" component={ Basespace } />
          <Route path="/basic-ui/Reports1" component={ Reports1 } />
          <Route path="/basic-ui/reports" component={ ReportsTable } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />
          <Route path="/basic-ui/Annovar" component={ Annovar } />
          <Route exact path="/analysis/projectform" component={ Projectform } />



       


      


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/general-pages/blank-page" component={ BlankPage } />


          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;