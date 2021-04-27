// modal
var modalBg = document.querySelector('.modal-background');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.modal-close');

$('#rock').click(function() {
    modal.classList.add('is-active');
    $('#modalGenre').text('Rock Artist Here');
});

$('#folk').click(function() {
    modal.classList.add('is-active');
    $('#modalGenre').text('Folk Artist Here');
});

$('#indie').click(function() {
    modal.classList.add('is-active');
    $('#modalGenre').text('Indie Artist Here');
});

$('#dance').click(function() {
    modal.classList.add('is-active');
    $('#modalGenre').text('Dance Artist Here');
});

$('.modal-background').click(function() {
    modal.classList.remove('is-active');
});

$('.modal-close').click(function(){
    modal.classList.remove('is-active');
});