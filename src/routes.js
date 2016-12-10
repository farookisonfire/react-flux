"use strict"

const React = require('react');

const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const NotFoundRoute = Router.NotFoundRoute;
const Redirect = Router.Redirect;


var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
      <DefaultRoute handler={require('./components/homepage')} />
      <Route name="authors" handler={require('./components/authors/authorpage')}/>
      <Route name = "addAuthor" path="author" handler={require('./components/authors/manage-author-page')}/>
      <Route name="about" handler={require('./components/about/aboutpage')} />
      <NotFoundRoute handler={require('./components/notFoundPage')} />
      <Redirect from="about-us" to="about" />
      <Redirect from="awthurs" to="authors" />
      <Redirect from="about/*" to="about" />
    </Route>
);

module.exports = routes;
