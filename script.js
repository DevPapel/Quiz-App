function myFunction() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}


const getQuizData = [
    {
        Question: "The darkest part of the shadow is",
        A: "Umbra",
        B: "Penumbra ",
        C: "Hyperumbra",
        D: "None of these",
        AnswerKey: "A",
    },
    {
        Question: "What does DNA stands for?",
        A: "Deoxyisnicolic Acid",
        B: "Deoxyliconic Acid",
        C: "Deoxyribonulic Acid",
        D: "Deoxyribosomic Acid",
        AnswerKey: "A",
    },
    {
        Question: "The concept of gravity was discovered by which famous physicist?",
        A: "Galileo Galilei",
        B: "Isaac Newton",
        C: "Robert Boyle",
        D: "Leonardo da Vinci",
        AnswerKey: "A",
    },
    {
        Question: "What is the function of the blood cell?",
        A: "Carry messages all over the body.",
        B: "To control the size of the openings.",
        C: "To carry oxygen around the body.",
        D: "None of the above",
        AnswerKey: "A",
    },
    {
        Question: "You see your reflection in a mirror because:",
        A: "Light is absorbed",
        B: "Light is diffracted",
        C: "Light is reflect",
        D: "Light is refracted",
        AnswerKey: "A",
    },
    {
        Question: "Which of these have a positive charge and are found in the nucleus of an atom?",
        A: "Neutrons",
        B: "Protons",
        C: "Electrons",
        D: "Elements",
        AnswerKey: "A",
    },
    {
        Question: "One complete revolution of Earth around the sun is equal to approximately one ___",
        A: "Year",
        B: "Month",
        C: "Week",
        D: "Day",
        AnswerKey: "A",
    },
    {
        Question: "Which one of these isn't an organ in the human body?",
        A: "Heart",
        B: "Kidney",
        C: "Brain",
        D: "Spatula",
        AnswerKey: "A",
    },
    {
        Question: "How many bones are there in an adult human body?",
        A: "36",
        B: "169",
        C: "206",
        D: "226",
        AnswerKey: "A",
    },
    {
        Question: "What do Venus and Mercury have in common?",
        A: "Their atmospheres are identical",
        B: "They don't have moons.",
        C: "They have nothing in common",
        D: "Their surface temperatures are exactly the same.",
        AnswerKey: "A",
    },


];

const getQuiz= document.getElementById('getQuiz')
const getAnswers = document.querySelectorAll('.getAnswer')
const getQuestions = document.getElementById('getQuestion')
const answer_a = document.getElementById('getA')
const answer_b = document.getElementById('getB')
const answer_c = document.getElementById('getC')
const answer_d = document.getElementById('getD')
const submitAns = document.getElementById('getSubmit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = getQuizData[currentQuiz]

    getQuestions.innerText = currentQuizData.Question
    answer_a.innerText = currentQuizData.A
    answer_b.innerText = currentQuizData.B
    answer_c.innerText = currentQuizData.C
    answer_d.innerText = currentQuizData.D
}

function deselectAnswers() {
    getAnswers.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    getAnswers.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitAns.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === getQuizData[currentQuiz].AnswerKey) {
           score++
       }

       currentQuiz++

       if(currentQuiz < getQuizData.length) {
           loadQuiz()
       } else {
           getQuiz.innerHTML = `
           <h1>You Finished the Exam!</h1>
           <h2>Result: ${score}/${getQuizData.length}</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})