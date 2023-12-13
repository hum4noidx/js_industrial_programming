let phoneNumber = "+1 (123) 456-7890";
let cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

console.log(cleanedPhoneNumber);

let cardNumber = "1234567890123456пп";
let cleanedCardNumber = cardNumber.replace(/\D/g, "");

let formattedCardNumber = cleanedCardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");

console.log(formattedCardNumber);