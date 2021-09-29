function convertToRoman(num) {
  var romanNum = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'].reverse();
  var decimalNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000].reverse();
  var number= '';
  for (let i=0; i<decimalNum.length; i++) {
    while (decimalNum[i] <= num) {
      number += romanNum[i];
      num -= decimalNum[i];
    }
  }
 return number;
}
