// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var elementList = [];
  var result = [];
  function listElement(item) {
    elementList.push(item);
  	if(item.childNodes.length>0){
      for(var i=0; i<item.childNodes.length; i++)
  	    listElement(item.childNodes[i]);
  	}	
  }
  listElement(document.body);
  for(var i=0; i<elementList.length; i++){
  	if(elementList[i].nodeType!==3&&elementList[i].classList.contains(className))
  	  result.push(elementList[i]);
  }
  return result;
};
