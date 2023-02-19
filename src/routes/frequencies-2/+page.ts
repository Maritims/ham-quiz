import type { Question } from "$lib/question";

export function load() {
    const explanation = 'Formelen for å beregne ca. bølgelengde (m) er λ = 300 * f (MHz).';
    const questions: Question[] = [{
        id: 1,
        question: 'Hvilket bånd finnes innenfor 1810 - 2000 kHz?',
        answer: '160 meter',
        explanation: explanation
    }, {
        id: 2,
        question: 'Hvilket bånd finnes innenfor 3500 - 3800 kHz?',
        answer: '80 meter',
        explanation: explanation
    }, {
        id: 3,
        question: 'Hvilket bånd finnes innenfor 5260 - 5410 kHz?',
        answer: '60 meter',
        explanation: explanation
    }, {
        id: 4,
        question: 'Hvilket bånd finnes innenfor 7000 - 7200 kHz?',
        answer: '40 meter',
        explanation: explanation
    }, {
        id: 5,
        question: 'Hvilket bånd finnes innenfor 10100 - 10510 kHz?',
        answer: '30 meter',
        explanation: explanation
    }, {
        id: 6,
        question: 'Hvilket bånd er innenfor 14000 - 14350 kHz?',
        answer: '20 meter',
        explanation: explanation
    }, {
        id: 7,
        question: 'Hvilket bånd er innenfor 18068 - 18168 kHz?',
        answer: '17 meter',
        explanation: explanation
    }, {
        id: 8,
        question: 'Hvilket bånd er innenfor 21000 - 21450 kHz?',
        answer: '15 meter',
        explanation: explanation
    }, {
        id: 9,
        question: 'Hvilket bånd er innenfor 24740 - 24990 kHz?',
        answer: '12 meter',
        explanation: explanation
    }, {
        id: 10,
        question: 'Hvilket bånd er innenfor 28000 - 29700 kHz?',
        answer: '10 meter',
        explanation: explanation
    }];
    return {
        title: 'Båndplan 2',
        description: 'Båndplanen inneholder en oversikt over de norske HF-amatørbåndene, deres frekvenser og karakteristikker.',
        questions: questions
    }
};