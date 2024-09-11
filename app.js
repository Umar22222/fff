// {
//     //1 masala

//     var isSquare = function (n) {
//         return Math.sqrt(n) % 1 === 0;
//     };
// }






// {
//     // 2 masala 

//     function searchNames(logins) {
//         return logins.filter(function (pair) {
//             return pair[0].endsWith('_');
//         });
//     }
// }




// {
//     // 3 masala 

//     function printArray(array) {
//         return array.map(el =>
//             Array.isArray(el)
//                 ? el.join(',')
//                 : el
//         ).join(',');
//     }

//     module.exports = printArray;
// }



// {
//     // 4 masala 

//     function diagonal(matrix) {
//         let principalSum = 0;
//         let secondarySum = 0;

//         for (let i = 0; i < matrix.length; i++) {

//             principalSum += matrix[i][i];

//             secondarySum += matrix[i][matrix.length - 1 - i];
//         }

//         if (principalSum > secondarySum) {
//             return "Principal Diagonal win!";
//         } else if (secondarySum > principalSum) {
//             return "Secondary Diagonal win!";
//         } else {
//             return "Draw!";
//         }
//     }
// }



// {
//     // 5 masala 

//     function isFibo(a, b, f) {
//         if (f === a || f === b) return true;

//         while (b <= f) {
//             let c = a + b;
//             if (c === f) return true;
//             a = b;
//             b = c;
//         }

//         return false;
//     }
// }




// {
//     // 6 masala
//     function getCount(str) {
//         const vowels = 'aeiou';
//         let count = 0;

//         for (let char of str) {
//             if (vowels.includes(char)) {
//                 count++;
//             }
//         }
//         return count;
//     }
// }




// {
//     // 7 masala
//     function keysAndValues(data) {

//         const keys = Object.keys(data);
//         const values = Object.values(data);

//         return [keys, values];
//     }
// }






// {
//     // 8 masala
//     function disemvowel(str) {

//         const vowels = 'aeiou';

//         return str.split('').filter(char => !vowels.includes(char.toLowerCase())).join('');
//     }
// }





// {
//     // 9 masala
//     function sameCase(a, b) {
//         const isLetter = char => /^[a-zA-Z]$/.test(char);

//         if (!isLetter(a) || !isLetter(b)) {
//             return -1;
//         }

//         if ((a === a.toLowerCase() && b === b.toLowerCase()) ||
//             (a === a.toUpperCase() && b === b.toUpperCase())) {
//             return 1;
//         }

//         return 0;
//     }
// }





// {
//     // 10 masala 
//     function greet(language) {
//         const greetings = {
//             "english": "Welcome",
//             "czech": "Vitejte",
//             "danish": "Velkomst",
//             "dutch": "Welkom",
//             "estonian": "Tere tulemast",
//             "finnish": "Tervetuloa",
//             "flemish": "Welgekomen",
//             "french": "Bienvenue",
//             "german": "Willkommen",
//             "irish": "Failte",
//             "italian": "Benvenuto",
//             "latvian": "Gaidits",
//             "lithuanian": "Laukiamas",
//             "polish": "Witamy",
//             "spanish": "Bienvenido",
//             "swedish": "Valkommen",
//             "welsh": "Croeso"
//         };

//         return greetings[language.toLowerCase()] || "Welcome";
//     }
// }