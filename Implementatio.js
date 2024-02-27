//ForEach

function myForEach(array, callback) {
  for (let index = 0; index < array.length; ++index) {
    callback(array[index], index, array);
  }
}

//Map

function myMap(array, callback) {
  let answer = [];
  for (let index = 0; index < array.length; ++index) {
    answer.push(callback(array[index], index, array));
  }
  return answer;
}

//Filter

function myFilter(array, callback) {
  let answer = [];
  for (let index = 0; index < array.length; ++index) {
    if (callback(array[index], index, array)) {
      answer.push(array[index]);
    }
  }
  return answer;
}

//Find

function myFind(array, callback) {
  for (let index = 0; index < array.length; ++index) {
    if (callback(array[index], index, array)) {
      return array[index];
    }
  }
}

//FindIndex

function myFindIndex(array, callback) {
  for (let index = 0; index < array.length; ++index) {
    if (callback(array[index], index, array)) {
      return index;
    }
  }
}

//Some

function mySome(array, callback) {
  for (let index = 0; index < array.length; ++index) {
    if (callback(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
//Every

function myEvery(array, callback) {
  for (let index = 0; index < array.length; ++index) {
    if (!callback(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

//Reduce

function myReduce(array, callback, initial = 0) {
  let result = initial;
  for (let index = 0; index < array.length; ++index) {
    result = callback(result, array[index], index, array);
  }
  return result;
}
