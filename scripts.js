function Anfitriao(nome, convidado1, convidado2) {
  (this.nome = nome),
    (this.convidado1 = convidado1),
    (this.convidado2 = convidado2);
}

function getGuestList(anfitriao) {
  let list = [];
  for (const key in anfitriao) {
    list.push(anfitriao[key]);
  }
  return list;
}

function verificarEntrada() {
  const fernando = new Anfitriao("Fernando", "Italo", "Carlos");
  const guest = document.getElementById("nome").value;
  const host = document.getElementById("anfitriao").value;
  const guestList1 = getGuestList(fernando);

  if (host === guestList1[0] && guestList1.includes(guest)) {
    document.getElementById("permissao").innerHTML =
      "<p class='success'>Pode entrar!</p>";
  } else {
    document.getElementById("permissao").innerHTML =
      "<p class='alert'>Entrada negada! Você não está na lista!</p>";
  }
}
