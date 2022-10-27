// Faça um Programa que de desconto de acordo com a forma de pagamento.

// Código Condição de Pagamento:
// 1 - À vista em Débito, recebe 10% de desconto;
// 2 - À vista no Dinheiro ou no PIX, recebe 15% de desconto;
// 3 - Em duas vezes , preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;


const calcularJuros = (precoEtiqueta, metodoPagamento) => {
  if(metodoPagamento === 1) return precoEtiqueta - (precoEtiqueta * 0.1);
  if(metodoPagamento === 2) return precoEtiqueta - (precoEtiqueta * 0.15);
  if(metodoPagamento === 3) return precoEtiqueta;
  if(metodoPagamento === 4) return precoEtiqueta + (precoEtiqueta * 0.1);
}

const calcularPagamento = (precoEtiqueta, metodoPagamento) => {
  const valorFinal = calcularJuros(precoEtiqueta, metodoPagamento);
  return valorFinal
}

console.log(calcularPagamento(100, 4))