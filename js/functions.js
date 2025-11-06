function checkLength(string, length){
  return string.length <= length;
}

function isPalindrome(str)
{
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();

  let newStr = '';
  for (let i = normalizedStr.length - 1; i >= 0; i--)
  {
    newStr += normalizedStr[i];
  }
  return newStr === normalizedStr;
}

