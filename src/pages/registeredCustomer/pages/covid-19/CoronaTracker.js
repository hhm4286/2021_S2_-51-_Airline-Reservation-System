import coronatracker from "./coronatracker.scss";
import React from "react";
import styles from "./coronatracker.scss";
import { fetchData } from "./API";
import { Cards, Chart, CountryPicker } from "./components";

class CoronaTracker extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <>
        <div className={styles.container} />
        <div className={coronatracker.container} />
        <h1>Covid-19</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </>
    );
  }
}

export default CoronaTracker;
