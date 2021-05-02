// modal
var modalBg = document.querySelector('.modal-background');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.modal-close');

// updating modals on pop up with Band info

$('#rock').click(function () {
    modal.classList.add('is-active');
    $('#modalGenre').text('Rock Artist Here');
    var url = 'assets/images/spirit-machine-rock.JPG'
    $('.modalcontent').ready(function() {
        var image = new Image();
        image.src = url;
    $('#modal-img').append(image);
    })
});

$('#folk').click(function () {
    modal.classList.add('is-active');
    $('#modalGenre').text('Folk Artist Here');
    var url = 'assets/images/pixie%thepartygrassboys-folk.JPG'
    $('.modalcontent').ready(function() {
        var image = new Image();
        image.src = url;
    $('#modal-img').append(image);
    })
});

$('#indie').click(function () {
    modal.classList.add('is-active');
    $('#modalGenre').text('Indie Artist Here');
    var url = 'assets/images/first-daze-indie.JPG'
    $('.modalcontent').ready(function() {
        var image = new Image();
        image.src = url;
    $('#modal-img').append(image);
    })
});

$('#dance').click(function () {
    modal.classList.add('is-active');
    $('#modalGenre').text('Dance Artist Here');
    var url = 'assets/images/moodlite-electronic.JPG'
    $('.modalcontent').ready(function() {
        var image = new Image();
        image.src = url;
    $('#modal-img').append(image);
    })
});

// removing the modal after button click 

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

    });
    


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
        pullYoutube('RsdUSY9r898');

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
            // --------------update the Dom with Youtube after modal button 
            pullYoutube('mzRGq143Xws');
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
            // --------------update the Dom with Youtube after modal button 
            pullYoutube('WYdXnmDlcd0');
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
        // --------------update the Dom with Youtube after modal button 
        pullYoutube('7voMjZhK9BM');
    })
});


// function to pull up youtube based on video ID 

function pullYoutube (videoID) {

    fetch ( 'https://www.googleapis.com/youtube/v3/videos?id='+ videoID + '&key=AIzaSyCD-KLjB1ggkVaDarraIp9NgwndXJqBRDo&fields=items(id,snippet(channelId,title,categoryId,description,thumbnails),statistics,contentDetails,player)&part=snippet,statistics,contentDetails,player')
        
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
}

//globals
var apiKey = "pk.eyJ1IjoibWFuZGFob3MiLCJhIjoiY2tuczd5bHduMHduOTJ3cW1xeW9wM2lwdiJ9.eLpeDugs3RSPY4WKvQyiGw";
var mapCenter = [-111.8910,40.7608]

mapboxgl.accessToken = apiKey;
          
            var map = new mapboxgl.Map({
              container: 'map',
              style: 'mapbox://styles/mapbox/light-v10',
              center: [-111.8910,40.7608],
              zoom: 11,
              scrollZoom: false
            });
// Disable drag and zoom handlers.
map.dragging.enable();
map.touchZoom.enable();
// map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
// map.keyboard.disable();

// Add Feature Layer to map
var markers = L.mapbox.featureLayer().addTo(map);

// Initialize geoJson Data
var geoJson = [{
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-111.8957, 40.7648
]
  },
  properties: {
    title: 'Soundwell',
    address: '149 W 200 S, SLC, UT, 84101',
    description: '(801) 290-1001',
    'Tickets Available': true,
    'No Tickets': false,
    'marker-color': '#e42c7c'
  }
}, {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-111.9089, 40.7669]
  },
  properties: {
    title: 'Metro Music Hall',
    address: '615 W 100 S, SLC, UT, 84101',
    description: '(385) 528-0952',
    'Tickets Available': true,
    'No Tickets': false,
    'marker-color': '#e42c7c'
  }
}, {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-111.8764, 40.7638]
  },
  properties: {
    title: 'Urban Hall',
    address: '241 S 500 E, SLC, UT, 84102',
    description: '(801) 746-0557',
   'Tickets Available': true,
    'No Tickets': false,
    'marker-color': '#e42c7c'
  }
}];

markers.setGeoJSON(geoJson);

// Listener for marker click
markers.on('click', function(e) {
  // Force close the popup.
  e.layer.closePopup();

  var feature = e.layer.feature;
  var title = feature.properties.title;
  var content = feature.properties.description;
  var latlng = feature.geometry.coordinates;

  // Modal Content
  $("#marker_title").text(title);
  $("#marker_content").text(content);
  $("#marker_latlng").text(formatLatLng(latlng));

  $('#exampleModal').modal('show');
});

// Filter click event
$('.menu-ui a').on('click', function() {
  var filter = $(this).data('filter');
  $(this).addClass('active').siblings().removeClass('active');
  markers.setFilter(function(f) {
    return (filter === 'all') ? true : f.properties[filter] === true;
  });
  return false;
});

// Clear Modal Data
function empty() {
  // TODO: Clear Modal when Modal is closed for next marker clicked
}

// Formats Latitude and Longitude for Modal
function formatLatLng(latlng) {
  // TODO: Format Latitude and Longitude
  return latlng;
}


