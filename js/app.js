$(document).ready(function() {

  $('#star').click(function(){
    var nh = Math.floor(0 + Math.random() * 1000);
    var nw = Math.floor(100 + Math.random() * 1000);
    $('#star').hide();

    var d = document.getElementById('star');
    d.style.position = "absolute";
    d.style.left = nw + 'px';
    d.style.top = nh + 'px';
    $('#star').show();


  });

});
