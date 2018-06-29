var game = {
    score: 0,
    text:[{question: "Назовите фамилию ведущего Поле Чудес",
        answer: "ЯКУБОВИЧ"},
        {question: "Назовите фамилию ведущего Угадай Мелодию",
        answer: "ПЕЛЬШ"},
        {question: "Назовите фамилию ведущего КВН",
        answer: "МАСЛЯКОВ"}],
    inputAnswer:"",

    getQuestion:function(){
        var i = 0;
        question.innerHTML = this.text[i].question;
        var showQuestion = setInterval(function(){
            i++;
            question.innerHTML = this.game.text[i].question;
        },5000);
        setTimeout(clearInterval, 14000, showQuestion);
        
    },
    checkAnswer: function(val){
        this.inputAnswer = val.toUpperCase();
        if(this.inputAnswer == game.text[i].answer);
            this.score += 10;
        
    }
        
};