var check_submit = 3;

$('.generate-btn').click(() => {
    let digit = Math.floor(1000 + Math.random() * 9000).toString();
    current_digit = digit;
    $('#generate-digit').val(digit);
});

function setdigit(text) {
    var prev_text = $('#submit-digit').val();
    const new_text = prev_text.concat(text.toString());
    console.log(new_text.length );
    if (new_text.length <= 4) {
        $('#submit-digit').val(new_text);
    } else {
        alert("your number is 4 input")
    }
}


function deleteDigit() {
    var current_digit = $('#submit-digit').val();

    $('#submit-digit').val(current_digit.slice(0, -1));
}

$('.button').click((event) => {
    var text = $(event.target).text();
    if (text == '<') {
        deleteDigit();
    } else if (text == 'AC') {
        $('#submit-digit').val('');
    } else {
        setdigit(text);
    }
});


$('.submit-btn').click(() => {
    const generated_text = $('#generate-digit').val();
    const taken_text = $('#submit-digit').val();

    if (check_submit == 0) {
        
    } else if (taken_text.length < 4) {
        alert("your number is 4 input")
    } else if (generated_text == taken_text) {
        $('.success').css('display', 'block').fadeOut(2000);
        check_submit = 0;
    } else {
        $('.failed').css('display', 'block').fadeOut(2000);
        check_submit--;
        if (check_submit == 0) {
            $('.submit-btn').prop('disabled', true);
            $('.action-left').text('You can not submit now');
        } else {
            $('.action-left').css('display', 'block').text(check_submit + ' try left');
        }
        
    }
});

