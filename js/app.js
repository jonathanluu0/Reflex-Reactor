console.log("Code Works");
var timer = null;
var highScore        = [10, 11, 12, 13, 14];
var highScore2       = [11, 12, 13, 14, 15];
var highScore3       = [12, 13, 14, 15, 20];
var highScoreBoardList = [highScore, highScore2, highScore3];
var maxCount = parseInt($('.selectpicker :selected').val());
var displayTime;
var count = 0;

function sortNumber(a, b){
  return a - b;
}
function updateLeaderboard(){
  $("#one").text(highScore[0])
  $("#two").text(highScore[1])
  $("#three").text(highScore[2])
  $("#four").text(highScore[3])
  $("#five").text(highScore[4])
}

function initializeGame(){
  // var countS = 0;
  count = 0;
  var runSentence = true;
  var gameEnd = false;
  var startTime = Date.now();
  var sentenceList = [
    "Twinkle Twinkle Little Star",
    "The quick brown fox jumped over the lazy dogs.",
    "abcdefg",
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ];
  timer = setInterval(updateDisplay, 1);

  function updateDisplay(){
      if(gameEnd == true){
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
    $('#star').show();
  });

  function randomSentence(){
    var num = Math.floor(Math.random() * 9);
    if(sentenceList[num] != null){
      var typePhrase = prompt(sentenceList[num]);
        if(typePhrase != sentenceList[num]){
          prompt(sentenceList[num]);
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
    //     if(countS == 12){
    //       runSentence = false;
    //     }
    //   }
    // }

} //initializeGame ending bracket

function checkStarsCount(){
  if(count == maxCount){
    $('#star').unbind("click");
    var recordTime = stopwatch.innerHTML;
    clearInterval(timer);
    if(displayTime < highScore[4]){
      highScore[4] = displayTime;
      highScore.sort(sortNumber);
      console.log(timer, highScore)
      updateLeaderboard();
    }
  }
}

$(document).ready(function() {
  $('#name-submit').on('submit', function(event){
    event.preventDefault;
    let name = $('.name').val();
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


  $('#start-button').on("click", function(){
    if (timer != null){
      clearInterval(timer);
    }
    initializeGame();
  });
});
