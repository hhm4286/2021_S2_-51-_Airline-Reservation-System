import './registeredCustomer.scss';
import NavBar from './NavBar';
import React from 'react';
import Home from './pages/home/Home';
import CoronaTracker from './pages/covid-19/CoronaTracker';
import WeatherApp from './pages/weather/WeatherApp';
import ChatBot from './pages/chatbot/Chatbot';
import Ticket from './pages/ticket/Ticket';
import { Switch, Route } from 'react-router-dom';

function RegisteredCustomer() {
    return (
        <>
            <div className="sidebar">
                <NavBar />
            </div>

            <div className="main-content">
                <div className="content">
                    <Switch>
                        <Route path="/Home" exact>
                            <Home />
                        </Route>
                        <Route path="/CoronaTracker" exact>
                            <CoronaTracker />
                        </Route>
                        <Route path="/WeatherChecker" exact>
                            <WeatherApp />
                        </Route>
                        <Route path="/ChatBot" exact>
                            <ChatBot />
                        </Route>
                        <Route path="/BuyTicket" exact>
                            <Ticket />
                        </Route>
                    </Switch>
                </div>
            </div>

        </>
    )
}

export default RegisteredCustomer
