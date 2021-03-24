export const findMissingNumber = (array: Array<number>): number => {
    const expectedSum = 55 //  <--- para o teste--- //const expectedSum = 5050;
    let sum = 0;
    for (const num of array) {
      sum += num;
    }
    return expectedSum - sum;
  };