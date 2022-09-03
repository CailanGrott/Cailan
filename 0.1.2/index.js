let valorCompra = 100;
let temConvenio = true;
let temCartaoLoja = true;

function validarDesconto(valorCompra, temConvenio, temCartaoLoja) {
  if (temConvenio === true && temCartaoLoja === true) {
    valorCompra - valorCompra * 0.15;
  }
}

console.log(validarDesconto(valorCompra, temConvenio, temCartaoLoja));
