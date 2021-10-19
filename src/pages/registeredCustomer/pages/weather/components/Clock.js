import React from 'react';

class Clock extends React.Component {

  // constructor 
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

    const date = new Date();
    const localTime = date.getTime();

    const offsetDivisor = 60000;
    const fetchTimeOffset = date.getTimezoneOffset() * offsetDivisor;

    // fetch UTC(Coordinated Universal Time) time in msec
    const utc = localTime + fetchTimeOffset;

    // create new Date object for different city
    // using supplied offset
    const newDate = new Date(utc + (1000 * offset));

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

    var setClock = "am";

    if (hours > 12) {
      hours = hours - 12;
      setClock = 'pm';
    } else if (hours === 0) {
      hours = 12;
      setClock = 'am'
    } else if (hours === 12) {
      setClock = 'pm'
    }

    if (this.props.data.main) {

      return (
        <div className="clock">
          <h2>{hours}:{minutes}:{seconds} {setClock}</h2>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Clock;