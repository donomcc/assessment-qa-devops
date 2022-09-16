const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
   
    test('check to see if returned array has the same length as shuffleArray', () => {
        const originalArr = [1,2,3,4,5];
        const shuffled = shuffleArray(originalArr);
        let originalLength = originalArr.length;
        let shuffledLength = shuffled.length;
          expect(originalLength).toEqual(shuffledLength);
        })

    test('check to see if the items are the same in returned array are the same as shuffleArr', () => {
        const originalArr = [6,7,8,9,1];
        const shuffled = shuffleArray(originalArr);
            expect(shuffled).toEqual(expect.arrayContaining(originalArr))
          })
      })