console.log("Code Works");
$(document).ready(function() {

  var sentenceList = [
    "Twinkle Twinkle Little Star",
    "The quick brown fox jumped over the lazy dogs.",
    "abcdefghijklmnopqrstuvwxyz",
    null,
    null,
    null
  ];

  function randomSentence(){
    var num = Math.floor(Math.random() * 6);
    if(sentenceList[num] != null){
      var typePhrase = prompt(sentenceList[num]);
        if(typePhrase != sentenceList[num]){
          prompt(sentenceList[num]);
        }
    }
  }


  function gameStart(){
    $('#star').click(function(){
      var nh = Math.floor(Math.random() * 30);
      var nw = Math.floor(Math.random() * 70);
      $('#star').hide();
      setTimeout(randomSentence(), 1000);
      var d = document.getElementById('star');
      d.style.position = "absolute";
      d.style.left = nw + 'em';
      d.style.top = nh + 'em';
      $('#star').show();
    });
  }

  gameStart();
});
