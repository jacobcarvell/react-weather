var React = require('react');

var WeatherMsg = ({location, temp}) => {
  return (
    <h3 className="text-center">It's {temp} degrees celsius in {location}.</h3>
  );
}

module.exports = WeatherMsg;
