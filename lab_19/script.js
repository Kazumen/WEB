//Task 1
$('a[href ^= "https://"]').attr('target', '_blank');

//Task 2
$('h2.head').css('background-color', '#ff0000');
$('h2.head>.inner').css('font-size', '35px');

//Task 3
function change(){
    let div = $("h3+div");
    let header = $("h3");

    header.each((index, header) => div.eq(index).insertBefore(header));
    $('.head').attr('disabled', true);
}

//Task 4
let checkbox = $('input[type = "checkbox"]');
checkbox.on('change', function(){
    if(checkbox.filter(':checked').length === 3){
        checkbox.attr('disabled', true);
    }
});