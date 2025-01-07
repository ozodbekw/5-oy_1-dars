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
