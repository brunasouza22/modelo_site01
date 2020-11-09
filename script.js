function carregar() {
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = './img/manha.jpg';
    document.body.style.background = 'rgb(118, 118, 248)';
  } else if (hora >= 12 && hora < 18) {
    img.src = './img/tarde.jpg';
    document.body.style.background = 'rgb(243, 129, 87)';
  } else {
    //Boa noite
    img.src = './img/noite.jpg';
    document.body.style.background = 'rgb(75, 74, 73)';
  }
}
