// Return total sum of vowels(1) and consonants(2)


function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) !== -1
}

function countVowelConsonant(str) {
  const letterArray = str.split('')
  let numArr = []
  const convertToNumbers = letterArray.map(letter => {
      isVowel(letter) ? numArr.push(1) : numArr.push(2)
  })
  
const initialValue = 0;
const result = numArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
  
  return result
}

/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});