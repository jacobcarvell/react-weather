var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSeach: function (location) {
    var that = this;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
    }, function (errorMessage) {
      alert(errorMessage);
      that.setState({isLoading: false});
    });
  },
  render: function () {
    var {isLoading, location, temp} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h5>Fetching the weather...</h5>;
      } else if (temp && location) {
        return <WeatherMsg location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h2>Get Weather</h2>
        <WeatherForm onSearch={this.handleSeach}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
