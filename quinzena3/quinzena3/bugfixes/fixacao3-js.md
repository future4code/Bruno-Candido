function calculaNota(ex, p1, p2) {
  let media =(p1 *1) + (p2 * 2) + (ex*3) / (1 + 2+ 3)
   if (media >= 9){
     return "A"
   }else if (media < 9 && media >= 7.5){
     return "B"
   }else if(media < 7.5 && media >= 6){
     return "C"
   }else{
     return "D"
   } 
}
calculaNota(10,5,6)

}