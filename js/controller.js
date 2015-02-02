var prevAction = "";

function getJson(){
	//call the server and get the JSON object
	//object = $('#JSON').val();
	$.ajax({
	  dataType: "json",
	  url: "http://127.0.0.1:8080",
	  success: function(object){
	  	if(object!==""){
			obj = object;
			if(obj.action=="Lock"){
				Lock(true);
			}else{
				if(prevAction !== obj.action){
					changeGesture(obj.action, obj.gesture);
					prevAction = obj.action;
				}
			}
		}
	  }
	});
	//input = '{"action":"Start","gesture":"Unlock Gesture"}'
	// object = data;
	
 }

setInterval(getJson, 500);

function changeConfiguration(select){
	var config = select.value;
	// Send the configuration to Myo (1,2,3)
	
	//Initialize the system to shutdown
	var action = "Shutdown";
	var gesture = ""
	
	// if (config == "2"){
	// 	gesture ="Syncing Gesture";
	// }else{
	// 	gesture ="Open Palm moving down";
	// }
	changeGesture(action, gesture);
}

function changeGesture(action, gesture){

	$('#symbol').fadeOut("slow", function(){
		if (action=="Unlock"){
			Lock(false);
		}
		
		$(this).attr('src','images/'+action+'.png');
		$(this).fadeIn("fast");
		$('#symbol').attr('alt', action);
		//change action & gesture
		$('#action').text(action);
		$('#gesture').text(gesture);
   });
}

// action = true/ false
function Lock(action){
	if (action){
		$('#lock').css("display", "block");
	}else{
		$('#lock').css("display", "none");
	}
}

