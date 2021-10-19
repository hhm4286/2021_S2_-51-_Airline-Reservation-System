import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  onChangeText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (e) => {
    const { text } = this.state;

    e.preventDefault()
    if (text.length > 0) {
      this.props.getMessage(text)
      this.setState({ text: "" })
    }
  }

  render() {
    const { text } = this.state;
    return (

      <form onSubmit={(value) => { this.handleSubmit(value) }} autoComplete="off">

        <Grid container style={{ justifyContent: 'centre', alignItems: 'center' }}>

          {/* message field */}
          <Grid item xs={10}>
            <TextField style={{ margin: "10px", color: '#1096F5', borderColor: '#1096F5' }} placeholder="message field" label="Type your message" variant="outlined" fullWidth onChange={(value) => { this.onChangeText(value) }} value={text} /* id="standard-basic" */ />
          </Grid>

          {/* send button */}
          <Grid item xs={0}>
            <Button style={{ margin: "20px", backgroundColor: '#1096F5' }} onClick={(value) => { this.handleSubmit(value) }} variant="contained" color="primary">
              send
            </Button>
          </Grid>

        </Grid>

      </form>
    );
  }
}

export default Input;
