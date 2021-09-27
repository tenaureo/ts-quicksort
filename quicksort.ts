const ARRAY = [1, 2, 423424, 637423722345724, 3, 5, 999];
console.log('unsorted array: ' + ARRAY);

function part(ARRAY: number[], left: number = 0, right: number = ARRAY.length - 1){
    const Pivot = ARRAY[Math.floor((left + right) /2)];
    let l = left;
    let r = right;

    while (l <= r) {
        while (ARRAY[l] < Pivot){
            l++;
        }
        while (ARRAY[r] > Pivot) {
            r--;
          }
        if (l <= r) {
            [ARRAY[l], ARRAY[r]] = [ARRAY[r], ARRAY[l]];
            l++;
            r--;
        }
        return l;
    }
}

function sort(ARRAY: number[], left: number = 0, right: number = ARRAY.length - 1){
  let i;

  if (Array.length > 1) {
      i = part(ARRAY, left, right);

      if (left < i - 1) {
        sort(ARRAY, left, i-1);
      }

      if (i < right) {
          sort (ARRAY, i, right)
      }
  }

  return ARRAY;
  
}

console.log(ARRAY);