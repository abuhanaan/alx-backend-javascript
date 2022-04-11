export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    // let value = array[idx];
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
