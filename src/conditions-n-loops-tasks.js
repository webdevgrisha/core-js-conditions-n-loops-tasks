/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const firstNum = a >= b ? a : b;

  return firstNum >= c ? firstNum : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const [queenX, queenY] = [queen.x, queen.y];
  const [kingX, kingY] = [king.x, king.y];

  if (queenX === kingX || queenY === kingY) return true;

  const xDist = Math.abs(queenX - kingX);
  const yDist = Math.abs(queenY - kingY);

  return xDist === yDist;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumbers = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };

  if (romanNumbers[num]) return romanNumbers[num];

  let resultRomanNum = '';
  let currNum = num;
  let placeNumber = 1;

  while (currNum > 0) {
    const division = currNum % 10;

    if (placeNumber === 1) {
      resultRomanNum = (romanNumbers[division] || '') + resultRomanNum;
    } else {
      let tensPlace;

      switch (division) {
        case 1:
          tensPlace = 'X';
          break;
        case 2:
          tensPlace = 'XX';
          break;
        case 3:
          tensPlace = 'XXX';
          break;
        default:
          break;
      }

      resultRomanNum = tensPlace + resultRomanNum;
    }

    currNum = Math.floor(currNum / 10);
    placeNumber += 1;
  }

  return resultRomanNum;
}
/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let resultStr = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    let elem;
    switch (numberStr[i]) {
      case '0':
        elem = 'zero';
        break;
      case '1':
        elem = 'one';
        break;
      case '2':
        elem = 'two';
        break;
      case '3':
        elem = 'three';
        break;
      case '4':
        elem = 'four';
        break;
      case '5':
        elem = 'five';
        break;
      case '6':
        elem = 'six';
        break;
      case '7':
        elem = 'seven';
        break;
      case '8':
        elem = 'eight';
        break;
      case '9':
        elem = 'nine';
        break;
      case '.':
      case ',':
        elem = 'point';
        break;
      case '+':
        elem = 'plus';
        break;
      case '-':
        elem = 'minus';
        break;
      default:
        break;
    }

    resultStr += i === numberStr.length - 1 ? elem : `${elem} `;
  }

  return resultStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let curNum = num;

  while (curNum !== 0) {
    const curLastDigit = curNum % 10;

    if (curLastDigit === digit) return true;
    curNum = Math.floor(curNum / 10);
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length <= 2) return -1;

  let middleIndex = 1;
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (i < middleIndex) {
      leftSum += arr[i];
    }

    if (i > middleIndex) {
      rightSum += arr[i];
    }
  }

  do {
    if (leftSum === rightSum) return middleIndex;

    leftSum += arr[middleIndex];
    rightSum -= arr[middleIndex + 1];

    middleIndex += 1;
  } while (middleIndex !== arr.length - 1);

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  let currNum = 1;
  let sideNum = 0;

  let lBoard = 0;
  let tBoard = 0;
  let rBoard = size - 1;
  let bBoard = size - 1;

  while (currNum <= size * size) {
    if (sideNum === 0) {
      for (let i = lBoard; i < rBoard; i += 1) {
        matrix[tBoard][i] = currNum;
        currNum += 1;
      }
    }

    if (sideNum === 1) {
      for (let i = tBoard; i <= bBoard; i += 1) {
        matrix[i][rBoard] = currNum;
        currNum += 1;
      }
    }

    if (sideNum === 2) {
      for (let i = rBoard - 1; i >= lBoard; i -= 1) {
        matrix[bBoard][i] = currNum;
        currNum += 1;
      }
    }

    if (sideNum === 3) {
      for (let i = bBoard - 1; i > tBoard; i -= 1) {
        matrix[i][lBoard] = currNum;
        currNum += 1;
      }
    }

    sideNum += 1;

    if (sideNum % 4 === 0) {
      sideNum = 0;

      lBoard += 1;
      tBoard += 1;
      rBoard -= 1;
      bBoard -= 1;
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rowCount = matrix[0].length;
  const matrixLink = matrix;
  const matrixCopy = JSON.parse(JSON.stringify(matrix));

  for (let row = 0; row < rowCount; row += 1) {
    for (
      let curRow = rowCount - 1, curCol = 0;
      curRow >= 0;
      curRow -= 1, curCol += 1
    ) {
      matrixLink[row][curCol] = matrixCopy[curRow][row];
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function swap(arr, i, j) {
  const arrCopy = arr;
  const temp = arr[i];
  arrCopy[i] = arr[j];
  arrCopy[j] = temp;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j += 1) {
    if (arr[j] < pivot) {
      i += 1;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, right);
  return i + 1;
}

function sortByAsc(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  const pivotIndex = partition(arr, left, right);

  sortByAsc(arr, left, pivotIndex - 1);
  sortByAsc(arr, pivotIndex + 1, right);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let neededIter = iterations;
  let currIter = 0;
  let workerStr = '';
  let resultStr = str;

  while (neededIter) {
    currIter += 1;
    neededIter -= 1;
    for (let i = 0; workerStr.length !== resultStr.length; i += 2) {
      if (i === str.length) {
        i %= str.length - 1;
      }

      workerStr += resultStr[i];
    }

    resultStr = workerStr;
    workerStr = '';

    if (resultStr === str) {
      neededIter %= currIter;
    }
  }

  return resultStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */

function createCombinations(arr, num = -1) {
  if (arr.length === 2) {
    if (num !== -1) {
      if (arr[0] <= num) return [];
      return [[arr[0], arr[1]]];
    }
    return [arr, [arr[1], arr[0]]];
  }

  const allCombin = [];

  const useElem = {};

  for (let i = 0; i < arr.length; i += 1) {
    const fixElem = arr[i];

    if (!(fixElem in useElem) && +fixElem > num) {
      useElem[fixElem] = 1;

      const otherElem = arr.filter((elem, index) => index !== i);

      const otherCombin = createCombinations(otherElem);

      const fixElemCombin = otherCombin.map((combination) => {
        return [fixElem, ...combination];
      });

      allCombin.push(...fixElemCombin);
    }
  }

  return allCombin;
}

function findNextBigger(arr) {
  if (!arr.length) return -1;
  const transformArr = arr.map((elemArr) => +elemArr.join(''));
  return Math.min(...transformArr);
}

function convertNumToArray(num) {
  const arr = [];
  let currNum = num;

  do {
    const devison = currNum % 10;
    currNum = Math.floor(currNum / 10);
    arr.push(devison);
  } while (currNum);

  return arr.reverse();
}

function getNearestBigger(number) {
  if (number < 10) return number;

  const numberArr = convertNumToArray(number);
  let currNum = numberArr[numberArr.length - 1];
  const currNumArr = [currNum];
  let pos = 1;

  while (pos <= numberArr.length) {
    if (currNumArr.length >= 2) {
      const combinations = createCombinations(currNumArr, +currNum);
      const startPos = numberArr.length - pos;
      const num = +numberArr
        .filter((elem, index) => index >= startPos)
        .join('');
      const nextBigger = findNextBigger(combinations, num);

      if (nextBigger !== -1) {
        numberArr.splice(-pos, pos, nextBigger);
        break;
      }
    }

    pos += 1;
    currNum = numberArr[numberArr.length - pos];
    currNumArr.push(currNum);
  }

  return +numberArr.join('');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
