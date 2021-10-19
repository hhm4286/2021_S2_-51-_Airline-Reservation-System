import React from 'react';

class Temperature extends React.Component {

  render() {

    let temperature, temperature_min, temperature_max;

    if (this.props.data.main) {
      let baseTemperature = 1;
      let baseProd = 1;
      let unitChar = '\xB0F';

      if (this.props.isCelcius) {
        baseTemperature = 273.15
        unitChar = '\xB0C';
      } else {
        baseTemperature = 459.67
        baseProd = 1.8;
      }

      temperature = String(((this.props.data.main.temp * baseProd) - baseTemperature).toFixed(0)) + unitChar;
      temperature_min = String(((this.props.data.main.temperature_min * baseProd) - baseTemperature).toFixed(0)) + unitChar;
      temperature_max = String(((this.props.data.main.temperature_max * baseProd) - baseTemperature).toFixed(0)) + unitChar;

      return (
        <div className='temperature'>
          <h1>{temperature}</h1>
          {this.props.data.main.temperature_max - this.props.data.main.temperature_min > 3 &&
            <h3>{temperature_min} / {temperature_max}</h3>
          }
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Temperature;