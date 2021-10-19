import React, { Component } from "react";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
class MessageBox extends Component {

  /* constructor */
  constructor(props) {
    super(props)
    this.state = {
      messages: this.props.messages,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ messages: newProps.messages });
  }

  render() {

    const { messages } = this.state;

    return (
      <div
        style={{
          height: window.innerHeight - 100,
          width: "100%",
          borderRadius: 10,
          backgroundColor: '#fff',
          overflow: 'scroll'
        }}
      >

        {messages.map(element => {
          if (element.from === "user") {
            return (
              <UserMessage key={element.id} message={element} />
            )
          }
          return (
            <BotMessage key={element.id} message={element} />
          )
        })}
      </div>
    );
  }
}
export default MessageBox;
