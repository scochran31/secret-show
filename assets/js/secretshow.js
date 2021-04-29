// modal
var modalBg = document.querySelector('.modal-background');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.modal-close');

$('#rock').click(function () {
    modal.classList.add('is-active');
    $('#modalGenre').text('Rock Artist Here');
});

$('#folk').click(function () {
    modal.classList.add('is-active');
    $('#modalGenre').text('Folk Artist Here');
});

$('#indie').click(function () {
    modal.classList.add('is-active');
    $('#modalGenre').text('Indie Artist Here');
});

$('#dance').click(function () {
    modal.classList.add('is-active');
    $('#modalGenre').text('Dance Artist Here');
});

$('.modal-background').click(function () {
    modal.classList.remove('is-active');
});

$('.modal-close').click(function () {
    modal.classList.remove('is-active');
});

// 'Listen Now" on click close modal 
$('#modal-btn').click(function() {
    modal.classList.remove('is-active');
});
//------Storing the times each genre button was clicked

var rockCount = 0;
var folkCount = 0;
var indieCount = 0;
var danceCount = 0;

var rockEl = document.querySelector('#rock');
var folkEl = document.querySelector('#folk');
var indieEl = document.querySelector('#indie');
var danceEl = document.querySelector('#dance');

rockEl.addEventListener('click', function () {
    rockCount++;
    localStorage.setItem('rock', rockCount);
    console.log('rock' + rockCount);
});

folkEl.addEventListener('click', function () {
    folkCount++;
    localStorage.setItem('folk', folkCount);
    console.log('folk' + folkCount);
});

indieEl.addEventListener('click', function () {
    indieCount++;
    localStorage.setItem('indie', indieCount)
    console.log('indie' + indieCount);
});

danceEl.addEventListener('click', function () {
    danceCount++;
    localStorage.setItem('dance', danceCount)
    console.log('dance' + danceCount);
});

// ---------- Emptying the DOM after the modal button click

$('#rock').click(function clearDOM (){
    $('#load-page').empty();
    $('#modalBtn').click(function() {
        modal.classList.remove('is-active')
    });
    







// --------------update teh Dom with Youtube after modal button 

    fetch ( 'https://www.googleapis.com/youtube/v3/videos?id=7voMjZhK9BM&key=AIzaSyCD-KLjB1ggkVaDarraIp9NgwndXJqBRDo&fields=items(id,snippet(channelId,title,categoryId,description,thumbnails),statistics,contentDetails,player)&part=snippet,statistics,contentDetails,player')

        .then (function (response) {
        return response.json();
        })
        .then (function(data) {
        console.log(data);
        console.log(data.items[0].player.embedHtml);
        var video = (data.items[0].player.embedHtml);
        var container = document.getElementById('youtube');
        container.innerHTML = video;
        })

        .catch (error=> {
        console.log(error);
        });

        });




