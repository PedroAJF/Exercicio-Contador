function contar() {
  let ini = document.getElementById('texti');
  let fim = document.getElementById('textf');
  let passo = document.getElementById('textp');
  let res = document.getElementById('res');

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert('ERRO! Preencha corretamente!');
  } else {
    res.innerHTML = 'Resultado:';

    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    for (let c = i; c <= f; c += p) {
      res.innerHTML += `${c} \u{1F449}`;
    }
  }
}
