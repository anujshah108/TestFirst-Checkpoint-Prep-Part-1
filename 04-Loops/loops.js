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
		if(del && i<arr.length-1){
		str += (arr[i] + del)

	}
		else{
			str += arr[i]
		}
	}
	console.log(str)
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
var arr2 = Object.keys(obj)
var arr = []
for(var i=0;i<arr2.length;i++){
		arr.push(arr2[i]+'='+obj[arr2[i]])
	}
		arr = arr.sort()
		console.log(arr)
		str = arr.join('&')
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

function gridGenerator(num){
	var str = ''
	for(var i=1;i<=num;i++){
	for(var j=1;j<=num;j++){
		if(i%2 == 1){
			if(j%2 == 1){
				str += '#'
			}
			else{
				str += ' '
			}
		}
		else{
			if(j%2 == 1){
				str += ' '
			}
			else{
				str += '#'
			}
		}
		}
		str += '\n'
	}
	return str
}







