function tabuadaMultiplicacao() {
  let numb = document.getElementById("numb");
  let tab = document.getElementById("settabmult");
  tab.innerHTML = "";
  for (c = 1; c <= 10; c++) {
    let n = Number(numb.value);
    let item = document.createElement("option");
    item.text = `${n} x ${c} = ${n * c}`;
    item.value = `tab${c}`;
    tab.appendChild(item);
  }
}
function tabuadaDivisao() {
  let numb = document.getElementById("numb");
  let tab1 = document.getElementById("settabdiv");
  tab1.innerHTML = "";
  for (c = 1; c <= 10; c++) {
    let n = Number(numb.value);
    let item = document.createElement("option");
    item.text = `${n} : ${c} = ${(n / c).toFixed(2)}`;
    item.value = `tab1${c}`;
    tab1.appendChild(item);
  }
}
function tabuadaAdicao() {
  let numb = document.getElementById("numb");
  let tab2 = document.getElementById("settabadi");
  tab2.innerHTML = "";
  for (c = 1; c <= 10; c++) {
    let n = Number(numb.value);
    let item = document.createElement("option");
    item.text = `${n} + ${c} = ${n + c}`;
    item.value = `tab2${c}`;
    tab2.appendChild(item);
  }
}
function tabuadaSubtracao() {
  let numb = document.getElementById("numb");
  let tab3 = document.getElementById("settabsub");
  tab3.innerHTML = "";
  for (c = 1; c <= 10; c++) {
    let n = Number(numb.value);
    let item = document.createElement("option");
    item.text = `${n} - ${c} = ${n - c}`;
    item.value = `tab3${c}`;
    tab3.appendChild(item);
  }
}
function tabuadaPotenciacao() {
  let numb = document.getElementById("numb");
  let tab4 = document.getElementById("settabpot");
  tab4.innerHTML = "";
  for (c = 1; c <= 10; c++) {
    let n = Number(numb.value);
    let item = document.createElement("option");
    item.text = `${n} ^ ${c} = ${n ** c}`;
    item.value = `tab4${c}`;
    tab4.appendChild(item);
  }
  numb.value = "";
}
