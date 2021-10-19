class theTextsParser {

  /* constructor */
  constructor(SkyhubBotResponces) {
    this.SkyhubBotResponces = SkyhubBotResponces;
  } /* close constructor */

  parse(userTexts) {
    const lowerCaseMessage = userTexts.toLowerCase().split(" ").join("");

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hey")) {
      this.SkyhubBotResponces.theGreetMessage()
    } else if (lowerCaseMessage.includes("love")) {
      this.SkyhubBotResponces.loveMessage()
    } else if (lowerCaseMessage === "") {
      this.SkyhubBotResponces.blankMessage();
    } else if (lowerCaseMessage.includes("crew") || lowerCaseMessage.includes("crews") || lowerCaseMessage.includes("stuff") || lowerCaseMessage.includes("stuffs") || lowerCaseMessage.includes("emp") || lowerCaseMessage.includes("member")) {
      this.SkyhubBotResponces.crewMessage();
    } else if (lowerCaseMessage.includes("howare") || lowerCaseMessage.includes("how are ") || lowerCaseMessage.includes("how are ?")) {
      this.SkyhubBotResponces.howareyou();
    } else if (lowerCaseMessage.includes("good") || lowerCaseMessage.includes("great") || lowerCaseMessage.includes("well") || lowerCaseMessage.includes("not")) {
      this.SkyhubBotResponces.AwesomeMessage();
    } else if (lowerCaseMessage.includes("bad") || lowerCaseMessage.includes("terrible") || lowerCaseMessage.includes("horrible")) {
      this.SkyhubBotResponces.badMoodMessage();
    } else if (lowerCaseMessage.includes("thank") || lowerCaseMessage.includes("thanks") || lowerCaseMessage.includes("awesome")) {
      this.SkyhubBotResponces.sayThankMessage();
    } else if (lowerCaseMessage.includes("no") || lowerCaseMessage.includes("eno") || lowerCaseMessage.includes("nah") || lowerCaseMessage.includes("bye") || lowerCaseMessage.includes("cya")) {
      this.SkyhubBotResponces.endingMessage();
    } else if (lowerCaseMessage.includes("best") || lowerCaseMessage.includes("dest") || lowerCaseMessage.includes("top dest")) {
      this.SkyhubBotResponces.favMessage();
    } else if (lowerCaseMessage.includes("price") || lowerCaseMessage.includes("ticket") || lowerCaseMessage.includes("fare")) {
      this.SkyhubBotResponces.ticketMessage();
    } else if (lowerCaseMessage.includes("join") || lowerCaseMessage.includes("club") || lowerCaseMessage.includes("part")) {
      this.SkyhubBotResponces.joinClubMessage();
    } else if (lowerCaseMessage.includes("skyhub") || lowerCaseMessage.includes("company") || lowerCaseMessage.includes("manu")) {
      this.SkyhubBotResponces.companyInfoMessage();
    } else if (lowerCaseMessage.includes("disco") || lowerCaseMessage.includes("cut") || lowerCaseMessage.includes("reduc")) {
      this.SkyhubBotResponces.discountMessage();
    } else if (lowerCaseMessage.includes("hour") || lowerCaseMessage.includes("day") || lowerCaseMessage.includes("long") || lowerCaseMessage.includes("available")) {
      this.SkyhubBotResponces.companyOperationMessage();
    } else if (lowerCaseMessage.includes("colour") || lowerCaseMessage.includes("color") || lowerCaseMessage.includes("colors") || lowerCaseMessage.includes("available")) {
      this.SkyhubBotResponces.favColourMessage();
    } else if (lowerCaseMessage.includes("help") || lowerCaseMessage.includes("assist") || lowerCaseMessage.includes("aid")) {
      this.SkyhubBotResponces.askingForHelpMessage();
    } else if (lowerCaseMessage.includes("really") || lowerCaseMessage.includes("sure") || lowerCaseMessage.includes("positive")) {
      this.SkyhubBotResponces.convincingMessage();
    } else if (lowerCaseMessage.includes("stupid") || lowerCaseMessage.includes("dumb") || lowerCaseMessage.includes("annoy") || lowerCaseMessage.includes("idiot") || lowerCaseMessage.includes("retard") || lowerCaseMessage.includes("irrita")) {
      this.SkyhubBotResponces.badMessage();
    }
  }
}

export default theTextsParser;
