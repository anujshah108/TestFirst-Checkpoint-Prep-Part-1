var RPNCalculator = function(){

this.total = 0
this.array = []

}

RPNCalculator.prototype.push = function(num){
	this.array[this.array.length] = num
}
RPNCalculator.prototype.plus = function(){
	if(this.array.length>=2){
		this.array[this.array.length-2] = this.array[this.array.length-2]+this.array[this.array.length-1]
		this.array.pop()
		this.total = this.array[this.array.length-1]
	}
	else{
		throw "rpnCalculator is empty"
	}
}
RPNCalculator.prototype.minus = function(){
	if(this.array.length>=2){
		this.array[this.array.length-2] = this.array[this.array.length-2]-this.array[this.array.length-1]
		this.array.pop()
		this.total = this.array[this.array.length-1]
	}
	else{
		throw "rpnCalculator is empty"
	}
}
RPNCalculator.prototype.divide = function(){
	if(this.array.length>=2){
		this.array[this.array.length-2] = this.array[this.array.length-2]/this.array[this.array.length-1]
		this.array.pop()
		this.total = this.array[this.array.length-1]
	}
	else{
		throw "rpnCalculator is empty"
	}
}
RPNCalculator.prototype.times = function(){
	if(this.array.length>=2){
		this.array[this.array.length-2] = this.array[this.array.length-2]*this.array[this.array.length-1]
		this.array.pop()
		this.total = this.array[this.array.length-1]
	}
	else{
		throw "rpnCalculator is empty"
	}
}
RPNCalculator.prototype.value = function(){
	return this.total 
}