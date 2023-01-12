/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

let first = "John";
let last = "Smith";
let age = 1980;
let date = new Date().getFullYear();
console.log(`As esu ${first} ${last}. Man yra ${date - age} metai(-u).`);

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

let var1 = Math.round(Math.random() * 4);
let var2 = Math.round(Math.random() * 4);
if (var1 != 0 && var2 != 0) {
    if (var1 > var2) {
        console.log((var1/var2).toFixed(2));
    } else {
        console.log((var2/var1).toFixed(2));
    }
} else {
    console.log("One or more of the numbers is 0.");
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let var3 = Math.round(Math.random() * 25);
let var4 = Math.round(Math.random() * 25);
let var5 = Math.round(Math.random() * 25);
if ((var3 >= var4 && var3 <= var5) || (var3 >= var5 && var3 <= var4)) {
    console.log(var3);
} else if ((var4 >= var3 && var4 <= var5) || (var4 >= var5 && var4 <= var3)) {
    console.log(var4);
} else {
    console.log(var5);
}

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

let kr1 = Math.round(Math.random() * 9 + 1);
let kr2 = Math.round(Math.random() * 9 + 1);
let kr3 = Math.round(Math.random() * 9 + 1);
if (((kr1 + kr2) > kr3) && ((kr2 + kr3) > kr1) && ((kr1 + kr3) > kr2)) {
    console.log("Galima");
} else {
    console.log("Negalima");
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

let kint1 = Math.round(Math.random() * 2);
let kint2 = Math.round(Math.random() * 2);
let kint3 = Math.round(Math.random() * 2);
let kint4 = Math.round(Math.random() * 2);
let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;
if (kint1 === 0) {
    nuliai += 1;
} else if (kint1 === 1) {
    vienetai += 1;
} else {
    dvejetai += 1;
}
if (kint2 === 0) {
    nuliai += 1;
} else if (kint2 === 1) {
    vienetai += 1;
} else {
    dvejetai += 1;
}
if (kint3 === 0) {
    nuliai += 1;
} else if (kint3 === 1) {
    vienetai += 1;
} else {
    dvejetai += 1;
}
if (kint4 === 0) {
    nuliai += 1;
} else if (kint4 === 1) {
    vienetai += 1;
} else {
    dvejetai += 1;
}
console.log(nuliai, vienetai, dvejetai);

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

let sk1 = Math.round(Math.random() * 20 - 10);
let sk2 = Math.round(Math.random() * 20 - 10);
let sk3 = Math.round(Math.random() * 20 - 10);
if (sk1 > 0) {
    sk1 = "{" + sk1 + "}";
} else if (sk1 < 0) {
    sk1 = "[" + sk1 + "]";
} else {
    sk1 = "(" + sk1 + ")";
}
if (sk2 > 0) {
    sk2 = "{" + sk2 + "}";
} else if (sk2 < 0) {
    sk2 = "[" + sk2 + "]";
} else {
    sk2 = "(" + sk2 + ")";
}
if (sk3 > 0) {
    sk3 = "{" + sk3 + "}";
} else if (sk3 < 0) {
    sk3 = "[" + sk3 + "]";
} else {
    sk3 = "(" + sk3 + ")";
}
console.log(sk1, sk2, sk3);

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

let zvakes = Math.round(Math.random() * 2995 + 5);
let sum = zvakes;
if (sum > 2000) {
    sum = (sum - sum / 100 * 4).toFixed(2);
} else if (sum > 1000) {
    sum = (sum - sum / 100 * 3).toFixed(2);
}
console.log(`Perkama ${zvakes} zvakiu, uz ${sum} EUR`);


/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

let num1 = Math.round(Math.random() * 100);
let num2 = Math.round(Math.random() * 100);
let num3 = Math.round(Math.random() * 100);
let vidurkis = Math.round((num1 + num2 + num3)/3);
let fitcriteria = 0;
let antrasvidurkis = 0;

if (num1 >= 10 && num1 <= 90) {
    antrasvidurkis += num1;
    fitcriteria += 1;
}
if (num2 >= 10 && num2 <= 90) {
    antrasvidurkis += num2;
    fitcriteria += 1;
}
if (num3 >= 10 && num3 <= 90) {
    antrasvidurkis += num2;
    fitcriteria += 1;
}
if (antrasvidurkis != 0) {
    console.log(vidurkis);
    console.log(Math.round(antrasvidurkis/fitcriteria));
} else {
    console.log(vidurkis);
    console.log('Nera nei vieno tinkamo skaiciaus')
}

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/

let hour = 23;
let minute = 59;
let second = 56;
let addseconds = Math.round(Math.random() * 300);

console.log(`${hour}:${minute}:${second} + ${addseconds}s`);
second += addseconds;

if (second >= 60) {
    minute += Math.floor(second / 60);
    second = second - (Math.floor(second / 60) * 60);
}
if (minute >= 60) {
    hour += Math.floor(minute / 60);
    minute = minute - (Math.floor(minute / 60) * 60);
}
if (hour >= 24) {
    hour -= 24;
}
console.log(`${hour}:${minute}:${second}`);

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

let skc1 = Math.round(Math.random() * 8999 + 1000);
let skc2 = Math.round(Math.random() * 8999 + 1000);
let skc3 = Math.round(Math.random() * 8999 + 1000);
let skc4 = Math.round(Math.random() * 8999 + 1000);
let skc5 = Math.round(Math.random() * 8999 + 1000);
let skc6 = Math.round(Math.random() * 8999 + 1000);
let result = "";
let temp = `${skc1} ${skc2} ${skc3} ${skc4} ${skc5} ${skc6}`;
let maxskc = Math.max(skc1, skc2, skc3, skc4, sck5, skc6);
let minskc = Math.min(skc1, skc2, skc3, skc4, sck5, skc6);



