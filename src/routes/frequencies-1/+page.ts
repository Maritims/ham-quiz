export type Question = {
    id: number;
    question: string;
    answer: {
        start: number;
        end: number;
    },
    explanation: string;
};

export function load() {
    const explanation = 'Formelen for å beregne ca. frekvens (MHz) er f = 300 / λ.';
    const questions: Question[] = [{
        id: 1,
        question: 'Hva er allokeringen(e) for 160 meter-båndet i kHz?',
        answer: {
            start: 1810,
            end: 2000
        },
        explanation: explanation + ' Frekvensområdet 1850 - 2000 kHz er sekundært.'
    }, {
        id: 2,
        question: 'Hva er allokeringen(e) for 80 meter-båndet i kHz?',
        answer: {
            start: 3500,
            end: 3800
        },
        explanation: explanation
    }, {
        id: 3,
        question: 'Hva er allokeringen(e) for 60 meter-båndet i kHz?',
        answer: {
            start: 5260,
            end: 5410
        },
        explanation: explanation
    }, {
        id: 4,
        question: 'Hva er allokeringen(e) for 40 meter-båndet i kHz?',
        answer: {
            start: 7000,
            end: 7200
        },
        explanation: explanation
    }, {
        id: 5,
        question: 'Hva er allokeringen(e) for 30 meter-båndet i kHz?',
        answer: {
            start: 10100,
            end: 10150
        },
        explanation: explanation
    }, {
        id: 6,
        question: 'Hva er allokeringen(e) for 20 meter-båndet i kHz?',
        answer: {
            start: 14000,
            end: 14350
        },
        explanation: explanation
    }, {
        id: 7,
        question: 'Hva er allokeringen(e) for 17 meter-båndet i kHz?',
        answer: {
            start: 18068,
            end: 18168
        },
        explanation: explanation
    }, {
        id: 8,
        question: 'Hva er allokeringen(e) for 15 meter-båndet i kHz?',
        answer: {
            start: 21000,
            end: 21450
        },
        explanation: explanation
    }, {
        id: 9,
        question: 'Hva er allokeringen(e) for 12 meter-båndet i kHz?',
        answer: {
            start: 24740,
            end: 24990
        },
        explanation: explanation + ' Frekvensområdet 24740 - 24890 er sekundært.'
    }, {
        id: 10,
        question: 'Hva er allokeringen(e) for 10 meter-båndet i kHz?',
        answer: {
            start: 28000,
            end: 29700
        },
        explanation: explanation
    }];
    return {
        title: 'Båndplan 1',
        description: 'Båndplanen inneholder en oversikt over de norske HF-amatørbåndene, deres frekvenser og karakteristikker.',
        questions: questions
    }
};