var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
      <div className="text-center page-title">
        <h1>About</h1>
        <p>This app was made as part of the complete react developer course. Not very interesting.</p>
        <p>Find the source on github <a href="https://github.com/jacobcarvell/react-weather">here</a>.</p>
      </div>
    )
};

module.exports = About;
