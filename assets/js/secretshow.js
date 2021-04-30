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
//--------------Storing the times each artist 'like' button was clicked
var timesLikedRock = 0;
var timesLikedFolk = 0;
var timesLikedIndie = 0;
var timesLikedDance = 0;

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
//----------Rock Button
$('#rock').click(function clearDOM (){
    $('#load-page').empty();
    $('#modalBtn').click(function() {
        modal.classList.remove('is-active')
        //--------like button after modal button click
        $('#like-rock-container').removeAttr('style');    
        $('#like-rock').click(function likeClick (){
            $('#like-rock').attr('src','assets/images/like btn after.png');
            timesLikedRock++;
            localStorage.setItem('likes', timesLikedRock);
            console.log('likes' + timesLikedRock);
            var likeDisplayRock = localStorage.getItem('likes', timesLikedRock);
            $('#like-rock-counter').text('You have like this band ' + likeDisplayRock + ' times');
        })
// --------------update the Dom with Youtube after modal button 
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
});

//---------------FOLK BUTTON
    $('#folk').click(function clearDOM (){
        $('#load-page').empty();
        $('#modalBtn').click(function() {
            modal.classList.remove('is-active')
            //--------like button after modal button click
            $('#like-folk-container').removeAttr('style');    
            $('#like-folk').click(function likeClick (){
                $('#like-folk').attr('src','assets/images/like btn after.png');
                timesLikedFolk++;
                localStorage.setItem('likes', timesLikedFolk);
                console.log('likes' + timesLikedFolk);
                var likeDisplayFolk = localStorage.getItem('likes', timesLikedFolk);
                $('#like-folk-counter').text('You have like this band ' + likeDisplayFolk + ' times');
            })
        })
    });
//----------------Indie Button
    $('#indie').click(function clearDOM (){
        $('#load-page').empty();
        $('#modalBtn').click(function() {
            modal.classList.remove('is-active')
            //--------like button after modal button click
            $('#like-indie-container').removeAttr('style');    
            $('#like-indie').click(function likeClick (){
                $('#like-indie').attr('src','assets/images/like btn after.png');
                timesLikedIndie++;
                localStorage.setItem('likes', timesLikedIndie);
                console.log('likes' + timesLikedIndie);
                var likeDisplayIndie = localStorage.getItem('likes', timesLikedIndie);
                $('#like-indie-counter').text('You have like this band ' + likeDisplayIndie + ' times');
            })
        })
    });
//-------------Dance Button
$('#dance').click(function clearDOM (){
    $('#load-page').empty();
    $('#modalBtn').click(function() {
        modal.classList.remove('is-active')
        //--------like button after modal button click
        $('#like-dance-container').removeAttr('style');    
        $('#like-dance').click(function likeClick (){
            $('#like-dance').attr('src','assets/images/like btn after.png');
            timesLikedDance++;
            localStorage.setItem('likes', timesLikedDance);
            console.log('likes' + timesLikedDance);
            var likeDisplayDance = localStorage.getItem('likes', timesLikedDance);
            $('#like-dance-counter').text('You have like this band ' + likeDisplayDance + ' times');
        })
    })
});

