let textArray = document.querySelector('#array-result'); 

let array = [10, 20, 30, 50, 235, 3000];

const chrs = ['1','2', '5'];
result = array.filter(e => chrs.includes(e.toString()[0]));

textArray.innerHTML = result;

console.log(result);