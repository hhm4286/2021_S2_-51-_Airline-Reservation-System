import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import Avatar from '@material-ui/core/Avatar';
import './message.css'
class UserMessage extends Component {

  constructor(props) {
    super(props);
    this.message = React.createRef()
  }

  componentDidMount() {
    this.message.current.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    const { message } = this.props;
    return (

      <Grid ref={this.message} container >
        <Grid item xs={7} />

        <Grid
          container
          className="message_container"
          item
          xs={3}
          justify="flex-end"
        >
          <div className="user_message">

            <p style={{ color: "#fff", textAlign: "right", margin: 2 }}>
              {message.content}
            </p>

            <small style={{ color: "#fff" }}>
              {moment(message.created_at).format('LT')}
            </small>

          </div>

          {/* user avatar */}
          <Avatar style={{ marginRight: '10px' }} alt="Remy Sharp" src="" />

        </Grid>

      </Grid>
    );
  }
}

export default UserMessage;
