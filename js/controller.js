var prevAction = "Shutdown";
var prevGesture = "";
var config = 1;

var sequence = ["Shutdown", "Accelerate", "Left", "Stop", "Accelerate", "Right", "Right", "Stop", "Accelerate", "Left", "Stop", "Shutdown"];


function getActionFromKey(e){
	if(e.keyCode == 81){
		return "Shutdown";
	}

	if(e.keyCode == 83){
		return "Stop";
	}

	if(e.keyCode == 37){
		return "Left";
	}

	if(e.keyCode == 39){
		return "Right";
	}

	if(e.keyCode == 65){
		return "Accelerate";
	}

	return "NONE";
}

var currentIteration = 0;
var startTime = new Date().getTime();
changeAction(sequence[currentIteration]);

function nextIteration(){
	currentIteration++;

	if(currentIteration >= sequence.length){
		currentIteration = 0;
	}
	changeAction(sequence[currentIteration]);

	var time = new Date().getTime();
	console.log(time - startTime);

	startTime = time;
}

//q = 81
//s = 83
//left = 37
//right = 39
//a = 65
var currentKey = 0;

$(document).keydown(function(e){
	var action = getActionFromKey(e);

	if(sequence[currentIteration] === action){
		nextIteration();
	}
});

$(document).keyup(function(e){
	if(e.keyCode == 65 || e.keyCode == 37 || e.keyCode ==39 || e.keyCode == 83){
		// changeAction("Cruise");
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

