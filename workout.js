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

function newReps (int, n) {
	if(int == 'low') {
var reps = [10, 9, 8, 7]; }
	else if (int == 'medium') {
var reps = [7, 6, 5]; }
	else if (int == 'high') {
var reps = [5, 4, 3]; }
	else if (int == 'very high') {
var reps = [3, 2, 1]; }
	else {
window.alert( "intensity selected doesn't make sense"); }

    var result = new Array(n),
        len = reps.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = reps[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
	
return result;
}

function newVolume (vol, n) {
	if(vol == 'low') {
var sets = [1, 2, 3]; }
	else if (vol == 'medium') {
var sets = [3, 4, 5]; }
	else if (vol == 'high') {
var sets = [5, 6, 7]; }
	else if (vol == 'very high') {
var sets = [8, 9, 10]; }
	else {
window.alert( "Sets selected doesn't make sense"); }

    var result = new Array(n),
        len = sets.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = sets[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
	
return result;
}

console.log(newVolume('low',1));

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


function upSecondary(n) {
    var upperSecExercises = ["Dead Bench", "Incline Bench Press"];
    var result = new Array(n),
        len = upperSecExercises.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = upperSecExercises[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function upAssistance(n) {
    var upperAssitExercises = ["Dumbbell Bench", "Dumbbell Curl"];
    var result = new Array(n),
        len = upperAssitExercises.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = upperAssitExercises[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function lowPrimary(n) {
    var lowerPrimExercises = ["Squat", "Front Squat", "SSB Squat", "Pause Squat"];
    var result = new Array(n),
        len = lowerPrimExercises.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = lowerPrimExercises[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function lowSeconday(n) {
    var lowerSecExercises = ["Tempo Squat", "RDL"];
    var result = new Array(n),
        len = lowerSecExercises.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = lowerSecExercises[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


function lowAssitance(n) {
    var lowerAssitExercises = ["Leg Press", "Leg Extension"];
    var result = new Array(n),
        len = lowerAssitExercises.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = lowerAssitExercises[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
