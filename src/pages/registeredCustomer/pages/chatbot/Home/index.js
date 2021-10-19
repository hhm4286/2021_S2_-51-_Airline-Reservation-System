import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import BotList from "../BotList";
import ChatBox from "../ChatBox";

class Home extends Component {

  /* constructor */
  constructor(props) {
    super(props);

    this.state = {
      arrayMessage: null
    };

    this.getMessage = this.getMessage.bind(this);
  }

  async getMessage(message) {

    this.setState({
      arrayMessage: await message
    });

  }

  render() {
    const { arrayMessage } = this.state;
    return (

      /* length of the vertical on the left side*/
      <Grid container spacing={1} >
        <Grid item xs={2} style={{ height: "99vh" }}>
          <BotList message={arrayMessage} />
        </Grid>

        {/* area's length of the conversation */}
        <Grid item xs={10}>
          <ChatBox getMessage={this.getMessage} />
        </Grid>
      </Grid >
    );
  }
}

export default Home;
