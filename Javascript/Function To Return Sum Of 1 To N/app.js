let num = prompt(`Enter Max Number : `);
num = parseInt(num);

function sum(num){
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum+=i;
    }
    return sum;
}

console.log(`Total Sum : ${sum(num)}`);