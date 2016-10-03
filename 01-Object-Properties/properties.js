function setPropertiesOnObjLiteral(object){
	object.x = 7,
	object['y'] = 8,
	object['onePlus'] = function(num){
		return num + 1;
	}
}

function setPropertiesOnArrayObj(arrayObj){
	arrayObj[0] = 5
	arrayObj.hello = function(){
		return 'Hello!';
	},
	arrayObj.full = 'stack',
	arrayObj.twoTimes = function(num){
		return num*2
	}

}
function setPropertiesOnFunctionObj(functionObject){
	functionObject.prototype.helloWorld = function(){
		return 'Hello World'
	}
	functionObject.year = 2015
	functionObject.divideByTwo = function(num){
		return num/2
	}
	return functionObject()
}