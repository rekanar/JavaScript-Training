function getMiddle(s)
{  
  var withoutSpace = s.replace(/ /g, "");  
  var len = withoutSpace.length;  
  var isEven = evenOrOdd(len);
  var middle = len / 2;  
  if (isEven) 
  {   
    return s.substring(middle - 1, middle + 1); 
  } 
  else   {    
    return s.charAt(Math.round(middle - 1));  
  }}
function evenOrOdd(len) 
{  if (len % 2 == 0)    
    return true; 
  else    
    return false;
};

