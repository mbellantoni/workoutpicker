function newLift (int, n) {
	if(int == 'low') {
var percentage = [.60, .625, .65, .675, .7]; }
	else if (int == 'medium') {
var percentage = [.725, .75, .775, .8]; }
	else if (int == 'high') {
var percentage = [.825, .85, .875, .9]; }
	else if (int == 'very high') {
var percentage = [.925, .95, .975]; }
	else {
window.alert( "intensity selected doesn't make sense"); }

    var result = new Array(n),
        len = percentage.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = percentage[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
	
return result;
}

console.log(newLift('low',1));

function upPrimary(n) {
    var upperExercises = ["Bench Press", "Close Grip Bench Press", "Wide Grip Bench Press", "Spoto Press"];
    var result = new Array(n),
        len = upperExercises.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = upperExercises[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


function lowPrimary(n) {
    var upperExercises = ["Squat", "Front Squat", "SSB Squat", "Pause Squat"];
    var result = new Array(n),
        len = upperExercises.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = upperExercises[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
