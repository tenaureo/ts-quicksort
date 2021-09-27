var array = [1, 2, 87, 23, 3, 999];
console.log('unsorted array: ' + array);
function part(array, left, right) {
    var _a;
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = array.length - 1; }
    var Pivot = array[Math.floor((left + right) / 2)];
    var l = left;
    var r = right;
    while (l <= r) {
        while (array[l] < Pivot) {
            l++;
        }
        while (array[r] > Pivot) {
            r--;
        }
        if (l <= r) {
            _a = [array[r], array[l]], array[l] = _a[0], array[r] = _a[1];
            l++;
            r--;
        }
        return l;
    }
}
function sort(array, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = array.length - 1; }
    var i;
    if (array.length > 1) {
        i = part(array, left, right);
        if (left < i - 1) {
            sort(array, left, i - 1);
        }
        if (i < right) {
            sort(array, i, right);
        }
    }
    return array;
}
console.log('sorted array: ' + sort(array));
