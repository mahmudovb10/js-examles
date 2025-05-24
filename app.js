//  For1. k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.

// let k = 1;
// let n = 5;
// for (let i = 0; i < n; i++) {
//   console.log(k);
// }

// For2. Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let narx = 10000;

// for (let i = 0.1; i <= 1.0; i += 0.1) {
//   let result = narx * i;
//   console.log(`Narx ${result}`);
// }

// For3. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = n^2 +(n+1)^2+(n+2)^2 + ... +(2*n)^2

// let n = 5;
// let S = 0;

// for (let i = n; i <= 2 * n; i++) {
//   S += i * i;
// }

// console.log("S =", S);

// For4. Savolga Tushunmadim

// For5. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.

// let a = 3;
// let b = 5;

// for (let i = a; i <= b; i++) {
//   let line = "";
//   for (let j = 0; j < i; j++) {
//     line += i + " ";
//   }
//   console.log(line);
// }

// For6. Sonning bo’luvchilarini topish;

// let n = 12;
// let boluvchilar = [];

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     boluvchilar.push(i);
//   }
// }

// console.log("Bo‘luvchilar:", boluvchilar);

//                                  UYGA VAZIFA

// For1. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).

// for (let i = 1; i < 4; i++) console.log(i);

// For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.

// let a = 3;
// let b = 8;

// let count = 0;

// for (let i = b - 1; i > a; i--) {
//   console.log(i);
//   count++;
// }

// console.log(count); TUGATILMADI

// For3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let narx = 50000;
// for (let i = 1; i <= 10; i += 1) {
//   let result = narx * i;
//   console.log(`Narx ${result}`);
// }

// For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let p = 15000;

// for (let m = 1.2; m <= 2.0; m += 0.2) {
//   console.log(m.toFixed(1) + " kg = " + (p * m).toFixed(2) + " so'm");
// }

// For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.

// for (let i = 1; i < 4; i++) console.log(i);

// For6. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.
// let a = 3;
// let b = 6;
// let kopaytma = 1;

// for (let i = a; i <= b; i++) {
//   kopaytma *= i;
// }

// console.log("Natija:", kopaytma);

// For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.

// let a = 4;
// let b = 6;
// let kvadrat = 2;
// for (let i = a; i <= b; i++) {
//   kvadrat **= i;
// }
// console.log(kvadrat);

// For8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n

// let n = 5;
// let S = 0;

// for (let i = 1; i <= n; i++) {
//   S += 1 / i;
// }

// console.log("Yig'indi S =", S.toFixed(4));

// For9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n

// let n = 3;
// let S = 0;

// for (let i = 0.1; i <= n; i++) {
//   S = 1.1 * i;
// }

// console.log("Yig'indi S =", S.toFixed(4));

// For10. n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi programma tuzilsin. n^2=1+3+5+... + (2*n-1)

// let n = 5;
// let sum = 0;

// for (let k = 1; k <= n; k++) {
//   sum += 2 * k - 1;
// }

// console.log(sum);

// For11. n butun soni va a haqiqiy soni berilgan (n > 0). a ning n - darajasini aniqlovchi programma tuzilsin.
// a^n=a*a*a...a;

// let a = 2.5;
// let n = 4;

// let natija = 1;

// for (let i = 1; i <= n; i++) {
//   natija *= a; // natija = natija * a
// }

// console.log(`${a} ning ${n}-darajasi:`, natija);

// For12. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi programma tuzilsin.

// let a = 2;
// let n = 5;

// let natija = 1;

// for (let i = 1; i <= n; i++) {
//   natija *= a;
//   console.log(`a^${i} = ${natija}`);
// }

// For13. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin.
// S = 1+a^1+a^2 + a^3 + ... a^n

// let a = 2;
// let n = 4;

// let daraja = 1;
// let S = 1;

// for (let i = 1; i <= n; i++) {
//   daraja *= a;
//   S += daraja;
//   console.log(`a^${i} = ${daraja}`);
// }

// console.log(`Yig'indi S = ${S}`);

// For14. n butun soni berilgan (n > 0). Bir sikldan foydalangan holda quyidagi yig'indini hisoblovchi programma tuzilsin. S = 1! + 2! + 3! + ... + n!

// let n = 5;
// let S = 0;
// let faktorial = 1;

// for (let i = 1; i <= n; i++) {
//   faktorial *= i;
//   S += faktorial;
//   console.log(`${i}! = ${faktorial}`);
// }

// console.log(`Yig'indi S = ${S}`);
