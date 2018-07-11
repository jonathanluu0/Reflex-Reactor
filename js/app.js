console.log("Code Works");
var timer = null;
function initializeGame(){
  var count = 0;
  // var countS = 0;
  var runSentence = true;
  var gameEnd = false;
  var highScore        = [10, 11, 12, 13, 14];
  var highScore2       = [11, 12, 13, 14, 15];
  var highScore3       = [12, 13, 14, 15, 20];
  var highScoreBoardList = [highScore, highScore2, highScore3,]
  var maxCount = parseInt($('.selectpicker :selected').val());
  // var totalGameTime;
  var startTime = Date.now();
  var displayTime;
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
      // var milliseconds = Math.floor(timeDifference % 100);
      // var seconds = Math.floor((timeDifference / 1000) % 60);
      // var minutes = Math.floor((timeDifference / (1000*60)) % 60);
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
    var num = Math.floor(Math.random() * 10);
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
    function sortNumber(a, b){
      return a - b;
    }
    function checkStarsCount(){
      if(count == maxCount){
        $('#star').unbind("click");
        var recordTime = stopwatch.innerHTML;
        clearInterval(timer);
     if(displayTime < highScore[4]){
  			highScore[4] = displayTime;
  			highScore.sort(sortNumber);
          console.log(timer, highScore)
        $("#one").text(highScore[0])
        $("#two").text(highScore[1])
  			$("#three").text(highScore[2])
        $("#four").text(highScore[3])
        $("#five").text(highScore[4])
      }
    }
  }
}
$(document).ready(function() {
  $('#start-button').on("click", function(){
    if (timer != null){
      clearInterval(timer);
    }
    initializeGame();
  });
});
