$(document).ready(function (){
  $('#btnLoad').on('click',function(){
$('#divResult').load('blz258laad.html');
$('#divResult2').load('blz258laad.html #content',
function(){
  $('#divAlert').html('Laden geslaagd');
});
});

})

//de load() method accepteert ook een data argument, waarmee de te laden pagina iets kan doen
