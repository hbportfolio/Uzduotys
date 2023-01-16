/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

for (let i = 0; i < 10; i++) {
    // console.log("labas");
}

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/

for (let i = 0; i < 10; i++) {
    // console.log(i);
}

/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

let masyvas = ["Roze", "Tulpe", "Piene", "Zole", "Ramune", "Azuolas", "Liepa", "Berzas", "Drebule", "Citrinmedis"];

/* 04.
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/

for (let i = 0; i < masyvas.length; i++) {
    // console.log(masyvas[i]);
}

/* 05.
Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/

for (let i = masyvas.length - 1; i >= 0 ; i--) {
    // console.log(masyvas[i]);
}

/* 06.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/

for (let i = 10; i <= 50; i+=2) {
    // console.log(i);
}

/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/

for (let i = 10; i <= 50; i+=2) {
    if (i % 10 == 0) {
        // console.log(i);
    }
}

/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

let porinereiksme = 0;
for (let i = 0; i <= 20; i+=2) {
    if ((i % 2 == 0) && (i != 0)) {
        porinereiksme += 1;
    }
}

/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
let trumpesni = 0;
let ilgesni = 0;

for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i].length < 5) {
        trumpesni++;
    } else if (masyvas[i].length > 7) {
        ilgesni++;
    }
}
// console.log(`Ilgesni zodziai: ${ilgesni}\nTrumpesni zodziai: ${trumpesni}`)

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

let numresult = "";
let larger = 0;

for (let i = 0; i < 300; i++) {
    let num = Math.round(Math.random() * 300);
    if (num > 150) {
        larger++;
    }
    if (num > 275) {
        numresult += "[" + num + "] ";
    } else {
        numresult += num + " ";
    }
}
// console.log(`Numbers larger than 150: ${larger}\n${numresult.trimEnd()}`);

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

let result77 = "";
for (let i = 0; i < 3000; i+=77) {
    result77 += i + ", ";
}
// console.log(result77.slice(3).slice(0, -2));

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

let temp = "";
for (let i = 0; i < 10; i++) {
    temp += "* ";
}

for( let n = 0; n < 10; n++) {
    // console.log(temp.slice(0, -1));
}