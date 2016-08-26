// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var elementList = [];
  function listElement(item) {
    elementList.push(item);
  	if(item.childNodes.length>0){
      for(var i=0; i<item.childNodes.length; i++)
  	    listElement(item.childNodes[i]);
  	}	
  }
  listElement(document.body);
  return elementList.filter(function(item){
           if(item.nodeType!==3)
             return item.classList.contains(className);
  });
};
