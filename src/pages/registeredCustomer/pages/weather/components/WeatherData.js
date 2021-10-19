import React from 'react';
import { WeatherAPI } from '../APIKeys.js';

class WeatherData extends React.Component {

  getMyLocation = () => {
    var place = null;
    var latitude = null;
    var longitude = null;

    if (window.navigator && window.navigator.geolocation) {
      place = window.navigator.geolocation
    }

    if (place) {
      place.getCurrentPosition((position) => {
        latitude = (position.coords.latitude);
        longitude = (position.coords.longitude);
        this.props.setLatLong(latitude, longitude);
        this.props.setCity(this.props.data.feature);
        // localStorage.setItem('cityName', this.props.data.name);
      });
    }
  }

  getNewData = (data) => {
    this.props.newData(data);
  }

  fetchDataByGeo = (latitude, longitude) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + WeatherAPI;
    fetch(url)
      .then(results => results.json())
      .then((wdata) => {
        this.getNewData(wdata);
      });
  }

  componentDidMount() {
    if (!this.props.latitude) {
      this.getMyLocation();
    }
  }

  componentDidUpdate(previousProps) {
    if (this.props.latitude !== previousProps.latitude || this.props.longitude !== previousProps.longitude) {
      this.fetchDataByGeo(this.props.latitude, this.props.longitude);
    }
  }

  render() {
    return null;
  }
}

export default WeatherData;