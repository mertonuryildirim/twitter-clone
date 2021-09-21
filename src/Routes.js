import React, { useState, useEffect } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Login from './auth/Login';
import Layout from './layout/Layout';
import db from './firebase';

const Routes = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        db.collection('user').onSnapshot((snapshot) => {
            setUser(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);
    return (
        <Switch>
            {!user.isAuthorized ? (
                <Route>
                    <Login />
                </Route>
            ) : (
                <Redirect from="/auth" to="/" />
            )}

            {!user.isAuthorized ? <Redirect to="/auth/login" /> : <Layout />}
        </Switch>
    );
};

export default Routes;
