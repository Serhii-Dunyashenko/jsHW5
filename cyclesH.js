// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let row = ``;
let c1 = 20;
while (c1 <= 29.5) {
    c1 = c1 + 0.5;
    row = row + `${c1} `
}
console.log(row)

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const rate = 27;
let c2 = 10;
while (c2 <= 100) {
    console.log(`${c2} $ = `, rate * c2, `ГРН`);
    c2 = c2 + 10;
}

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const c3 = 272;
let c31 = 1;
let square
while (c31 <= 100) {
    square = c31**2;
    if (square <+ c3) {
        console.log(c31)
    };
    c31++;
}

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const c4 = 37;
let n4 = 2;
let y4
let triger = 0;
while (n4 <= c4-1) {
    y4 = c4 % n4;
    switch (y4) {
        case 0 :
            triger++;
        break;
        default :
            triger = triger + 0;
        break;
    }
    n4++;
}
    switch (triger) {
        case 0 : 
            console.log(`${c4} is a simple number`)
        break;
        default : 
            console.log(`${c4} is a complex number`)
        break;
    }

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

const c5 = 57;
let deg = 1;
let res5

while (deg <= c5) {
    res5 = 3**deg;
    deg++;
    switch (res5) {
        case c5 : 
        console.log(`3 in ${deg} degree is ${c5}`)
        break;
        default : 
        break;
    }
}