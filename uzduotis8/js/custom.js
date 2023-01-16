/*
1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
*/

let masyvas = [];
for (let i = 0; i < 30; i++) {
    masyvas.push(Math.round(Math.random() * 20 + 5));
}
// console.log(masyvas);


/*
2. Naudodamiesi 1 uždavinio masyvu:
- Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
- Raskite didžiausią masyvo reikšmę;
- Suskaičiuokite visų reikšmių sumą;
- Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
- Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
- Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių
- Masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
- Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
*/

let masyvasDidesnesReiksmes = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 10) {
        masyvasDidesnesReiksmes++;
    }
}
// console.log(masyvasDidesnesReiksmes);


let masyvasMax = Math.max(...masyvas);
// console.log(masyvasMax);


let masyvasSum = masyvas.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(masyvasSum);


let masyvasMinusIndex = [];
for (let i = 0; i < masyvas.length; i++) {
    masyvasMinusIndex.push(masyvas[i] - i);
}
// console.log(masyvasMinusIndex);


let masyvasBigger = [...masyvas];
for (let i = 0; i < 10; i++) {
    masyvasBigger.push(Math.round(Math.random() * 20 + 5));
}
// console.log(masyvasBigger);


let masyvasPorines = [];
let masyvasNeporines = [];
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] % 2 == 0) {
        masyvasPorines.push(masyvas[i]);
    } else {
        masyvasNeporines.push(masyvas[i]);
    }
}
// console.log(masyvasPorines, masyvasNeporines);


let masyvasPoriniaiNuliai = [...masyvas];
for (let i = 0; i < masyvas.length; i++) {
    if (i % 2 == 0 && masyvasPoriniaiNuliai[i] > 15) {
        masyvasPoriniaiNuliai[i] = 0;
    }
}
// console.log(masyvasPoriniaiNuliai);


let masyvasIndexMaziausias = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 10) {
        masyvasIndexMaziausias = i;
        break;
    }
}
// console.log(masyvasIndexMaziausias);

/*
3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
*/

let listLetters = [];
let letters = "ABCD";

for (let i = 0; i < 200; i++) {
    listLetters.push(letters.charAt(Math.round(Math.random() * 3)));
}
// console.log(listLetters);


/*
4. Išrūšiuokite 3 uždavinio masyvą pagal abecėlę.
*/

// console.log(listLetters.sort());

/*
5. Sugeneruokite masyvą, kurio reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvo ilgis 100. Masyvo reikšmės turi būti unikalios (t.y. neturi kartotis).
*/

let listRandom = [];
let x = 0;

while (listRandom.length < 100) {
    x = Math.round(Math.random() * 899 + 100);
    if (!listRandom.includes(x)) {
        listRandom.push(x);
    }
}
// console.log(listRandom)