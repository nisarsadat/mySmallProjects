'use strict';

// if and else
let nisar = "sadat";
nisar === "sadat" ? console.log("nisar sadat") : console.log( "musafa sadat");



// logic and booleen value
let nisar1 = false;
let nisar2 = true;

(nisar1 || nisar2)? console.log("nisar jan") : console.log("mustafa jan");


// making a function


function nisarr(num1 , num2)
{
    const jan = `this is number ${num1} and this number ${num2}.`;
    return jan;
}

const janan = nisarr(1 ,2);

console.log(janan);

// a simple function 

function kalim( birthday )
{
    return 2023 - birthday;
}
const hayat = kalim(1998);
console.log(hayat)


// arrow function 

const ninsarrr = year => 2090 - year ;
const age11 = ninsarrr(1980);
console.log(age11)

// making an array 

const mommy = ['nisar' , 'mustafa' , ' enayat']
console.log(mommy)
console.log(mommy[2])
console.log(mommy.length)

// adding an array to another array
const family = ['mom' , mommy , 'yanga']
console.log(family)
console.log(family.length)
console.log(family[2])
console.log(family[1])

// making a function using arrays in them 

const calage = function (calage)
{
    return  2024 - calage;

}

const ga = [2000 , 2002 , 2004 , 2006 , 2010]

const ag1 = calage(ga[0])
const ag2 = calage(ga[1])
const ag3 = calage(ga[3])
const ag4 = calage(ga[4])

console.log(ag1);
console.log(ag2);
console.log(ag3);
console.log(ag4);

const narray =[ ag1 , ag2 , ag3 ,ag4];
console.log(narray);



// working practical 

const h1 = document.querySelector('.hone').textConte





