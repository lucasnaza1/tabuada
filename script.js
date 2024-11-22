function tabuadaMultiplicacao() {
  let numb = document.getElementById("valor");
  let coluna = document.getElementById("multiplicacao");
  coluna.innerHTML = "";
  for (c = 1; c <= 10; c++) {
    let n = Number(valor.value);
    let item = document.createElement("option");
    item.text = `${n} x ${c} = ${n * c}`;
    item.value = `coluna${c}`;
    coluna.appendChild(item);
  }
}
function tabuadaDivisao() {
  let valor = document.getElementById("valor");
  let coluna1 = document.getElementById("divisao");
  coluna1.innerHTML = "";
  for (c = 1; c <= 10; c++) {
    let n = Number(valor.value);
    let item = document.createElement("option");
    item.text = `${n} : ${c} = ${(n / c).toFixed(2)}`;
    item.value = `coluna1${c}`;
    coluna1.appendChild(item);
  }
}
function tabuadaAdicao() {
  let valor = document.getElementById("valor");
  let coluna2 = document.getElementById("adicao");
  coluna2.innerHTML = "";
  for (c = 1; c <= 10; c++) {
    let n = Number(valor.value);
    let item = document.createElement("option");
    item.text = `${n} + ${c} = ${n + c}`;
    item.value = `coluna2${c}`;
    coluna2.appendChild(item);
  }
}
function tabuadaSubtracao() {
  let valor = document.getElementById("valor");
  let coluna3 = document.getElementById("subtracao");
  coluna3.innerHTML = "";
  for (c = 1; c <= 10; c++) {
    let n = Number(valor.value);
    let item = document.createElement("option");
    item.text = `${n} - ${c} = ${n - c}`;
    item.value = `coluna3${c}`;
    coluna3.appendChild(item);
  }
}
function tabuadaPotenciacao() {
  let valor = document.getElementById("valor");
  let coluna4 = document.getElementById("potenciacao");
  coluna4.innerHTML = "";
  for (c = 1; c <= 10; c++) {
    let n = Number(valor.value);
    let item = document.createElement("option");
    item.text = `${n} ^ ${c} = ${n ** c}`;
    item.value = `coluna4${c}`;
    coluna4.appendChild(item);
  }
  valor.value = "";
}
