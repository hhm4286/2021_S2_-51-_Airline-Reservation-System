import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import BotResponces from './BotResponces';
import userTextsParser from './userTextsParser';
import config from './config';
import './chatbot.scss'

// import ChatBot from 'react-simple-chatbot';  // newly proposed chatBot package
function ChatBot() {
    return (
        <div className="ChatBot">
            <header className="botHeader">
                <Chatbot config={config}
                    actionProvider={BotResponces}
                    messageParser={userTextsParser} />
            </header>
        </div>
    );
}

export default ChatBot;
