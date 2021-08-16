class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question1 = createElement('h3');
    this.question2 = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question1.html("Question:- Mickey was twice as old as Mini was when Mickey was as old as Mini is." );
    this.question2.html("Find the ratio of the present ages of Mickey and Mini? ");
    this.question1.position(100, 80);
    this.question2.position(100,60)
    this.option1.html("(1) 2:1 " );
    this.option1.position(150, 130);
    this.option2.html("(2) 3:2" );
    this.option2.position(150, 150);
    this.option3.html("(3) 4:3 " );
    this.option3.position(150, 170);
    this.option4.html("(4) 5:4" );
    this.option4.position(150, 190);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);
    this.button2.position(360, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
    })
  }
}
