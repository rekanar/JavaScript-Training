function rentalCarCost(days) 
{
  let totalCost  = days* 40; 
  if ( days>= 7)  
    totalCost = totalCost - 50; 
  else if( days>=3 )  
    totalCost  =  totalCost - 20; 
  return totalCost;
}

