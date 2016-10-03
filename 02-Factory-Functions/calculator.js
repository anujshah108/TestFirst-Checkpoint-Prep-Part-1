var value = function(str){
	return eval(str)
}
var add = function(num){
	this.str += '+'+num
}
var subtract = function(num){
	this.str += '-'+num
}
var multiply = function(num){
	this.str += '*'+num
}
var divide = function(num){
	this.str += '/'+num
}

function createCalculator(){
	var myObj = {
	str: '0',
	value: value(this.str),
	add: add()
	subtract: subtract()
	multiply: multiply()
	divide: divide()
}
return myObj
}

var calc = createCalculator()

console.log(calc.add(5).value())
