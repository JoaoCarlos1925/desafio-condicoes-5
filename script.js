function classificarNota() {
    const nota = parseFloat(document.getElementById('nota').value);
    let classificacao;

    if (nota < 60) {
        classificacao = "F";
    } else if (nota >= 60 && nota <= 69) {
        classificacao = "D";
    } else if (nota >= 70 && nota <= 79) {
        classificacao = "C";
    } else if (nota >= 80 && nota <= 89) {
        classificacao = "B";
    } else if (nota >= 90) {
        classificacao = "A";
    } else {
        classificacao = "Nota inválida";
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Classificação: ${classificacao}`;
}