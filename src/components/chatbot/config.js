import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "skyhub bot",

  initialMessages: [createChatBotMessage("Hello there, glad to see you here :) I'm the skyhub bot, is there anything I can assist you with?", {
  }),
  ],

  customStyles: {

    botMessageBox: {
      backgroundColor: "#376B7E",
    },

    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config
