function contar() {
  let ini = document.getElementById("txti");
  let final = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (
    ini.value.length == 0 ||
    final.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert("[ERRO] Faltam dados");
  } else {
    res.innerHTML = "contando: <br>";
    let i = Number(ini.value);
    let f = Number(final.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("Passo inválido! Considerando passo = 1");
      p = 1;
    }
    if (i < f) {
      for (let c = i; c < f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
      res.innerHTML += `\u{1F3c1}`;
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
      res.innerHTML += `\u{1F3c1}`;
    }
  }
}
