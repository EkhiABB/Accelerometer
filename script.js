let ax=0;
let ay=0;
let az=0;


if (window.DeviceMotionEvent != undefined) {
	window.ondevicemotion = function(e) {
		ax = e.acceleration.x;
		ay = e.acceleration.y;
		az = e.acceleration.z;
		document.getElementById("accelerationX").innerHTML = ax;
		document.getElementById("accelerationY").innerHTML = ay;
		document.getElementById("accelerationZ").innerHTML = az;
	}
}

	
