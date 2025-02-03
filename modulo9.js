let selectedAnswers = {};

document.getElementById("startQuizButton").addEventListener("click", function() {
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("startQuizButton").style.display = "none"; // Esconde o botão
});

function selectAnswer(question, answer) {
    selectedAnswers[question] = answer;

    const buttons = document.querySelectorAll(`button[onclick="selectAnswer('${question}', '${answer}')"]`);
    buttons.forEach(button => {
        button.style.backgroundColor = '#555'; // Alterar cor do botão selecionado
    });
}

function submitQuiz() {
    let score = 0;
    const correctAnswers = {
        q1: 'a',  // width define o tamanho do conteúdo
        q2: 'a',  // padding: 20px define o preenchimento de todos os lados
        q3: 'a',  // box-sizing controla o cálculo do tamanho total
        q4: 'd',  // box-sizing ajuda a evitar colapso de margens
        q5: 'a'   // box-sizing: border-box inclui bordas e preenchimento
    };

    for (let question in correctAnswers) {
        const selectedButton = document.querySelector(`button[onclick="selectAnswer('${question}', '${selectedAnswers[question]}')"]`);
        const correctButton = document.querySelector(`button[onclick="selectAnswer('${question}', '${correctAnswers[question]}')"]`);
        
        if (selectedAnswers[question] === correctAnswers[question]) {
            score++;
            selectedButton.style.backgroundColor = 'green';
        } else {
            selectedButton.style.backgroundColor = 'red';
            correctButton.style.backgroundColor = 'green';
        }
    }

    document.getElementById("quiz-result").innerHTML = `Você acertou ${score} de 5!`;

    if (score === 5) {
        document.getElementById("nextModuleButton").style.display = "block";
    }
}

function goToNextModule() {
    window.location.href = 'modulo10.html';  // Redireciona para o Módulo 10
}
