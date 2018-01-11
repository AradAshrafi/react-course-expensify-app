import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRouter = ({ isAutenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        component={props =>
            isAutenticated ? <Redirect to="/dashboard" /> : <Component {...props} />
        }
    />
);

const mapStateToProps = state => ({
    isAutenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRouter);
