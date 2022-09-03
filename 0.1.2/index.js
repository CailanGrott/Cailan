let valorCompra = 100;
let temConvenio = true;
let temCartaoLoja = false;

function validarDesconto(valorCompra, temConvenio, temCartaoLoja) {
  if (temConvenio === true && temCartaoLoja === true) {
    return valorCompra - valorCompra * 0.15;
  } else if (temConvenio === true || temCartaoLoja === true) {
    return valorCompra - valorCompra * 0.1;
  } else {
    return valorCompra;
  }
}

console.log(validarDesconto(valorCompra, temConvenio, temCartaoLoja));
