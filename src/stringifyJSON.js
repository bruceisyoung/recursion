// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(obj===undefined)
  	return;
  if(typeof(obj)==="function")
  	return;
  if(typeof(obj)==="number" || typeof(obj)==="boolean")
  	return obj.toString();
  if(obj===null)
  	return 'null';
  if(typeof(obj)==="string")
  	return "\"" + obj + "\"";
  if(Array.isArray(obj))
  	return "["+obj.map(function(item){ return stringifyJSON(item);}).join(",")+"]";
  if(typeof(obj)==="object"){
  	var result = [];
  	for (var key in obj){
  		if(typeof(obj[key])!="function" && obj[key]!==undefined)
  			result.push((stringifyJSON(key) + ":" + stringifyJSON(obj[key])));
  	}
  	return "{"+result.join(",")+"}";
  }

};
