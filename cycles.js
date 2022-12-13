//Вивести на сторінку в один рядок через кому числа від 10 до 20.

let c1 = 10;
let string1 = ""
while (c1<= 20) {
    string1 = `${string1}` + `${c1} `;
    c1++ ;
}
console.log(string1);
// Вивести квадрати чисел від 10 до 20.

let c2 = 10;
do {
    console.log(c2**2);
    c2++ ;
} while (c2<=20);

// Вивести таблицю множення на 7.

for (let c3 = 1; c3 <= 10; console.log(c3*7), c3++);

// Знайти суму всіх цілих чисел від 1 до 15.
let c4 = 0
let sum41 = 0;

while (c4 <=15) {

    sum41 = sum41 + c4;
    c4++;
}
console.log(sum41);
// Знайти добуток усіх цілих чисел від 15 до 35.

let c5 = 15;
let res5 = 1;

while (c5 <=35) {
    res5 = res5 * c5;
    c5++;
}
console.log(res5);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

for (let c6 = 1; c6 <= 499; console.log((c6 + (c6+1))/2), c6++);

// или так?
let c6 = 0
let sum6 = 0;

while (c6 <=500) {
    sum6 = sum6 + c6;
    c6++;
}
console.log (sum6 / 500)

// Вивести суму лише парних чисел в діапазоні від 30 до 80.

let c7 = 30
let sum7 = 0;
while (c7 <= 80) {
    switch (c7 % 2) {
        case 0 :
            sum7 = sum7 + c7;
        default :
            sum7 = sum7 + 0;
    }
    c7++;
}
console.log(sum7);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let c8 = 100
let sum8 = 0;
while (c8 <= 200) {
    switch (c8 % 3) {
        case 0 :
            console.log(c8);
    }
    c8++;
}


// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.


const c9 = 30;
let c91 = 1;

while (c91 <= c9) {
    switch (c9 % c91) {
        case 0 : 
        console.log(c91);
    }
    c91++
}

// Визначити кількість його парних дільників.

const c10 = 30;
let c101 = 1;
let num10 = 0;
while (c101 <= c10) {
    switch (c10 % c101) {
        case 0 : 
        switch (c101 % 2) {
            case 0 :
                num10++
        }
    }
    c101++
}
console.log(num10);

// Знайти суму його парних дільників.

const c11 = 30;
let c111 = 1;
let sum11 = 0;
while (c111 <= c11) {
    switch (c11 % c111) {
        case 0 : 
        switch (c111 % 2) {
            case 0 :
                sum11 = c111 + sum11;
        }
    }
    c111++
}
console.log(sum11);

// Надрукувати повну таблицю множення від 1 до 10.


let c12 = 1;
let c121 = 1;

    while (c121 <= 10) {
        console.log(`${c12} * ${c121} =`, c12 * c121);
        c12++;
    switch (c12) {
        case 11 :
            c121++;
            c12 = 1;
    }
}
