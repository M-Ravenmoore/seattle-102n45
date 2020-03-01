var preference = prompt('Do you want Cake or cookies?');
var message;

if (preference === 'Cake') {
    message = 'YAY you like Cake';
} else if (preference === 'Cookies') {
    message = 'Cookies track you and are crunchy!!!';
} else {
    message = 'left Feild!!';
};

document.write('<h3>' + message + '</h3>');