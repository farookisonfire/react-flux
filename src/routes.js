"use strict"

const React = require('react');

const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
      <DefaultRoute handler={require('./components/homepage')} />
      <Route name="authors" handler={require('./components/authors/authorpage')}/>
      <Route name="about" handler={require('./components/about/aboutpage')} />
    </Route>
);

module.exports = routes;
