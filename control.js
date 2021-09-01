
// var current_digit = 0000;

$('.generate-btn').click(() => {
    let digit = Math.floor(1000 + Math.random() * 9000);
    current_digit = digit;
    $('#generate-digit').val(digit);
});

function setdigit() {

}

function deleteDigit() {

}

$('.button').click((event) => {
    var text = $(event.target).text();
    if (text == '<') {
        deleteDigit();
    } else if (text == 'AC') {

    } else {
        setdigit(text);
    }
});


