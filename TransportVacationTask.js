function rentalCarCost(d) 
{ 
  
  if (d < 3) 
  {    
   return d * 40;  
   } 
   else if (d > 2 && d < 7) 
   {    
    return (d * 40) - 20;  
    } 
  else if (d > 6) 
    {    return (d * 40) - 50;  
    }
  
}
