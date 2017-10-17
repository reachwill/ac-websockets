var socket = io();

socket.on('serverOutput',function(data){
  console.log(data.vid);
  if(document.getElementById('vid1')){

    $('#overlay').hide();

    $('#remotePage').load('pages/' + data.page,function(){
      $('#vidSource').attr('src','video/' + data.vid)
      document.getElementById('vid1').load();
      document.getElementById('vid1').play();
      document.getElementById('vid1').onended=resetVid;
    });
  }
});

function resetVid(){
  // $('#vidSource').attr('src','video/vid1.mp4')
  // document.getElementById('vid1').load();
  // document.getElementById('vid1').pause();
  $('#overlay').fadeIn();
}

$(document).ready(function(){
  $('.vidLink').click(function(){
    var vid = $(this).data('vid');
    var page = $(this).data('page');
    socket.emit('clientInput',{vid:vid,page:page});
  });
});
