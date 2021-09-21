import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  tick = (timezone) => {
    this.setState({
      date: this.getTime(timezone),
    });
  }

  getTime = (offset) => {

    let date = new Date();
    let localTime = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60000;

    // obtain UTC time in msec
    let utc = localTime + localOffset;

    // create new Date object for different city
    // using supplied offset
    let newDate = new Date(utc + (1000 * offset));

    if (newDate.getHours() > 18 || (newDate.getHours() >= 0 && newDate.getHours() <= 4)) {
      this.props.day_Night('n');
    } else {
      this.props.day_Night('d');
    }

    return newDate;
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(this.props.data.timezone),
      1000
    );
  }

  render() {
    let hours = this.state.date.getHours();
    let minutes = this.state.date.getMinutes();
    let seconds = this.state.date.getSeconds();

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    let ampm = "am";

    if (hours > 12) {
      hours = hours - 12;
      ampm = 'pm';
    } else if (hours === 0) {
      hours = 12;
      ampm = 'am'
    } else if (hours === 12) {
      ampm = 'pm'
    }

    if (this.props.data.main) {

      return (
        <div className="clock">
          <h2>{hours}:{minutes}:{seconds} {ampm}</h2>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Clock;