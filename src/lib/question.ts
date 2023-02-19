export type Question = {
    id: number;
    question: string;
    answer: string;
    explanation: string;
};

export function getFisherYatesShuffledArray(questions: Question[]): Question[] {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
      }
    return questions;
}

function getRandomQuestion(questions: Question[], randomQuestions: Question[]): Question {
    const index = Math.floor(Math.random() * questions.length);
    const question = questions[index];
    return randomQuestions.indexOf(question) === -1
        ? question
        : getRandomQuestion(questions, randomQuestions);
}

export function getRandomQuestions(questions: Question[], question: Question): Question[] {
    const randomQuestions: Question[] = [];
    if (questions.indexOf(question) > -1) {
        randomQuestions.push(question);
    }
    for (let i = 0; i < 3; i++) {
        randomQuestions.push(getRandomQuestion(questions, randomQuestions));
    }
    return getFisherYatesShuffledArray(randomQuestions);
}