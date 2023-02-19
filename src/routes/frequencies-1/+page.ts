import type { Question } from "$lib/question";

export function load() {
    const questions: Question[] = [{
        id: 1,
        question: 'Hva er allokeringen(e) for 160 meter-båndet?',
        answer: '1810 - 2000 kHz, 1850 - 2000 er sekundært',
        explanation: 'Formelen for å beregne ca. bølgelengde er l = 300 / f (MHz).'
    }, {
        id: 2,
        question: 'Hva er allokeringen(e) for 80 meter-båndet?',
        answer: '3500 - 3800 kHz',
        explanation: ''
    }, {
        id: 3,
        question: 'Hva er allokeringen(e) for 60 meter-båndet?',
        answer: '5260 - 5410 kHz',
        explanation: ''
    }, {
        id: 4,
        question: 'Hva er allokeringen(e) for 40 meter-båndet?',
        answer: '7000 - 7200 kHz',
        explanation: ''
    }, {
        id: 5,
        question: 'Hva er allokeringen(e) for 30 meter-båndet?',
        answer: '10100 - 10150 kHz',
        explanation: ''
    }, {
        id: 6,
        question: 'Hva er allokeringen(e) for 20 meter-båndet?',
        answer: '14000 - 14350 kHz',
        explanation: ''
    }, {
        id: 7,
        question: 'Hva er allokeringen(e) for 17 meter-båndet?',
        answer: '18068 - 18168 kHz',
        explanation: ''
    }, {
        id: 8,
        question: 'Hva er allokeringen(e) for 15 meter-båndet?',
        answer: '21000 - 21450 kHz',
        explanation: ''
    }, {
        id: 9,
        question: 'Hva er allokeringen(e) for 12 meter-båndet?',
        answer: '24740 - 24990 kHz, 24740 - 24890 er sekundært',
        explanation: ''
    }, {
        id: 10,
        question: 'Hva er allokeringen(e) for 10 meter-båndet?',
        answer: '28000 - 29700 kHz',
        explanation: ''
    }];
    return {
        title: 'Båndplan',
        description: 'Båndplanen inneholder en oversikt over de norske HF-amatørbåndene, deres frekvenser og karakteristikker.',
        questions: questions
    }
};