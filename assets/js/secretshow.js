// modal
var modalBg = document.querySelector('.modal-background');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.modal-close');

// updating modals on pop up with Band info

$('#rock').click(function () {
    console.log(modal);
    modal.classList.add('is-active');
    $('#modalGenre').text('Spirit Machines ');
    var url = 'assets/images/spirit-machine-rock.JPG'
    $('.modalcontent').ready(function () {
        var image = new Image();
        image.src = url;
        $('#modal-img').append(image);
    })

});

$('#folk').click(function () {
    modal.classList.add('is-active');
    $('#modalGenre').text('Pixie and The Partygrass Boys');
    var url = 'assets/images/pixieandthepartygrass.JPG'
    $('.modalcontent').ready(function () {
        var image = new Image();
        image.src = url;
        $('#modal-img').append(image);
    })
});

$('#indie').click(function () {
    modal.classList.add('is-active');
    $('#modalGenre').text('First Daze');
    var url = 'assets/images/first-daze-indie.JPG'
    $('.modalcontent').ready(function () {
        var image = new Image();
        image.src = url;
        $('#modal-img').append(image);
    })
});

$('#dance').click(function () {
    modal.classList.add('is-active');
    $('#modalGenre').text('Moodlite');
    var url = 'assets/images/moodlite-electronic.JPG'
    $('.modalcontent').ready(function () {
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

// 'Listen Now" on click close modal 
$('#modal-btn').click(function () {
    modal.classList.remove('is-active');
});

//------Storing the times each genre button was clicked
var rockCount = 0;
var folkCount = 0;
var indieCount = 0;
var danceCount = 0;
//--------------Storing the times each artist 'like' button was clicked
var timesLikedRock = localStorage.getItem('rock-likes') || 0;
var timesLikedFolk = localStorage.getItem('folk-likes') || 0;
var timesLikedIndie = localStorage.getItem('indie-likes') || 0;
var timesLikedDance = localStorage.getItem('dance-likes') || 0;

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
$('#rock').click(function clearDOM() {
    $('#load-page').empty();
    $('#modalBtn').click(function () {
        modal.classList.remove('is-active')
        
        //--------like button after modal button click
        $('#like-rock-container').removeAttr('style');
        $('#like-rock').click(function likeClick() {
            $('#like-rock').attr('src', 'assets/images/like btn after.png');
            timesLikedRock++;
            localStorage.setItem('rock-likes', timesLikedRock);
            console.log('likes' + timesLikedRock);
            var likeDisplayRock = localStorage.getItem('rock-likes');
            $('#like-rock-counter').text('You have liked this band ' + likeDisplayRock + ' times');
            // --------------update the Dom with Youtube after modal button 
        })
        var likeDisplayRock = localStorage.getItem('rock-likes', timesLikedRock);
        $('#like-rock-counter').text('You have liked this band ' + likeDisplayRock + ' times').attr('style', 'color: white');
        
        pullYoutube('RsdUSY9r898');
        pullMapbox();
    })
});


//---------------FOLK BUTTON
$('#folk').click(function clearDOM() {
    $('#load-page').empty();
    $('#modalBtn').click(function () {
        modal.classList.remove('is-active')
        //--------like button after modal button click
        $('#like-folk-container').removeAttr('style');
        $('#like-folk').click(function likeClick() {
            $('#like-folk').attr('src', 'assets/images/like btn after.png');
            timesLikedFolk++;
            localStorage.setItem('folk-likes', timesLikedFolk);
            console.log('likes' + timesLikedFolk);
            var likeDisplayFolk = localStorage.getItem('folk-likes', timesLikedFolk);
            $('#like-folk-counter').text('You have liked this band ' + likeDisplayFolk + ' times');
        })
        var likeDisplayFolk = localStorage.getItem('folk-likes', timesLikedFolk);
        $('#like-folk-counter').text('You have liked this band ' + likeDisplayFolk + ' times').attr('style', 'color: white');
        // --------------update the Dom with Youtube after modal button 
        pullYoutube('mzRGq143Xws');
        pullMapbox();
    })
});



//----------------Indie Button
$('#indie').click(function clearDOM() {
    $('#load-page').empty();
    $('#modalBtn').click(function () {
        modal.classList.remove('is-active')
        //--------like button after modal button click
        $('#like-indie-container').removeAttr('style');
        $('#like-indie').click(function likeClick() {
            $('#like-indie').attr('src', 'assets/images/like btn after.png');
            timesLikedIndie++;
            localStorage.setItem('indie-likes', timesLikedIndie);
            console.log('likes' + timesLikedIndie);
            var likeDisplayIndie = localStorage.getItem('indie-likes', timesLikedIndie);
            $('#like-indie-counter').text('You have liked this band ' + likeDisplayIndie + ' times');
        })
        var likeDisplayIndie = localStorage.getItem('indie-likes', timesLikedIndie);
        $('#like-indie-counter').text('You have liked this band ' + likeDisplayIndie + ' times').attr('style', 'color: white');
        // --------------update the Dom with Youtube after modal button 
        pullYoutube('WYdXnmDlcd0');
        pullMapbox();
    })
});
//-------------Dance Button
$('#dance').click(function clearDOM() {
    $('#load-page').empty();
    $('#modalBtn').click(function () {
        modal.classList.remove('is-active')
        //--------like button after modal button click
        $('#like-dance-container').removeAttr('style');
        $('#like-dance').click(function likeClick() {
            $('#like-dance').attr('src', 'assets/images/like btn after.png');
            timesLikedDance++;
            localStorage.setItem('dance-likes', timesLikedDance);
            console.log('likes' + timesLikedDance);
            var likeDisplayDance = localStorage.getItem('dance-likes', timesLikedDance);
            $('#like-dance-counter').text('You have liked this band ' + likeDisplayDance + ' times');
        })
        var likeDisplayDance = localStorage.getItem('dance-likes', timesLikedDance);
        $('#like-dance-counter').text('You have liked this band ' + likeDisplayDance + ' times').attr('style', 'color: white');
        // --------------update the Dom with Youtube after modal button 
        pullYoutube('7voMjZhK9BM');
        pullMapbox();
    })
});


// function to pull up youtube based on video ID 

function pullYoutube(videoID) {

    fetch('https://www.googleapis.com/youtube/v3/videos?id=' + videoID + '&key=AIzaSyCD-KLjB1ggkVaDarraIp9NgwndXJqBRDo&fields=items(id,snippet(channelId,title,categoryId,description,thumbnails),statistics,contentDetails,player)&part=snippet,statistics,contentDetails,player')

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.items[0].player.embedHtml);
            var video = (data.items[0].player.embedHtml);
            var container = document.getElementById('youtube');
            container.innerHTML = video;
        })

        .catch(error => {
            console.log(error);
        });
}

//  function to insert map
function pullMapbox() {

    // insert mapbox into the dom on button click 
    $('#mapbox-container').append('<div id="sidebar"></div>', '<div class="map" id="map"></div>');
    $('#sidebar').append('<div class="heading"></div>', '<div id="listings" class="listings"></div>');
    $('.heading').append('<h1>Upcoming Shows</h1>');
    if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function () {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFuZGFob3MiLCJhIjoiY2tuczd5bHduMHduOTJ3cW1xeW9wM2lwdiJ9.eLpeDugs3RSPY4WKvQyiGw';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-111.8910, 40.7608],
        zoom: 11,
        scrollZoom: false
    });
    var venues = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -111.8957,
                        40.7648
                    ]
                },
                "properties": {
                    "id": "1",
                    "name": "Soundwell",
                    "phoneFormatted": "(801) 290-1001",
                    "phone": "8012901001",
                    "address": "149 W 200 S",
                    "city": "Salt Lake City",
                    "country": "United States",
                    "postalCode": "84101",
                    "state": "Utah."
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -111.9089,
                        40.7669
                    ]
                },
                "properties": {
                    "id": "2",
                    "name": "Metro Music Hall",
                    "phoneFormatted": "(385) 528-0952",
                    "phone": "3855280952",
                    "address": "615 W 100 S",
                    "city": "Salt Lake City",
                    "country": "United States",
                    "postalCode": "84101",
                    "state": "Utah"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -111.8764,
                        40.7638
                    ]
                },
                "properties": {
                    "id": "3",
                    "name": "Urban Lounge",
                    "phoneFormatted": "(801) 746-0557",
                    "phone": "8017460557",
                    "address": "241 S 500 E",
                    "city": "Salt Lake City",
                    "country": "United States",
                    "postalCode": "84102",
                    "state": "Utah"
                }
            },
        ]
    };
    venues.features.forEach(function (venues, i) {
        venues.properties.id = i;
    });
    map.on('load', function (e) {
        /* Add the data to your map as a layer */
        map.addSource('places', {
            type: 'geojson',
            data: venues
        });
        buildLocationList(venues);
        addMarkers();
    });

    function addMarkers() {
        /* For each feature in the GeoJSON object above: */
        venues.features.forEach(function (marker) {
            /* Create a div element for the marker. */
            var el = document.createElement('div');
            /* Assign a unique `id` to the marker. */
            el.id = "marker-" + marker.properties.id;
            /* Assign the `marker` class to each marker for styling. */
            el.className = 'marker';

            new mapboxgl.Marker(el, { offset: [0, -23] })
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);

            el.addEventListener('click', function (e) {
                /* Fly to the point */
                flyToVenues(marker);
                /* Close all other popups and display popup for clicked store */
                createPopUp(marker);
                /* Highlight listing in sidebar */
                var activeItem = document.getElementsByClassName('active');
                e.stopPropagation();
                if (activeItem[0]) {
                    activeItem[0].classList.remove('active');
                }
                var listing = document.getElementById('listing-' + marker.properties.id);
                listing.classList.add('active');
            });

            /**
             * Create a marker using the div element
             * defined above and add it to the map.
            **/
        });
    }

    map.on('click', function (e) {
        /* Determine if a feature in the "locations" layer exists at that point. */
        var features = map.queryRenderedFeatures(e.point, {
            layers: ['locations']
        });

        /* If yes, then: */
        if (features.length) {
            var clickedPoint = features[0];

            /* Fly to the point */
            flyToVenues(clickedPoint);

            /* Close all other popups and display popup for clicked store */
            createPopUp(clickedPoint);

            /* Highlight listing in sidebar (and remove highlight for all other listings) */
            var activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            var listing = document.getElementById('listing-' + clickedPoint.properties.id);
            listing.classList.add('active');
        }
    });

    function buildLocationList(data) {
        data.features.forEach(function (venues, i) {
            /**
             * Create a shortcut for `store.properties`,
             * which will be used several times below.
            **/
            var prop = venues.properties;

            /* Add a new listing section to the sidebar. */
            var listings = document.getElementById('listings');
            var listing = listings.appendChild(document.createElement('div'));
            /* Assign a unique `id` to the listing. */
            listing.id = "listing-" + data.features[i].properties.id;
            /* Assign the `item` class to each listing for styling. */
            listing.className = 'item';

            /* Add the link to the individual listing created above. */
            var link = listing.appendChild(document.createElement('a'));
            link.href = '#';
            link.className = 'title';
            link.id = "link-" + prop.id;
            link.innerHTML = prop.name;

            /* Add details to the individual listing. */
            var details = listing.appendChild(document.createElement('div'));
            details.innerHTML = prop.address;
            if (prop.phone) {
                details.innerHTML += ' · ' + prop.phoneFormatted;
            }
            if (prop.distance) {
                var roundedDistance = Math.round(prop.distance * 100) / 100;
                details.innerHTML +=
                    '<p><strong>' + roundedDistance + ' miles away</strong></p>';
            }
            link.addEventListener('click', function (e) {
                for (var i = 0; i < data.features.length; i++) {
                    if (this.id === "link-" + data.features[i].properties.id) {
                        var clickedListing = data.features[i];
                        flyToVenues(clickedListing);
                        createPopUp(clickedListing);
                    }
                }
                var activeItem = document.getElementsByClassName('active');
                if (activeItem[0]) {
                    activeItem[0].classList.remove('active');
                }
                this.parentNode.classList.add('active');
            });
        });
    }
};
//globals
function pullMapbox() {
    $('#mapbox-container').append('<div id="sidebar"></div>', '<div class="map" id="map"></div>');
    $('#sidebar').append('<div class="heading"></div>', '<div id="listings" class="listings"></div>');
    $('.heading').append('<h1>Upcoming Shows</h1>');
    if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function () {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFuZGFob3MiLCJhIjoiY2tuczd5bHduMHduOTJ3cW1xeW9wM2lwdiJ9.eLpeDugs3RSPY4WKvQyiGw';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-111.8910, 40.7608],
        zoom: 11,
        scrollZoom: false,
        // map.doubleClickZoom.disable();
        // map.keyboard.disable();

    });
    var venues = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -111.8957,
                        40.7648
                    ]
                },
                "properties": {
                    "id": "1",
                    "name": "Soundwell",
                    "phoneFormatted": "(801) 290-1001",
                    "phone": "8012901001",
                    "address": "149 W 200 S",
                    "city": "Salt Lake City",
                    "country": "United States",
                    "postalCode": "84101",
                    "state": "Utah."
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -111.9089,
                        40.7669
                    ]
                },
                "properties": {
                    "id": "2",
                    "name": "Metro Music Hall",
                    "phoneFormatted": "(385) 528-0952",
                    "phone": "3855280952",
                    "address": "615 W 100 S",
                    "city": "Salt Lake City",
                    "country": "United States",
                    "postalCode": "84101",
                    "state": "Utah"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -111.8764,
                        40.7638
                    ]
                },
                "properties": {
                    "id": "3",
                    "name": "Urban Hall",
                    "phoneFormatted": "(801) 746-0557",
                    "phone": "8017460557",
                    "address": "241 S 500 E",
                    "city": "Salt Lake City",
                    "country": "United States",
                    "postalCode": "84102",
                    "state": "Utah"
                }
            },
        ]
    };
    venues.features.forEach(function (venues, i) {
        venues.properties.id = i;
    });
    map.on('load', function (e) {
        /* Add the data to your map as a layer */
        map.addSource('places', {
            type: 'geojson',
            data: venues
        });
        buildLocationList(venues);
        addMarkers();
    });

    function addMarkers() {
        /* For each feature in the GeoJSON object above: */
        venues.features.forEach(function (marker) {
            /* Create a div element for the marker. */
            var el = document.createElement('div');
            /* Assign a unique `id` to the marker. */
            el.id = "marker-" + marker.properties.id;
            /* Assign the `marker` class to each marker for styling. */
            el.className = 'marker';

            new mapboxgl.Marker(el, { offset: [0, -23] })
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);

            el.addEventListener('click', function (e) {
                /* Fly to the point */
                flyToVenues(marker);
                /* Close all other popups and display popup for clicked store */
                createPopUp(marker);
                /* Highlight listing in sidebar */
                var activeItem = document.getElementsByClassName('active');
                e.stopPropagation();
                if (activeItem[0]) {
                    activeItem[0].classList.remove('active');
                }
                var listing = document.getElementById('listing-' + marker.properties.id);
                listing.classList.add('active');
            });

            /**
             * Create a marker using the div element
             * defined above and add it to the map.
            **/
        });
    }

    map.on('click', function (e) {
        /* Determine if a feature in the "locations" layer exists at that point. */
        var features = map.queryRenderedFeatures(e.point, {
            layers: ['locations']
        });

        /* If yes, then: */
        if (features.length) {
            var clickedPoint = features[0];

            /* Fly to the point */
            flyToVenues(clickedPoint);

            /* Close all other popups and display popup for clicked store */
            createPopUp(clickedPoint);

            /* Highlight listing in sidebar (and remove highlight for all other listings) */
            var activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            var listing = document.getElementById('listing-' + clickedPoint.properties.id);
            listing.classList.add('active');
        }
    });

    function buildLocationList(data) {
        data.features.forEach(function (venues, i) {
            /**
             * Create a shortcut for `store.properties`,
             * which will be used several times below.
            **/
            var prop = venues.properties;

            /* Add a new listing section to the sidebar. */
            var listings = document.getElementById('listings');
            var listing = listings.appendChild(document.createElement('div'));
            /* Assign a unique `id` to the listing. */
            listing.id = "listing-" + data.features[i].properties.id;
            /* Assign the `item` class to each listing for styling. */
            listing.className = 'item';

            /* Add the link to the individual listing created above. */
            var link = listing.appendChild(document.createElement('a'));
            link.href = '#';
            link.className = 'title';
            link.id = "link-" + prop.id;
            link.innerHTML = prop.name;

            /* Add details to the individual listing. */
            var details = listing.appendChild(document.createElement('div'));
            details.innerHTML = prop.address;
            if (prop.phone) {
                details.innerHTML += ' · ' + prop.phoneFormatted;
            }
            if (prop.distance) {
                var roundedDistance = Math.round(prop.distance * 100) / 100;
                details.innerHTML +=
                    '<p><strong>' + roundedDistance + ' miles away</strong></p>';
            }
            link.addEventListener('click', function (e) {
                for (var i = 0; i < data.features.length; i++) {
                    if (this.id === "link-" + data.features[i].properties.id) {
                        var clickedListing = data.features[i];
                        flyToVenues(clickedListing);
                        createPopUp(clickedListing);
                    }
                }
                var activeItem = document.getElementsByClassName('active');
                if (activeItem[0]) {
                    activeItem[0].classList.remove('active');
                }
                this.parentNode.classList.add('active');
            });
        });
    }

    function flyToVenues(currentFeature) {
        map.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15
        });
    }

    /**
    * Create a Mapbox GL JS `Popup`.
    **/
    function createPopUp(currentFeature) {
        var popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();
        var popup = new mapboxgl.Popup({ closeOnClick: false })
            .setLngLat(currentFeature.geometry.coordinates)
            .setHTML(
                '<h3>Music Venues</h3>' +
                '<h4>' +
                currentFeature.properties.address +
                '</h4>'
            )
            .addTo(map);
    }
};


function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
    });
}

/**
* Create a Mapbox GL JS `Popup`.
**/
function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
    var popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(
            '<h3>Sweetgreen</h3>' +
            '<h4>' +
            currentFeature.properties.address +
            '</h4>'
        )
        .addTo(map);
    };
