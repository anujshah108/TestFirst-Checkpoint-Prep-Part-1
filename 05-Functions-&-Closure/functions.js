function concatString(){
	var str = '';
	for(var i = 0; i<arguments.length;i++){
		str += arguments[i]
	}
	return str;
}

function yourFunctionRunner(){
	var str = '';
	for(var i = 0; i<arguments.length;i++){
		str += arguments[i]()
	}
	return str
}

function makeAdder(A){
	return function(num){
		return num+A;
	}
}

function once(f) {
    var executed = false;
    return function() {
        if (!executed) {
            f();
        }
        executed = true;
    };
};