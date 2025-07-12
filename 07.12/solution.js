/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = (s) => {
  const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  console.log(cleanedString);
  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
