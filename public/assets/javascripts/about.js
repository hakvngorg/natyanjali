$(document).ready(function(){

  // Hide div 2 by default
  $('#aboutus').slideDown("1000" , function(){});
  $('#school').hide();
  $('#teacher').hide();
  $('#manager').hide();
   
	
  
  $('#button1').click(function(){ 
      
  $('#aboutus').slideDown("1000" , function(){});
  $('#school').hide();
  $('#teacher').hide();
  $('#manager').hide();
  });
	$('#button2').click(function(){ 
      
  $('#school').slideDown("1000" , function(){});
  $('#aboutus').hide();
  $('#teacher').hide();
  $('#manager').hide();
  });
  
  
  $('#button3').click(function(){ 
      
  $('#teacher').slideDown("1000" , function(){});
  $('#aboutus').hide();
  $('#school').hide();
  $('#manager').hide();
  });
  
  $('#button4').click(function(){ 
      
  $('#manager').slideDown("1000" , function(){});
  $('#aboutus').hide();
  $('#teacher').hide();
  $('#school').hide();
  });
  
  });