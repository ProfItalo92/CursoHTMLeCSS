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
        q1: 'a',  // justify-content alinha os itens na horizontal no Flexbox
        q2: 'a',  // display: grid cria um layout de grid
        q3: 'a',  // grid-template-columns define as colunas de uma grid
        q4: 'a',  // transition: transform cria uma transição de transformação
        q5: 'a'   // clearfix corrige problemas de layout com float
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
    window.location.href = 'modulo8.html';  // Redireciona para o Módulo 8
}
