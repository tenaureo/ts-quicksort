var ARRAY = [1, 2, 423424, 637423722345724, 3, 5, 999];
console.log('unsorted array: ' + ARRAY);
function part(ARRAY, left, right) {
    var _a;
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = ARRAY.length - 1; }
    var Pivot = ARRAY[Math.floor((left + right) / 2)];
    var l = left;
    var r = right;
    while (l <= r) {
        while (ARRAY[l] < Pivot) {
            l++;
        }
        while (ARRAY[r] > Pivot) {
            r--;
        }
        if (l <= r) {
            _a = [ARRAY[r], ARRAY[l]], ARRAY[l] = _a[0], ARRAY[r] = _a[1];
            l++;
            r--;
        }
        return l;
    }
}
function sort(ARRAY, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = ARRAY.length - 1; }
    var i;
    if (Array.length > 1) {
        i = part(ARRAY, left, right);
        if (left < i - 1) {
            sort(ARRAY, left, i - 1);
        }
        if (i < right) {
            sort(ARRAY, i, right);
        }
    }
    return ARRAY;
}
console.log(ARRAY);
