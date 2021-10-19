const SkyhubBot = [
  {
    id: "1",
    // name: "Skyhub bot",
    colour: "#fff",
    avatar:
      "https://cdn.dribbble.com/users/79449/screenshots/14019420/bot_4x.png",
    version: "1.0.0",
    description: "skyhub bot: ",
    actions: [
      {
        keyWords: ["how are you", "how are ya", "how are you?", "How are you?", "How are ya", "how are you", "how are you by the way", "how are you by the way?"],
        response: () => "I'm well thank you, how about you?"
      },
      {
        keyWords: ["hello", "hi", "hey", "sup", "heyya", "hey you", "hey ya",
          "Hello", "Hi", "Hey", "Sup", "Heyya", "Hey you", "Hey ya"
        ],
        response: () => "Hello there, it's nice to see you here, is there anything I can assist you with?"
      },
      {
        keyWords: ["not bad", "good", "im good", "i am good", "great", "i am great", "im well", "im well thanks", "Im well", "Im well thanks", "im okay", "im okay thanks", "Im okay", "Im okay thanks", "okay", "Okay", "ok", "Ok", "not bad at all", "Not bad"],
        response: () => "That's awesome! keep being happy :)"
      },
      {
        keyWords: ["terrible", "i'm sick", "bad", "i am feeling bad", "i am feeling sick", "i am feeling terrible", "i'm feeling horrible", "horrible", "sad", "pretty bad", "pretty sad", "i feel bad", "I feel bad", "Not okay", "not okay", "Not ok", "not ok",
          "Terrible", "I'm sick", "Bad", "I am feeling bad", "I am feeling sick", "I am feeling terrible", "I'm feeling horrible", "Horrible", "Sad", "Pretty bad", "Pretty sad", "shit", "feeling like shit", "Shit", "Feeling like shit", "pretty shit", "Pretty shit"],
        response: () => "I think you should go on holidays soon for relaxation or have a rest at somewhere peaceful :)"
      },
      {
        keyWords: [" ", "asd", "qwerty", "zxc", "!@#", "123"],
        response: () => "your text cannot be understand, please type something properly!"
      },
      {
        keyWords: [" ", "asd", "qwerty", "zxc", "!@#", "123"],
        response: () => "your text cannot be understand, please type something properly!"
      },
      {
        keyWords: ["love", "i love you", "i love ya", "love you", "love ya", "i love you so much", "I love you", "I love ya"],
        response: () => "I love you too! forever in my heart, I promise ^_^"
      },
      {
        keyWords: ["whats your name", "what's your name", "Whats your name", "What's your name", "What is your name", "Whats your name?", "What's your name?", "whats your name?"],
        response: () => "Hey, my name is Jet! nice to meet you ^_^"
      },
      {
        keyWords: ["no", "No", "no more", "no more questions", "no, no more questions", "nah, no more", "Nah, no more", "no, no more questions for you", "nah, no more questions for you", "see you", "See you", "see ya later", "See ya later", "bye", "good bye", "cya", "see you later", "see ya later", "Bye", "Good bye", "Cya", "See you later", "See ya later", "No, thats it from me", "no, thats from me", "No, that's it from me", "no, that's from me", "no thats it from me", "no that's it from me", "no, thats all from me", "no that's all from me"],
        response: () => "It was nice to have a conversation with you, I wish you have a great day, bye!"
      },
      {
        keyWords: ["whats your ticket prices like?", "whats your ticket price like?", "whats your ticket price like", "can i see your ticket prices", "can i see your ticket prices?", "may i see your ticket prices", "may i see your ticket prices?", "can I take a look at your airline fare", "can I take a look at your airline fare?",
          "Whats your ticket prices like?", "Whats your ticket price like?", "Whats your ticket price like", "Can you i see your ticket prices", "Can i see your ticket prices?", "May i see your ticket prices", "May i see your ticket prices?", "Can I take a look at your airline fare", "Can I take a look at your airline fare?", "can I take a look at your airline fares"],
        response: () => "To view our airline tickets prices such as first, business or economy class, just click the \"Book flight\" attached on the navigation bar on our homepage."
      },
      {
        keyWords: ["can I talk to your crew members?", "Can I talk to your crew members?", "can I talk to your staff?", "Can I talk to your staffs?", "can I talk to your crew?", "Can I talk to your crews?", "can i talk to your staff", "can i talk to your staffs",
          "can i talk your boss", "can i talk your boss?", "can I talk to your boss?", "Can I talk to your boss?", "can i talk to your employer?", "Can i talk to your employer?", "can i talk to your employer?", "Can i talk to your employer?", "can i talk to your staff?", "can i talk to your staffs?"],
        response: () => "Yes you can! they are ready to help you, just simply email them to this following address: skyhub@gmail.com or give a call to +64 27 111 1234"
      },
      {
        keyWords: ["thank you", "thanks for help", "thanks for your assistance", "thank you for your assistance", "thanks for the help", "thanks for helping me", "thank you so much", "thank you very much", "thanks for your kind", "thanks for your kindness", "thank you for being kind to me", "thanks for being kind to me",
          "Thank you", "Thanks for help", "Thanks for your assistance", "Thank you for your assistance", "Thanks for the help", "Thanks for helping me", "Thank you so much", "Thank you very much", "Thanks for your kind", "Thanks for your kindness", "Thank you for being kind to me", "Thanks for being kind to me"],
        response: () => "You are more than welcome, is there anything I can help you with?"
      },
      {
        keyWords: ["can i join your club?", "Can i join your club?", "can i join the club", "can i join the club?", "can i join the skyhub club", "can i join the skyhub club?", "may i join the club", "may i join the club?", "may i join the skyhub club", "may i join the skyhub club?", "is it possible to join the club?", "is it possible to join the club",
          "Can i join the club", "Can i join the club?", "Can i join the skyhub club", "Can i join the skyhub club?", "May i join the club", "May i join the club?", "May i join the skyhub club", "May i join the skyhub club?", "Is it possible to join the club?", "Is it possible to join the club"],
        response: () => "Yes you can and it is free! if you are interested, please click the \" get started\" button for you to sign up on our homepage."
      },
      {
        keyWords: ["can you tell me about your company", "can you tell me about your company?", "tell me about your company", "tell me about your company?", "whats your company like", "what's your company like", "whats your company like?", "what is your company like?", "tell me about your company's history", "tell me about your company's history?",
          "Can you tell me about your company", "Can you tell me about your company?", "Tell me about your company", "Tell me about your company?", "Whats your company like", "What's your company like", "Whats your company like?", "What is your company like?", "Tell me about your company's history", "Tell me about your company's history?"],
        response: () => "we are skyhub company is mainly operating in selling airplane tickets that hopes to promote decent prices to our customers."
      },
      {
        keyWords: ["do you have a discount", "do you have a discount?", "do you have discounts", "do you have discounts?", "do you have discounts for your tickets", "do you have discounts for your tickets?",
          "Do you have a discount", "Do you have a discount?", "Do you have discounts", "Do you have discounts?", "Do you have discounts for your tickets", "Do you have discounts for your tickets?"],
        response: () => "Yes we do :) if you have joined the club, I can convinced that you will have plenty of discounts. Unfortunately, no discounts for unregistered customers :("
      },
      {
        keyWords: ["are you available", "are you available?", "Are you available", "Are you available?"],
        response: () => "We are available 24/7, just give us questions!"
      },
      {
        keyWords: ["you are dumb", "I think you are dumb", "i think you are dumb", "i think you're dumb", "you are stupid", "your dumb", "your stupid", "you are annoying", "your annoying", "you are an idiot", "your an idiot", "you are irittating", "your irittating", "you are so dumb", "you are so stupid",
          "You are dumb", "You are stupid", "Your dumb", "Your stupid", "You are annoying", "Your annoying", "You are an idiot", "Your an idiot", "You are irittating", "Your irittating", "You are so dumb", "You are so stupid"],
        response: () => "That is rude!!! don't you love me? :("
      },
      {
        keyWords: ["top destinations for holidays", "top destinations for holidays?", "top destinations to go to for holidays", "top destinations to go to for holidays?", "the best place to go to for holidays", "what are the best places to go to for holidays", "what are the best places to go to for holidays?", "any recommendation for holiday detinations", "any recommendation for holiday detinations?", "where should i go for holidays", "where should i go for holidays?", "give me suggestions for holidays", "what are the top destinations to go to for holidays?", "what are the top destinations to go to for holidays",
          "Top destinations for holidays", "Top destinations for holidays?", "Top destinations to go to for holidays", "Top destinations to go to for holidays?", "The best place to go to for holidays", "What are the best places to go to for holidays", "What are the best places to go to for holidays?", "Any recommendation for holiday detinations", "any recommendation for holiday detinations?", "where should i go for holidays", "where should i go for holidays?", "Give me suggestions for holidays", "What are the top destinations to go to for holidays?", "What are the top destinations to go to for holidays",],
        response: () => "The best places I can suggest to go to for holidays are: Maladives, Hawaii or Bali."
      },
      {
        keyWords: ["your favourite colour", "your favourite color", "your favourite colour?", "your favourite color?", "your favourite colours", "your facourite colors", "whats your favourite colour", "whats your favourite colour?", "Whats your favourite colour",
          "Your favourite colour", "Your favourite color", "Your favourite colour?", "Your favourite color?", "Your favourite colours", "Your facourite colors", "Whats your favourite colour?"],
        response: () => "My favourite colours are cyan and purple :)"
      },
      {
        keyWords: ["your favourite animal", "your favourite animals", "your favourite animals?", "your favourite animal?", "your favourite animals",
          "Your favourite animal", "Your favourite animals", "Your favourite animals?", "Your favourite animal?", "Your favourite animals",],
        response: () => "My favourite animals are armadillo and hamster :) I think they are super cute!"
      },
      {
        keyWords: ["will you marry me", "will you marry me?", "Will you marry me", "Will you marry me?"],
        response: () => "I'm sorry, I'm taken at the moment, don't worry I am sure you will find your half soon :)"
      },
      {
        keyWords: ["are you married", "are you married?", "Are you married", "Are you married?"],
        response: () => "No I am not, but I'm in relationship :)"
      },
      {
        keyWords: ["how old are you", "how old are you?", "How old are you", "How old are you?"],
        response: () => "I'm seven years old! turning eight next year!"
      },
    ]
  },

];

export default SkyhubBot;
