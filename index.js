function calcularMedia() {
    let nomeAluno = prompt('Qual é o nome do aluno?')
    let primeiraNota = prompt(`Qual foi a primeira nota de ${nomeAluno}`)
    let segundaNota = prompt(`Além de ${primeiraNota}, qual foi a outra nota de ${nomeAluno}?`)
9
    let media = (parseInt(primeiraNota) + parseInt(segundaNota))/2

    let mediaCalculada = document.getElementById('resultado')

    mediaCalculada.innerHTML = `<p>Calculando a média final de <span>${nomeAluno}</span>.</p>
                                <p>As notas obtidas foram <span>${primeiraNota} e ${segundaNota}</span>.</p>
                                <p>A média final será <span>${media}</span>.</p>`
}