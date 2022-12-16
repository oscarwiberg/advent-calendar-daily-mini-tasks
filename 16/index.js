// Add dashes in between chars e.g "aba caba" -> "a-b-a c-a-b-a"

function insertDashes(arr) {
    const splittedWords = arr.split(" ")
    const letterSplit = splittedWords.map((word,i) => word.split("").join("-") )
    const result = letterSplit.join(" ")
        
    
        return result
    }

/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});