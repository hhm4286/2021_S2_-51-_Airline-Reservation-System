import React, { Component } from "react";
import Input from "../Input";
import MessageBox from "../MessageBox";
import Bot from "../SkyhubBot"
class ChatBox extends Component {

  /* constructor */
  constructor(props) {
    super(props);

    this.state = {
      messageArray: [{
        content: "Hi Welcome to Skyhub chatbot! feel free to ask, ensure your spelling of written texts are correct, spaces between words and sensible!",
        from: 'bot',
      }]
    }

    this.getMessage = this.getMessage.bind(this)
    this.botMessage = this.botMessage.bind(this)

  }

  findActions(bot, value) {
    return bot.actions
      .map((actions) => actions.keyWords
        .map((keyWord) => (keyWord === value ? actions.response() : false))
        .filter((action) => (!action ? false : action)))
      .filter((result) => result.length !== 0);
  }

  botResponse(message) {
    Bot.forEach(async (element) => {
      const res = await this.findActions(element, message)
      if (res[0]) {
        this.botMessage(element, res[0])
      }
    })
  }

  botMessage(bot, message) {
    const { id, avatar, name } = bot;

    const newMessage = {
      id: id,
      avatar,
      name,
      content: message[0],
      from: 'bot',
      created_at: Date.now()
    }

    setTimeout(() => {
      this.concatMessages(newMessage)
      this.props.getMessage(newMessage)
    }, 1000)
  }

  async concatMessages(newMessage) {
    const { messageArray } = this.state;
    this.setState({
      messageArray: await messageArray.concat(newMessage)
    })
  }

  async getMessage(message) {
    this.botResponse(message)

    const newMessage = {
      // id: Math.floor(Math.random() * Math.floor(10000)),
      content: message,
      from: 'user',
      created_at: Date.now()
    }

    this.concatMessages(newMessage)
  }

  render() {
    const { messageArray } = this.state;
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <MessageBox messages={messageArray} />
        <Input getMessage={this.getMessage} />
      </div>
    )
  }
}

export default ChatBox;