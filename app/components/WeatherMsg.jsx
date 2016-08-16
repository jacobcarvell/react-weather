var React = require('react');

var WeatherMsg = ({location, temp}) => {
  return (
    <h5>It's {temp} degrees celsius in {location}.</h5>
  );
}

module.exports = WeatherMsg;
