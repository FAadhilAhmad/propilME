let item = document.getElementById('container-identitas');
let btnSongs = document.getElementById('favSongs');

let itemAlbum = document.getElementById('container-album');
let btnAlbum = document.getElementById('myAlbum');

let itemindentitas = document.getElementById('container-jurnal');
let btnjurnal = document.getElementById('jurnalStudi');

btnSongs.addEventListener('click', function(){
    item.classList.toggle('hideIcon');
    itemAlbum.classList.add('hideIconDua');
    itemindentitas.classList.add('hideIconTiga');
});

btnAlbum.addEventListener('click', function(){
    itemAlbum.classList.toggle('hideIconDua');
    item.classList.add('hideIcon');
    itemindentitas.classList.add('hideIconTiga');
});

btnjurnal.addEventListener('click', function(){
    itemindentitas.classList.toggle('hideIconTiga');
    item.classList.add('hideIcon');
    itemAlbum.classList.add('hideIconDua');
});

// function from comentar
let inputComentar = document.getElementById('inputComentar');
let outputComentar = document.getElementById('outputComentar2');
let btnComentar = document.getElementById('btnComentar');

btnComentar.addEventListener('click', function(){
  let komentar = inputComentar.value.trim();

  if (komentar !==''){
    let paragraf = document.createElement('p');
    paragraf.textContent = komentar;
    outputComentar.appendChild(paragraf);

    inputComentar.value = '';
  }
  outputComentar.classList.remove('hideComentar2');
});

//function Comentar latihan
let inputMasuk = document.getElementById('inputMasuk');
let cardHasil = document.getElementById('cardHasil');
let btnInput = document.getElementById('btnInput');
let hideCard = document.getElementById('hasilComentar');

btnInput.addEventListener('click', function(){
  let comment = inputMasuk.value.trim();

  if (comment !==''){
    let card = document.createElement('h2');
    card.textContent = comment;
    cardHasil.appendChild(card);

    cardHasil.value ='';
  }

  hideCard.classList.remove('hideComment');

});
