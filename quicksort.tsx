const array = [1, 2, 87, 23, 3, 999];
console.log('unsorted array: ' + array);

function part(array: number[], left: number = 0, right: number = array.length - 1){
    const Pivot = array[Math.floor((left + right) /2)];
    let l = left;
    let r = right;

    while (l <= r) {
        while (array[l] < Pivot){
            l++;
        }
        while (array[r] > Pivot) {
            r--;
          }
        if (l <= r) {
            [array[l], array[r]] = [array[r], array[l]];
            l++;
            r--;
        }
        return l;
    }
}

function sort(array: number[], left: number = 0, right: number = array.length - 1){
  let i;

  if (array.length > 1) {
      i = part(array, left, right);

      if (left < i - 1) {
        sort(array, left, i-1);
      }

      if (i < right) {
          sort (array, i, right)
      }
  }

  return array;
  
}

console.log('sorted array: ' + sort(array));