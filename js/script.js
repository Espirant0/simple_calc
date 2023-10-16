jQuery('document').ready(function(){
		jQuery('#addition').on('click', function(){
		var value1, value2, value3;
			value1 = jQuery('#val1').val();
			value2 = jQuery('#val2').val();
			value1=parseInt(value1);
			value2=parseInt(value2);
			value3 = value1+value2;		
			jQuery('#answer').html(value3);
		})
			jQuery('#multiple').on('click', function(){
		var value1, value2, value3;
			value1 = jQuery('#val1').val();
			value2 = jQuery('#val2').val();
			value1=parseInt(value1);
			value2=parseInt(value2);
			value3 = value1*value2;
			jQuery('#answer').html(value3);
		});
		jQuery('#substraction').on('click', function(){
		var value1, value2, value3;
			value1 = jQuery('#val1').val();
			value2 = jQuery('#val2').val();
			value1=parseInt(value1);
			value2=parseInt(value2);
			value3 = value1-value2;
			jQuery('#answer').html(value3);		
		});
		jQuery('#division').on('click', function(){	
		var value1, value2, value3;
			value1 = jQuery('#val1').val();
			value2 = jQuery('#val2').val();
			value1=parseInt(value1);
			value2=parseInt(value2);
			value3 = value1/value2;
			jQuery('#answer').html(value3);			
			
		});
		document.getElementById("clearButton").onclick = function(e){
  		document.getElementById("val1").value = "" ,
  		document.getElementById("val2").value = "";
		jQuery('#answer').html("");
		}
		});
		
		