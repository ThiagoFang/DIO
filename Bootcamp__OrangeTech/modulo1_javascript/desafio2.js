// 2 -  Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, 
// calcule e imprima a sua média e a sua classificação conforme a tabela abaixo

// Média = (nota 1 + nota 2 + nota 3) / 3;

// Classificação:
//   - Média menor que 5, reprovação;
//   - Média entre 5 e 7, recuperação;
//   - Média maior de 7, passou de semestre;

const calcularMédia = (nota1, nota2, nota3) => {
  const media = (nota1 + nota2 + nota3) / 3;

  if(media < 5) return `A média do aluno é ${media}, ele está reprovado!`
  if(media >= 5 && media <= 7) return `A média do aluno é ${media}, ele esta de recuperação!`
  if(media > 7) return `A média do aluno é ${media}, ele está aprovado!`
};

console.log(calcularMédia(8, 8, 8));