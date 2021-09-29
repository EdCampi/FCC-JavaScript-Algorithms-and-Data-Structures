function palindrome(str) {
  var neoStr = str.toLowerCase().replace(/(\W)|(_)|(\s)/gi,"");
  var theStr = neoStr.split("").reverse().join("");

  if (neoStr === theStr) {
    return true;
  }
  return false;
}
