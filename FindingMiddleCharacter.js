function getMiddle(s)
{  
  var withoutSpace = s.replace(/ /g, "");  
  var len = withoutSpace.length;  
  var middle = len / 2;  
  var middleChar;  
  if (IsEven(len)) 
  {    
    middleChar = s.substring(middle - 1, middle + 1);  
  } 
  else
  {   
    middleChar = s.charAt(Math.round(middle - 1));  
  }  
  return middleChar;
}
