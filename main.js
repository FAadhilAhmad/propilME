let item = document.getElementById('container-identitas');
let btnSongs = document.getElementById('favSongs');

let itemAlbum = document.getElementById('container-album');
let btnAlbum = document.getElementById('myAlbum');

let itemindentitas = document.getElementById('container-jurnal');
let btnjurnal = document.getElementById('jurnalStudi');

btnSongs.addEventListener('click', function(){
    item.classList.toggle('hideIcon');

});

btnAlbum.addEventListener('click', function(){
    itemAlbum.classList.toggle('hideIconDua');
});

btnjurnal.addEventListener('click', function(){
    itemindentitas.classList.toggle('hideIconTiga');

});
