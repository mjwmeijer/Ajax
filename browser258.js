$(document).ready(function (){
  $('#btnLoad').on('click',function(){
$('#divResult').load('blz258laad.html');
$('#divResult2').load('blz258laad.html #content',
function(){
  $('#divAlert').html('Laden geslaagd');
});
$.ajax({
  url:'blz258laad.html',
  success:function(data){
    $('#divResult3').html(data.filter('#ajax'))
  },
  error:function(){
    $('#divResult3').html('Fout: er is iets fouts gegaan!')
  }
  });
});

})

//de load() method accepteert ook een data argument, waarmee de te laden pagina iets kan doen
