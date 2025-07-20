let item = document.getElementById('container-identitas');
let btnSongs = document.getElementById('favSongs');
let itemAlbum = document.getElementById('container-album');
let btnAlbum = document.getElementById('myAlbum');


btnSongs.addEventListener('click', function(){
    item.classList.toggle('hideIcon');

});

btnAlbum.addEventListener('click', function(){
    itemAlbum.classList.toggle('hideIconDua');
});
