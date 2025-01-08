// 2-amaliyot
// #1 Topshiriq
// const ism = prompt("Ismingizni kiriting:");
// const yosh = +prompt("Yoshingizni kiriting:");

// const malumot = {
//   tugilganYil: 2025 - yosh,
//   oy: yosh * 12,
//   hafta: ((yosh * 12) / 7).toFixed(0),
//   kun: yosh * 365,
//   soat: yosh * 365 * 24,
//   daqiqa: yosh * 365 * 24 * 60,
//   soniya: yosh * 365 * 24 * 60 * 60,
// };

// const result = `Qadrli ${ism}. Siz ${malumot.tugilganYil} yilda tug'ilgansiz. Va siz ${malumot.oy} oy, ${malumot.hafta} hafta, ${malumot.kun} kun, ${malumot.soat} soat, ${malumot.daqiqa} daqiqa , ${malumot.soniya} soniya yashagansiz! `;

// alert(result);

// #2 Topshiriq

// const ism = prompt("Ismni kiriting:");

// const ismlar = ["Doniyor", "Shaxriyor", "Behruz"];

// if (ismlar.includes(ism)) {
//   console.log("Ha ${ism} ismi mavjud!");
// } else {
//   console.log("Yo'q ${ism} ismi mavjud emas!");
// }

// #3 Topshiriq

// const ismlar = ["Doniyor", "Shaxriyor", "Behruz"];

// for (let key of ismlar) {
//   console.log(`${key}bek`);
// }

// #4 Topshiriq

// const viloyatNomi = prompt("Qaysi viloyat edi?");

// switch (viloyatNomi) {
//   case "Farg'ona":
//     alert("Farg'ona viloyatida 2 mln aholi bor");
//     break;
//   case "Andijon":
//     alert("Farg'ona viloyatida 2.2 mln aholi bor");
//     break;
//   case "Namangan":
//     alert("Farg'ona viloyatida 2.5 mln aholi bor");
//     break;
//   case "Toshkent":
//     alert("Farg'ona viloyatida 4 mln aholi bor");
//     break;
//   case "Buxoro":
//     alert("Farg'ona viloyatida 5 mln aholi bor");
//     break;
//   default:
//     alert(`Hozirda ba'zada ${viloyatNomi} viloyat mavjud emas.`);
// }

// #5 Topshiriq

// const meyor = 20;

// const belgilar = prompt("Belgilar yozingchi oka:");

// if (belgilar.length > meyor) {
//   alert(
//     `Siz ${meyor}ta bilgin kiritishingiz mumkin, lekin hozirda siz ${
//       belgilar.length
//     }ta belgi kiritdingiz. Bu meyordan ${belgilar.length - meyor}ta ko'p.`
//   );
// } else {
//   alert(
//     `Siz ${meyor}ta bilgin kiritishingiz mumkin, lekin hozirda siz ${
//       belgilar.length
//     }ta belgi kiritdingiz. Bu meyordan ${meyor - belgilar.length}ta belgi kiritishingiz mumkin.`
//   );
// }

// Extra  topshiriq

// const n = 7;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${n}x${i}=${n * i}`);
// }

// 3-amaliyot
// #1
// const myArray = [[false, true], [1, 2], 99, "yaxshi"];

// for (let i = 0; i < myArray.length; i++) {
//   if (typeof myArray[i] == "string") {
//     console.log("String index: ", i);
//   }
// }

// myArray.forEach((item, i) => {
//   if (typeof item == "string") {
//     console.log(i);
//   }
// });

// #2
// const data = [[1, 2, 3], "qizil", [4, 5, 6], true, false];
// const newData = [];

// data.forEach((item) => {
//   const respins = Array.isArray(item);
//   if (respins) {
//     item.forEach((num) => {
//       newData.push(num);
//     });
//   }
// });
// console.log(newData);

// #3
// const chekData = [null, "false", 0, 99, undefined, false, "", NaN, "0"];
// const reslult = [];
// chekData.forEach((item) => {
//   if (!item) {
//     reslult.push(item);
//   }
// });
// console.log(reslult);

// 4#
// const word = "samarqand";
// const splitWord = word.split("").reverse();
// let newWord = "";

// for (let i = 0; i < splitWord.length; i++) {
//   newWord += splitWord[i];
// }
// console.log(newWord)

// #5
// const word = "AssAlomU AlaYkuM";
// const splitWord = word.split(" ");
// let newWord = "";

// splitWord.forEach((item) => {
//   const bosh = item.charAt().toLowerCase();
//   const davomi = item.slice(1).toUpperCase();
//   newWord += " " + (bosh + davomi);
// });

// console.log(newWord)

// #6
// const numbers = [-1, 87, -5.5, Infinity, 0, 1, 5, 3, 0.9];
// let newNum = 0;
// numbers.forEach((num) => {
//   if (num >= 0.0 && Math.floor(num) === num && num !== Infinity && num != 0) {
//     newNum += num;
//   }
// });
// console.log(newNum);

// #7

// const word = "AssAlomU AlaYkuM";
// let splitWord = word.split("");
// let counter = 0;
// splitWord.forEach((word) => {
//   if (word == "a" || word == "A") {
//     counter++;
//   }
// });
// console.log(counter)

// #8

// const types = [21, "Robiya", "array", ["I'm array"], null, true, 215];
// let nweTypes = [];

// types.forEach((type) => {
//   nweTypes.push(typeof type);
// });
// console.log(nweTypes);

// #9

// const word = "Uzbekistan";
// console.log(word.lastIndexOf(word.slice(-1)) + 1);

// #10

// const numbers = [1, 2, 3, 1, 5];
// let result = [];

// numbers.forEach((num, i) => {
//   result.push(num + i);
// });
// console.log(result)

// #11
// let counter = 0;
// for (let i = 1; i <= 10; i++) {
//   counter++;
// }
// console.log(counter)

// #12

// let number = 9;
// for (leti = 1; i <= 10; i++) {
//   let result = number * i + 1;
//   console.log(result);
// }

// #13

// let result = [];
// const numbers = [5, 1, 2, 2, 5, 1];

// const reverseFunc = (arr) => {
//   arr.forEach((num) => {
//     result.push(num * -1);
//   });
// };

// reverseFunc(numbers);

// console.log(result);

// #14

// const fizzBuzzFunc = function (number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       result.push("FizzBuzz");
//     } else if (i % 5 == 0) {
//       result.push("Buzz");
//     } else if (i % 3 == 0) {
//       result.push("Fizz");
//     } else {
//       result.push(i);
//     }
//   }
// };

// fizzBuzzFunc(25);

// console.log(result);

//  #15

const personObj = {
  name: "Ozodbek",
  lastName: "Tursunaliyev",
  age: 17,
  region: "Fergana",
  isMerried: false,
  job: "Programmer",
  haqida: function () {
    return `Assalomu Alaykum, Mening ismim ${this.name}, Familyam ${
      this.lastName
    }. Yoshim ${this.age}da. ${this.region}da yashayaman. ${
      this.job
    } bo'lib faoliyat olib boraman. ${
      this.isMerried ? "Uylanganman" : "Hali uylganmaganman"
    }`;
  },
};

console.log(personObj.haqida());
