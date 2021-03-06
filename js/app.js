console.log("Code Works");
var timer = null;
let name = "Guest Player"
var highScore = [
      {name:'Player 1', time: 10},
      {name:'Player 1', time: 12},
      {name:'Player 1', time: 14},
      {name:'Player 1', time: 16},
      {name:'Player 1', time: 18},
      {name:'Player 1', time: 20},
      {name:'Player 1', time: 22},
      {name:'Player 1', time: 24},
      {name:'Player 1', time: 26},
      {name:'Player 1', time: 30}
    ];
var highScore2 = [
      {name:'Player 1', time: 15},
      {name:'Player 1', time: 18},
      {name:'Player 1', time: 21},
      {name:'Player 1', time: 24},
      {name:'Player 1', time: 27},
      {name:'Player 1', time: 30},
      {name:'Player 1', time: 32},
      {name:'Player 1', time: 34},
      {name:'Player 1', time: 36},
      {name:'Player 1', time: 40}
    ];
var highScore3 = [
      {name:'Player 1', time: 20},
      {name:'Player 1', time: 22},
      {name:'Player 1', time: 24},
      {name:'Player 1', time: 26},
      {name:'Player 1', time: 28},
      {name:'Player 1', time: 30},
      {name:'Player 1', time: 35},
      {name:'Player 1', time: 40},
      {name:'Player 1', time: 50},
      {name:'Player 1', time: 60},
    ];

var highScoreBoardList = [highScore, highScore2, highScore3];
var maxCount
var displayTime;
var count = 0;

function sortNumber(a, b){ // sorts time
  return a.time - b.time;
}

function updateLeaderboard(){ // updates names and times
  $("#one").text(highScore[0].time);
  $("#first-name").text(highScore[0].name);
  $("#two").text(highScore[1].time);
  $("#second-name").text(highScore[1].name);
  $("#three").text(highScore[2].time);
  $("#third-name").text(highScore[2].name);
  $("#four").text(highScore[3].time);
  $("#fourth-name").text(highScore[3].name);
  $("#five").text(highScore[4].time);
  $("#fifth-name").text(highScore[4].name);
  $("#six").text(highScore[5].time);
  $("#sixth-name").text(highScore[5].name);
  $("#seven").text(highScore[6].time);
  $("#seventh-name").text(highScore[6].name);
  $("#eight").text(highScore[7].time);
  $("#eighth-name").text(highScore[7].name);
  $("#nine").text(highScore[8].time);
  $("#nineth-name").text(highScore[8].name);
  $("#ten").text(highScore[9].time);
  $("#tenth-name").text(highScore[9].name);
}

function initializeGame(){
//var countS = 0;
  count = 0;
  var runSentence = true;
  var gameEnd = false;
  var startTime = Date.now();
  var sentenceList = [
    "Twinkle Twinkle Little Star",
    "hijklmnop",
    "abcdefg",
    "MasterClass",
    // "The quick brown fox jumped over the lazy dogs.",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  timer = setInterval(updateDisplay, 1); //updates timer every millisecond when start button is pushed

  function updateDisplay(){
      if(gameEnd == true){  // stops timer when game ends
        clearInterval(timer);
        return;
      }
      displayTime = Math.round((Date.now() - startTime)/10)/100;
      stopwatch.innerHTML = displayTime;
      console.log(timer)
  }


  $('#star').bind("click", function(){
    var nh = Math.floor(Math.random() * 30);
    var nw = Math.floor(Math.random() * 70);
    $('#star').hide();
    count++;
    checkStarsCount();
    if(runSentence == true){
       setTimeout(randomSentence(), 1000);
    }
    var d = document.getElementById('star');
    d.style.position = "absolute";
    d.style.left = nw + 'em';
    d.style.top = nh + 'em';
    // var divElement = document.getElementById('div');
    // divElement.style.position = "absolute";
    // divElement.style.left = nw + 'em';
    // divElement.style.top = nh + 'em';
    $('#star').show();
  });

  function randomSentence(){
    var num = Math.floor(Math.random() * 12);
    if(sentenceList[num] != null){
      var typePhrase = prompt(sentenceList[num]);
        while(typePhrase != sentenceList[num]){
          typePhrase = prompt(sentenceList[num]);
          // countS++;

        }
    }
  }

    // function setSentenceRatio(){
    //   if(maxCount == 10){
    //     if(countS == 3){
    //       runSentence = false;
    //     }
    //   }
    //   if(maxCount == 20){
    //     if(countS == 6){
    //       runSentence = false;
    //     }
    //   }
    //   if(maxCount == 30){
    //     if(countS == 10){
    //       runSentence = false;
    //     }
    //   }
    // }

} //initializeGame ending bracket

function checkStarsCount(){
  console.log(maxCount)
  if(count == maxCount){
    $('#star').unbind("click");
    var recordTime = stopwatch.innerHTML;
    clearInterval(timer);
    if(displayTime < highScore[9].time){
      highScore[9].time = displayTime;
      highScore[9].name = name;
      highScore.sort(sortNumber);
      console.log(timer, highScore)
      updateLeaderboard();
    }
  }
}

$(document).ready(function() {
  maxCount = parseInt($('.selectpicker :selected').val());
  $('#name-submit').on('submit', function(event){
    event.preventDefault();
    name = $('.username').val();
    console.log(name);
  });
$(".selectpicker").on('change', function(){
  maxCount = parseInt($('.selectpicker :selected').val());
  if(maxCount == 10){
    highScore = highScoreBoardList[0];
    updateLeaderboard();
  }
  if(maxCount == 20){
    highScore = highScoreBoardList[1];
    updateLeaderboard();
  }
  if(maxCount == 30){
    highScore = highScoreBoardList[2];
    updateLeaderboard();
  }
});

  $('#start-button').on("click", function(){ //starts game through button
    if (timer != null){
      clearInterval(timer);
    }
    initializeGame();
  });
});
