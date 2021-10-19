class SkyhubBotResponces {

  /* constructor */
  constructor(readUserTexts, setStateFunc) {
    this.skyhubChatBotMessage = readUserTexts;
    this.configurator = setStateFunc;
  } /* close constructor */

  updateChatbotMessage(message) {

    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
    this.configurator(botFirstMessage => ({
      botFirstMessage, messages: [...botFirstMessage.messages, message]
    }));
  }

  howareyou() {
    const howAreYouMessage = this.skyhubChatBotMessage("I'm well thank you! how about you? :)")
    this.updateChatbotMessage(howAreYouMessage)
  };

  blankMessage() {
    const blankMessage = this.skyhubChatBotMessage("I'm sorry your text is not understandable!")
    this.updateChatbotMessage(blankMessage)
  };

  theGreetMessage() {
    const greetingMessage = this.skyhubChatBotMessage("Hello, ask me some questions?")
    this.updateChatbotMessage(greetingMessage)
  };

  loveMessage() {
    const loveMessage = this.skyhubChatBotMessage("Love you too! forever in your heart, I promise ^_^")
    this.updateChatbotMessage(loveMessage)
  };

  AwesomeMessage() {
    const userGoodOrGreatFeeling = this.skyhubChatBotMessage("That is Awesome! keep being happy!")
    this.updateChatbotMessage(userGoodOrGreatFeeling)
  };

  badMoodMessage() {
    const userGoodOrGreatFeeling = this.skyhubChatBotMessage("Oh, I think you should go on holidays soon for relaxation! :)")
    this.updateChatbotMessage(userGoodOrGreatFeeling)
  };

  crewMessage() {
    const crewMessage = this.skyhubChatBotMessage("Yes you can! they are ready to help you, just simply email them to this following address: skyhub@gmail.com or give a call to +64 27 111 1234")
    this.updateChatbotMessage(crewMessage)
  };

  sayThankMessage() {
    const sayThankMessage = this.skyhubChatBotMessage("You are more than welcome, is there anything I can help you with? ")
    this.updateChatbotMessage(sayThankMessage)
  };

  endingMessage() {
    const endingMessage = this.skyhubChatBotMessage("It was nice helping you, have a great day and see you again!")
    this.updateChatbotMessage(endingMessage)
  };

  favMessage() {
    const favMessage = this.skyhubChatBotMessage("the best places I can suggest to go to for holidays are: Maladives, Hawaii or Bali.")
    this.updateChatbotMessage(favMessage)
  };

  ticketMessage() {
    const ticketMessage = this.skyhubChatBotMessage("To view our airline tickets prices such as first, business or economy class, just click the \"Book flight\" attached on the navigation bar on our homepage. ")
    this.updateChatbotMessage(ticketMessage)
  };

  joinClubMessage() {
    const joinClubMessage = this.skyhubChatBotMessage("Yes you can and it is free! if you are interested, please click the \" get started\" button for you to sign up on our homepage.")
    this.updateChatbotMessage(joinClubMessage)
  };

  companyInfoMessage() {
    const companyInfoMessage = this.skyhubChatBotMessage("we are skyhub company is mainly operating in selling airplanes tickets that hopes to promote decent prices to our customers. ")
    this.updateChatbotMessage(companyInfoMessage)
  };

  discountMessage() {
    const discountMessage = this.skyhubChatBotMessage("Yes we do :) if you have joined the club, I can convinced that you will have plenty of discounts. Unfortunately, no discounts for unregistered customers :(");
    this.updateChatbotMessage(discountMessage)
  };

  companyOperationMessage() {
    const companyOperationMessage = this.skyhubChatBotMessage("We are available 24/7, just give us questions!");
    this.updateChatbotMessage(companyOperationMessage)
  };

  favColourMessage() {
    const favColourMessage = this.skyhubChatBotMessage("My favourite colour is cyan and purple :)");
    this.updateChatbotMessage(favColourMessage)
  };

  askingForHelpMessage() {
    const askingForHelpMessage = this.skyhubChatBotMessage("Yes! What can I help you with? ");
    this.updateChatbotMessage(askingForHelpMessage)
  };

  convincingMessage() {
    const convincingMessage = this.skyhubChatBotMessage("I am positive!");
    this.updateChatbotMessage(convincingMessage)
  };

  badMessage() {
    const badMessage = this.skyhubChatBotMessage("That is rude!!! don't you love me? :(");
    this.updateChatbotMessage(badMessage)
  };


}

export default SkyhubBotResponces;
