/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import Index from '../components/home/Index';
import Form from '../components/forms/Form';

import AdminHome from '../components/admin/AdminHome';
import Adminanswer from '../components/admin/answer';
  import AdminUser from '../components/admin/User';
   import AdminFedBack from '../components/admin/FedBack';
// import AuthBasic from '../components/auth/Basic';
// import RouterEnter from '../components/auth/RouterEnter';
// import Cssmodule from '../components/cssmodule';



export default class CRouter extends Component {
    // requireAuth = (permission, component) => {
    //     const { auth } = this.props;
    //     const { permissions } = auth.data;
    //     // const { auth } = store.getState().httpData;
    //     if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
    //     return component;
    // };
    render() {
        return (
            <Switch>
                <Route exact path="/app/home/index" component={Index} />
                <Route exact path="/app/form/Form" component={Form} />

                <Route component={AdminHome} path='/app/admin/adminHome' />
                <Route component={Adminanswer} path='/app/admin/answer' />
                 <Route component={AdminUser} path='/app/admin/User' />
                 <Route component={AdminFedBack} path='/app/admin/FedBack' />

                {/*<Route exact path="/app/auth/basic" component={AuthBasic} />
                <Route exact path="/app/auth/routerEnter" component={(props) => this.requireAuth('auth/testPage', <RouterEnter {...props} />)} />

                <Route exact path="/app/cssModule" component={Cssmodule} />*/}

                {/*<Route render={() => <Redirect to="/404" />} />*/}
            </Switch>
        )
    }
}