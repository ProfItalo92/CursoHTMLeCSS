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
        q1: 'a',  // &lt;a&gt; cria links
        q2: 'a',  // src define o caminho da imagem
        q3: 'a',  // &lt;img&gt; define uma imagem
        q4: 'a',  // Usar CSS para tornar a imagem responsiva
        q5: 'a'   // alt descreve a imagem
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
    window.location.href = 'modulo5.html';  // Redireciona para o Módulo 5
}
