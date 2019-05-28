/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthLayout from "layouts/Auth.jsx";
import AdminLayout from "layouts/Admin.jsx";
import UserLayout from "layouts/User.jsx";
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider/*, TimePicker, DatePicker*/ } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

// Import theme
import theme from 'theme';

//import indexRoutes from "routes/index.jsx";

import "public/chartist.min.css";
import "public/chartist.min.js";
// Fonts and icons
import "public/fa.all.min.css";
import "public/gfonts.css.css";
import "public/gfonts.icon.css";

import "assets/scss/material-dashboard-pro-react.scss?v=1.5.0";

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Switch>
            <Route path="/auth" component={AuthLayout} />
            <Route path="/admin" component={AdminLayout} />
            <Route path="/user" component={UserLayout} />
            <Redirect from="/" to="/auth/login" />
            {/*indexRoutes.map((prop, key) => {
            return <Route exact={prop.exact ? true : false} path={prop.path} component={prop.component} key={key} />;
          })*/}
          </Switch>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
      <GlobalStyle />
    </div>
  );
}
