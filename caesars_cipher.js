function rot13(str) {
  const ROT_13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];
  const ALPHA = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  var caePhrase = [];

  for (let i=0; i < str.length; i++) {
    for (let j=0; j < ALPHA.length; j++) {
      if(str[i] === ALPHA[j]){
        caePhrase.push(ROT_13[j])
      }
    }
    if(str[i] === " ") {
      caePhrase.push(' ')
    } else if (str[i] == '!') {
      caePhrase.push('!')
    } else if (str[i] == '?') {
      caePhrase.push('?')
    } else if (str[i] == '.') {
      caePhrase.push('.')
    }
  }

  caePhrase = caePhrase.join('')
  return caePhrase;
}
