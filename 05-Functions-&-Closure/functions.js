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

function createObjectWithClosures(){
	var num = 0
	var myObj = {
	oneIncrementer: function(){
		num = num + 1 
	},
	tensIncrementer: function(){
		num = num + 10
	},
	getValue: function(){
		return num
	},
	setValue: function(v){
		num = v
	},
}
return myObj;
}