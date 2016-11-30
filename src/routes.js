"use strict"

const React = require('react');

const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const NotFoundRoute = Router.NotFoundRoute;


var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
      <DefaultRoute handler={require('./components/homepage')} />
      <Route name="authors" handler={require('./components/authors/authorpage')}/>
      <Route name="about" handler={require('./components/about/aboutpage')} />
      <NotFoundRoute handler={require('./components/notFoundPage')} />
    </Route>
);

module.exports = routes;
