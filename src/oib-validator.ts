import { FormControl, ValidationErrors } from '@angular/forms';

/**
 * Angular 4.x.x Reactive Forms Validator function
 * @param {FormControl} control Angular FormControl thats used for oib input
 * @returns {ValidationErrors} Returns Validations Errors with name validateOIB that can be used to bind errors in html
 */
export function checkOibValidator(control: FormControl): ValidationErrors {

    let valid : boolean = false;
    if (control !== null && control.value !== null) {
        valid = checkOib(control.value);
    }

    return valid ? null : {
        validateOib: {
            valid: valid
        }
    };
}

/**
 * Checks if the entered OIB is valid
 * @param {string} oib OIB (Osobni Identifikacijski Broj) is a unique number assigned to citizens and companies in Croatia
 * @returns {boolean} Returns boolean indicating if OIB is valid
 */
export function checkOib(oib: string): boolean {
    if (oib === null) return false;
    if (oib.length !== 11) return false;

    let b : number = parseInt(oib, 10);
    if (isNaN(b)) return false;

    let a : number = 10;
    for (let i : number = 0; i < 10; i++) {
        a = a + parseInt(oib.substr(i, 1), 10);
        a = a % 10;
        if (a === 0) a = 10;
        a *= 2;
        a = a % 11;
    }
    let controlNumber : number = 11 - a;
    if (controlNumber === 10) controlNumber = 0;

    return controlNumber === parseInt(oib.substr(10, 1));
}