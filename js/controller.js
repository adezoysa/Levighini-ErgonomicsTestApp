var prevAction = "Shutdown";
var prevGesture = "";
var config = 1;

function getJson(){
	//call the server and get the JSON object
	//object = $('#JSON').val();
	$.ajax({
	  dataType: "json",
	  url: "http://127.0.0.1:8080",
	  success: function(object){
	  	if(object!==""){
			obj = object;
			
			
			if(prevAction !== obj.action){
				changeAction(obj.action);
				prevAction = obj.action;
			}

			// if(prevGesture !== obj.gesture){
			// 	changeGesture()
			// }
			
		}
	  }
	});
	//input = '{"action":"Start","gesture":"Unlock Gesture"}'
	// object = data;
	
 }

 // REST,
 //    FIST,
 //    WAVE_IN,
 //    WAVE_OUT,
 //    FINGERS_SPREAD,
 //    DOUBLE_TAP,
 //    UNKNOWN

// Start,
//     Stop,
//     Shutdown,
//     Left,
//     Right,
//     Cruise,
//     Unlock,
//     Lock

// ROTATE_LEFT,
//     ROTATE_RIGHT,
//     MOVE_RIGHT,
//     SPIKE,
//     NONE;
 function getActionFromGesture(gesture){
 	if(gesture.p == "DOUBLE_TAP"){

 	}
 }

// setInterval(getJson, 500);

function changeConfiguration(select){
	config = select.value;
	// Send the configuration to Myo (1,2,3)
	
	//Initialize the system to shutdown
	var action = "Shutdown";
	
	// if (config == "2"){
	// 	gesture ="Syncing Gesture";
	// }else{
	// 	gesture ="Open Palm moving down";
	// }
	changeAction(action);
}

//q = 81
//s = 83
//left = 37
//right = 39
//a = 65
var currentKey = 0;

$(document).keydown(function(e){
	console.log("Key pressed: " + e.keyCode);

	if(e.keyCode != 81 && e.keyCode === currentKey){
		return;
	}

	currentKey = e.keyCode;


	if(e.keyCode == 81){
		changeAction("Shutdown");
	}

	if(e.keyCode == 83){
		changeAction("Stop");
	}

	if(e.keyCode == 37){
		changeAction("Left");
	}

	if(e.keyCode == 39){
		changeAction("Right");
	}

	if(e.keyCode == 65){
		changeAction("Accelerate")
	}
});

$(document).keyup(function(e){
	console.log("Key up: " + e.keyCode);
	if(e.keyCode == 65 || e.keyCode == 37 || e.keyCode ==39 || e.keyCode == 83){
		changeAction("Cruise");
	}

	currentKey = 0;
});

function changeGesture(gesture){
	$('#gesture').text(gesture);
}

function changeAction(action){

	$('#symbol').fadeOut("fast", function(){
		// if (action=="Unlock"){
		// 	Lock(false);
		// }else{
		// 	Lock(true);
		// }

		if(action=="Shutdown" && prevAction=="Shutdown"){
			action = "Start";
		}

		
		$(this).attr('src','images/'+action+'.png');
		$(this).fadeIn("fast");
		$('#symbol').attr('alt', action);
		//change action & gesture
		$('#action').text(action);

		prevAction = action;
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

