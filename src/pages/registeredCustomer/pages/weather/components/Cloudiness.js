import React from 'react';

class Cloudiness extends React.Component {
  render() {

    if (this.props.data.main) {

      let data = "";
      let array = this.props.data.weather[0].description.split(" ");

      for (let i = 0; i < array.length; i++) {
        data += array[i][0].toUpperCase() + array[i].slice(1) + " ";
      }

      return (
        <div className="cloudiness">
          <p>{data}</p>
        </div>
      );

    } else {
      return null;
    }
  }
}

export default Cloudiness;