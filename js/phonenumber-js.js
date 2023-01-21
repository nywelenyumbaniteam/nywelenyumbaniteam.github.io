// js/phonenumber-js.js

function validatePhoneNumber(phoneNumber, countryCode) {
    let numberObject = libphonenumber.parsePhoneNumber(phoneNumber, countryCode)
    return numberObject.isValid();
}