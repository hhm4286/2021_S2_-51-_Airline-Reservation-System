import React from 'react';
// import { transform } from '@babel/core';

class OtherWeatherData extends React.Component {



  getSunsetSunRise = (timestamp) => {
    let date = new Date(timestamp * 1000);
    let time = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60000;
    let utc = time + localOffset;
    let newDate = new Date(utc + (1000 * this.props.data.timezone));
    return newDate;
  }

  formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();

    //let seconds = date.getSeconds();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    let ampm = 'am';
    if (hours > 12) {
      hours = hours - 12;
      ampm = 'pm';
    } else if (hours === 0) {
      hours = 12;
      ampm = 'am'
    } else if (hours === 12) {
      ampm = 'pm'
    }
    return hours + ":" + minutes + " " + ampm;
  }

  render() {

    const MiDivisor = 1609.344;
    const PaDivisor = 1000;

    if (this.props.data.main) {
      let sunrise = this.props.data.sys.sunrise;
      let sunset = this.props.data.sys.sunset;
      let transform = {
        transform: 'rotate(' + (this.props.data.wind.deg + 90) + 'deg)',
      };

      return (
        <div className="otherWeatherData">
          <div className="windSpeed">

            <h1>{this.props.data.wind.speed} m/s</h1>
            <h2>Wind</h2>

          </div>

          <div className="weatherInfoContainer">
            <div className="left_block">
              <h1>{(this.props.data.visibility / MiDivisor).toFixed(2)} MI</h1>
              <h2>Visibility</h2>

              <h1>{this.props.data.main.pressure / PaDivisor} Polar air</h1>
              <h2>Pressure</h2>
            </div>

            <div className="right_block">
              <h1>{this.props.data.main.humidity} %</h1>
              <h2>Humidity</h2>
              <div className="setRise">

                <div className='sunrise'>
                  <h1>{this.formatTime(this.getSunsetSunRise(sunrise))}</h1>
                  <h2>Sunrise</h2>
                </div>

                <div className='sunset'>
                  <h1>{this.formatTime(this.getSunsetSunRise(sunset))}</h1>
                  <h2>Sunset</h2>
                </div>

              </div>

            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

export default OtherWeatherData;