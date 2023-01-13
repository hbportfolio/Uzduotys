/* 01.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
*/

let fname = "Steve";
let lname = "Carell";

if (fname.length > lname.length) {
    console.log(lname);
} else if (lname.length > fname.length) {
    console.log(fname);
} else {
    console.log("Name and last name are the same length");
}

/* 02.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)
*/

let fname2 = "Leonardo";
let lname2 = "Dicaprio";
console.log(fname2.toUpperCase(), lname2.toLowerCase());

/* 03.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

let fname3 = "Keanu";
let lname3 = "Reeves";
let initials = "";
initials = fname3.charAt(0) + lname3.charAt(0);
console.log(initials);

/* 04.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

let fname4 = "John";
let lname4 = "Snow";
let lastletters = "";
lastletters = fname4.slice(-3) + lname4.slice(-3);
console.log(lastletters);

/* 05.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
*/

let americanloc = "An American in Paris";
console.log(americanloc.replaceAll(/[a]/gi, "*"));

/* 06.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
*/

let locations = ["An American in Paris", "Breakfast at Tiffany's", "2001: A Space Odyssey", "It's a Wonderful Life"];

locations.forEach(item => console.log(item.replaceAll(/[aeiou]/gi, "*")));

/* 07.
Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.
*/

let findnum = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope";
let findnumresult = "";

for (let i = 0; i < findnum.length; i++) {
    if (/^\d+$/.test(findnum.charAt(i))) {
        findnumresult += findnum.charAt(i);
    }
}
console.log(findnumresult);

/* 08.
Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
*/

let sentences = ["Don't Be a Menace to South Central While Drinking Your Juice in the Hood", "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale"];

for(let i = 0; i < sentences.length; i++) {
    let sentencesresult = 0;
    console.log(sentences[i].split(" "));
    for(let n = 0; n < sentences[i].split(" ").length; n++)
    {
        if (sentences[i].split(" ")[n].length <= 5) {
            sentencesresult += 1;
        }
    }
    console.log(sentencesresult);
}

/* 09.
Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
*/

var characters = 'abcdefghijklmnopqrstuvwxyz';
var howmanysymbols = 3;
var randchar = "";

for (let x = 0; x < howmanysymbols; x++) {
    randchar += characters.charAt(Math.round(Math.random() * characters.length) - 1);
}
console.log(randchar);

/* 10. 
Parašykite kodą, kuris generuotų atsitiktinį stringą su 10 atsitiktine tvarka išdėliotų žodžių, o žodžius generavimui imtų iš 8-me uždavinyje pateiktų dviejų stringų. Žodžiai neturi kartotis. (reikės masyvo)
*/

let sentences2 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood" + " " + "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";
let wordlist = sentences2.split(' ');
let wordamount = 10;
let wordresult = [];

while (wordresult.length < 10) {
    if (!wordresult.includes(wordlist[(Math.round(Math.random() * wordlist.length - 1))])) {
        wordresult.push(wordlist[(Math.round(Math.random() * wordlist.length - 1))]);
    }
}
console.log(wordresult.toString());