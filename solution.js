// You must RETURN your result in each function!

const nums = [1,2,3,4]

nums.forEach(printNums)
function printNums(nums) {
  const newNums = nums
  return newNums
}

function returnSums(nums) {

nums1.forEach(returnSums)
function returnSums(nums1, index) {
  newArr1 = nums1 + index
  return newArr1(n); {
    return objs
    }
  }
}

function returnTotal(objs) {
  let total = 0
  objs.forEach(n) => {
    total += n
    return objs;
  }

  //    * Using forEach return a number that is the total sum of all numbers in the array of objects.
//    * The key for each object will be n
//    * @param objs => [{n:1}]
//    */
// }

function printMoney(decimals) {
  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */
const formatted = decimals.map((num) => {
  num = `$${num.toFixed(2)}}`
  return num
})
return formatted



function returnAllTrueValues(values) {
  const trueVal = values.filter((val) => {
    if (val.happy === true) {
      return val
  }
})
return trueVal
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
}

function addTwo(nums) {
  const addTwo = nums
    .map((num) => {
    return num + 2
    })
    .reduce((acc, val) => {
      return acc + val
    })
    return addTwo
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
}

function joinStrings(strings) {

  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
  const newString = strings.reduce((a, b) => {
    return a + b
  })
  return newString
}

//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  const sortByValue = objs.sort((a,b) => {
    return a.value - b.value
  })
  return sortByValue
}

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
