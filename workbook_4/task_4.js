// Регулярное выражение для адреса электронной почты
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Регулярное выражение для URL
let urlRegex = /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;


console.log(emailRegex.test('example@ya.ru'));
console.log(urlRegex.test('http://example.ya.ru'));