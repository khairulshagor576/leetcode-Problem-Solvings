
const mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3;

var kWeakestRows = function (mat, k) {
    mat = mat.map(el => el.reduce((acc, cur) => acc + cur, 0))
    mat = mat.map((el, ind) => [ind, el])
    mat = mat.sort((a, b) => a[1] - b[1])
    let arr = []
    for (let i = 0; i < k; i++) {
        arr.push(mat[i][0])
    }
    return arr
};

console.log(kWeakestRows(mat, k));