var React = require('react');

var WeatherMessage = ({location, temp}) => {
		return (
			<h4>It is {temp} in {location}</h4>
		);
}

module.exports = WeatherMessage;