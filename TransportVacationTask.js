function rentalCarCost(d) 
{
  let totalCost  = d* 40; 
  if ( d>= 7)  
    totalCost = totalCost - 50; 
  else if( d>=3 )  
    totalCost  =  totalCost - 20; 
  return totalCost;
}

