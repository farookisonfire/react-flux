$ = jQuery = require('jquery');
const React = require('react');
const Home = require('./components/homepage');
const About = require('./components/about/aboutpage');
const Header = require('./components/common/header')
const Authors = require('./components/authors/authorpage')

const App = React.createClass({
  render: function() {
    var Child;

    switch(this.props.route) {
      case 'about': Child = About; break
      case 'authors': Child = Authors; break
      default: Child = Home;
    }
    return (
      <div>
        <Header />
        <Child />
      </div>
    );

  }
});

function render () {
  var route = window.location.hash.substr(1);
  React.render(<App route={ route }/>, document.getElementById('app'))
}

window.addEventListener('hashchange', render);
render();
