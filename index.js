// Body Mass Index (BMI) Calculator for adults

// This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 18 or older.
// Category	BMI range - kg/m2
// Severe Thinness	      < 16
// Moderate Thinness	16 - 17
// Mild Thinness	    17 - 18.5
// Normal	          18.5 - 25
// Overweight	        25 - 30
// Obese Class I       	30 - 35
// Obese Class II	    35 - 40
// Obese Class III    	   > 40

const name = 'Ana'
const weight = 67
const height = 1.64
const sex = 'female'

const bmi = weight / (height * height)

function bmiCalculator(bmi, name){
    if (bmi > 40){
        console.log(`${name} you're Obese Class III.`)
    } else if (bmi > 35){
        console.log(`${name} you're Obese Class II.`)
    } else if (bmi > 30){
        console.log(`${name} you're Obese Class I.`)
    } else if (bmi > 25){
        console.log(`${name} you're overweight.`)
    } else if (bmi > 18.5){
        console.log(`${name} you're with normal weight.`)
    } else if (bmi > 17){
        console.log(`${name} you're Mild Thinness.`)
    } else if (bmi > 16){
        console.log(`${name} you're Moderate Thinness.`)
    } else {
        console.log(`${name} you're Severe Thinness.`)
    }
}

bmiCalculator(bmi, name);
