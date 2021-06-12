class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("yellow");
    fill(0);
    textSize(30);
    //write code to show a heading for showing the result of Quiz
    text("RESULT OF THE QUIZ",340,50);
    text("--------------------",320,65);
    Contestant.getPlayerInfo();
    //call getContestantInfo( ) here
    if(allContestants !== undefined){
      debugger;
      var display_answers=230;
      fill("blue");
      textSize(20);
      text("*NOTE:CONTESTANTS WHO ANSWERED CORRECT ARE HIGHLIGHTED IN GREEN COLOUR",130,230);
      for(var plr in allContestants ){
          debugger;
          var correctAns="2"
      }
     
     
     
      if(correctAns === allContestants[plr].answer){
          fill("green")
      
          display_answers+=30;
         textSize("20");
         text(allContestants[plr].name + ":" + allContestants[plr].answer,250,display_answers)
          
      }
    }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
