function desconto(valorCompra, temCartao, temConvenio, primeiraCompra) {
    let valorDesconto = 0;
    let novoUsuario = 0;

    if (primeiraCompra) {
        novoUsuario = 0.05;
        novo = false;
    }

    valorDesconto = valorCompra * novoUsuario;
    if (temCartao && temConvenio) {
        valorDesconto = valorCompra * (0.15 + novoUsuario);
    } else if (temCartao || temConvenio) {
        valorDesconto = valorCompra * (0.1 + novoUsuario);
    }

    if (valorDesconto > 100) {
        valorDesconto = 100;
    }

    console.log('Desconto:');
    console.log(valorDesconto.toFixed(0));
    console.log('Valor com desconto:');
    return valorCompra - valorDesconto;
}

console.log(desconto(100, true, true, true));
