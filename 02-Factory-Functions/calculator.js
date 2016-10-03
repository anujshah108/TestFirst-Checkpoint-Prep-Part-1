var value1 = function(){
	return eval(this.str)
}
var add1 = function(num){
	this.str += '+'+num
}
var subtract1 = function(num){
	this.str += '-'+num
}
var multiply1 = function(num){
	this.str += '*'+num
}
var divide1 = function(num){
	this.str += '/'+num
}

function createCalculator(){
	var myObj = {
	str: '0',
	value: value1,
	add: add1,
	subtract: subtract1,
	multiply: multiply1,
	divide: divide1,
}
return myObj
}