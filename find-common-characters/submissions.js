/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    A = A.map(s=>s.split(""));
    let res = A[0];
    for(let i=0;i<res.length;i++){
        let j=1;
        for(;j<A.length;j++){
            let index = A[j].indexOf(res[i]);
            if(index < 0){
                break;
            }
            A[j].splice(index,1);
        }
        if(j < A.length){
            res.splice(i,1);
            i--;
        }
    }
    return res;
};