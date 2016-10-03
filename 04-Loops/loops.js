function repeat(str, num){
	var str1 = ''
	for(var i = 1; i<=num; i++){
		str1 += str
	}
	return str1
}

function sum(arr){
	var sum = 0
	for(var i=0;i<arr.length;i++){
		sum += arr[i]
	}
	return sum
}

function join(arr, del){
	str = ''
	for(var i=0;i<arr.length;i++){
		str += (arr[i])
	}
	return str
}

function paramify(obj){
	var arr = []
	for(var key in obj){
		if(obj.hasOwnProperty(key)){
		arr.push(key+'='+obj[key])
	}
	}
	console.log(arr)
		arr = arr.sort()
		str = arr.join('&')
		console.log(str)
		return str
}

function paramifyObjectKeys(obj){
var arr = []
	for(var key in obj){
		if(obj.hasOwnProperty(key)){
		arr.push(key+'='+obj[key])
	}
	}
	console.log(arr)
		arr = arr.sort()
		str = arr.join('&')
		console.log(str)
		return str	
}


function renameFiles(arr){
arr2 = []
count = 0
for(var i=0;i<arr.length;i++){
	if(arr2.indexOf(arr[i]) == -1){
		arr2.push(arr[i])
		console.log(arr2)
	}
	else{
		count += 1
		str = arr[i]+'('+count+')'
		if(arr2.indexOf(str) == -1){
		arr2.push(str)}
		else{
			count += 1
			str = str = arr[i]+'('+count+')'
			arr2.push(str)}
		}
	}
console.log(arr2)
return arr2
}

