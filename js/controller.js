var config = 1;
var action = 5; //default rest

function getJson(){
	//call the server and get the JSON object
	object = $('#JSON').val();
	
	//input = '{"action":"Start","gesture":"Unlock Gesture"}'
	
	if(object!==""){
		obj = JSON.parse(object);
		if(obj.action=="Lock"){
			Lock(true);
		}else{
			changeGesture(obj.action, obj.gesture);
		}
	}
 }

function changeConfiguration(select){
	config = select.value;
	// Send the configuration to Myo (1,2,3)
	
	//Initialize the system to shutdown
	action = "Shutdown";
	var gesture = ""
	
	if (config == "2"){
		gesture ="Syncing Gesture";
	}else{
		gesture ="Open Palm moving down";
	}
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

function getActionNumberFromGesture(gesture, direction){
	var actionNumber = action; //defualt current action
	if(config === 1){
		if(gesture === "REST"){

		}
		if(gesture === "FIST"){

		}
		if(gesture === "WAVE_IN"){
			
		}
		if(gesture === "WAVE_OUT"){
			
		}
		if(gesture === "FINGERS_SPREAD"){
			
		}
		if(gesture === "THUMB_TO_PINKY"){
			
		}
	}

	if(config === 2){
		if(gesture === "REST"){

		}
		if(gesture === "FIST"){

		}
		if(gesture === "WAVE_IN"){
			
		}
		if(gesture === "WAVE_OUT"){
			
		}
		if(gesture === "FINGERS_SPREAD"){
			
		}
		if(gesture === "THUMB_TO_PINKY"){
			
		}
	}

	if(config === 3){
		if(gesture === "REST"){

		}
		if(gesture === "FIST"){

		}
		if(gesture === "WAVE_IN"){
			
		}
		if(gesture === "WAVE_OUT"){
			
		}
		if(gesture === "FINGERS_SPREAD"){
			
		}
		if(gesture === "THUMB_TO_PINKY"){
			
		}
	}
}

function getImageName(actionNumber){
	var action = "";
	switch(actionNumber){
		case 0:
			action = "Start"
			break;
		case 1:
			action = "Stop"
			break;
		case 2:
			action = "Shutdown"
			break;
		case 3:
			action = "Left"
			break;
		case 4:
			action = "Right"
			break;
		case 5:
			action = "Cruise"
			break;
		case 6:
			action = "Unlock"
			break;
		default:
	}
	return action;
}

