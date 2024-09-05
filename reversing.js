const numbers = [1, 2, 3, 4, 5, 6, 7];


// numbers.reverse();
// console.log(numbers);

// let rev_num = [];
// for(let number of numbers){
//      rev_num.unshift(number);
    
// }
// console.log(rev_num);

let final_rev = [];
for(let i = numbers.length -1; i >= 0; i--){
    const num = numbers[i]
    
    final_rev.push(num)
}
console.log(final_rev);



    