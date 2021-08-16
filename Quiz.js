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
    
    question.hide(); 

    background("Yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
      text("Solution : The present age of Mini = Past age of Mickey The present age of Mini = 2x",90,330);
      text("The present age of Mickey = 2x + x = 3x",90,350);
      text("The ratio of their ages= 3x:2x = 3:2",90,380);
      for(var plr in allContestants){
        debugger;
        var correctAns = "2";

       if (correctAns !== allContestants[plr].answer){
           fill("Red")
         }
         else{
          fill("green");
         }
       

         /*if (correctAns === allContestants[plr].answer){
           fill("Green")
         }
         else{
           fill("red");
         }
         */

        /* if (correctAns === allContestants[plr].answer){
           fill("red")
         }
         else{
           fill("green");
         }*/

       /*if (correctAns = allContestants[plr].answer){
           fill("Green")
         }
        else{
          fill("red");
        }*/

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    }
  }
}
