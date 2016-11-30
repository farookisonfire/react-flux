const React = require('react')
const Link = require('react-router').Link

const notFoundPage = React.createClass({

  render: function(){
    return (
      <div>
        <h1>Page not found</h1>
        <p>These aren't the droids your looking for.</p>
        <p><Link to="app">Back to Home</Link></p>
      </div>
    )
  }
})

module.exports = notFoundPage
