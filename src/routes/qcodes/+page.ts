import type { Question } from "$lib/question";

export function load() {
    const questions: Question[] = [
        {
            id: 1,
            question: "Hva betyr QRG?",
            answer: "Hva er min frekvens? / Din frekvens er ...",
            explanation: "",
        },
        {
            id: 2,
            question: "Hva betyr QRM?",
            answer: "Forstyrres du av andre stasjoner? / Jeg forstyrres av andre stasjoner.",
            explanation:
                "En stasjon opereres av et menneske, så en kjekk huskeregel er M for menneske.",
        },
        {
            id: 3,
            question: "Hva betyr QRN?",
            answer: "Forstyrres du av atmosfærisk støy? / Jeg forstyrres av atmosfærisk støy",
            explanation:
                "Atmosfærisk støy er en naturlig forekomst, så en kjekk huskeregel er N for natur.",
        },
        {
            id: 4,
            question: "Hva betyr QRO?",
            answer: "Skal jeg øke sendereffekten? / Øk sendereffekten.",
            explanation:
                "Huskeregel: Skal jeg gå over min nåværende sendereffekt? O for over.",
        },
        {
            id: 5,
            question: "Hva betyr QRP?",
            answer: "Skal jeg minske sendereffekten? / Minsk sendereffekten.",
            explanation: "",
        },
        {
            id: 6,
            question: "Hva betyr QRQ?",
            answer: "Skal jeg sende fortere? / Send fortere.",
            explanation:
                '"Fortere" kan oversettes til "Quicker", så en kjekk huskeregel er Q for quicker.',
        },
        {
            id: 7,
            question: "Hva betyr QRS?",
            answer: "Skal jeg sende langsommere? / Send langsommere.",
            explanation:
                '"Langsommere" kan oversettes til "Slower", så en kjekk huskeregel er S for slower.',
        },
        {
            id: 8,
            question: "Hva betyr QRT?",
            answer: "Skal jeg stanse sendingen? / Stans sendingen.",
            explanation:
                '"Terminere" kan benyttes som synonym for "stanse", så en kjekk huskeregel er T for terminere.',
        },
        {
            id: 9,
            question: "Hva betyr QRV?",
            answer: "Er du klar? / Jeg er klar.",
            explanation: "",
        },
        {
            id: 10,
            question: "Hva betyr QRX?",
            answer: "Når vil du kalle på meg igjen? / Jeg vil kalle på deg kl ____ / om ____ min.",
            explanation:
                "Tenk X som i TX (transmission/overføring). Huskeregel: Når vil du iverksette neste overføring?",
        },
        {
            id: 11,
            question: "Hva betyr QRZ?",
            answer: "Hvem kaller meg? / ... kaller på deg [på ____ kHz/MHz]",
            explanation:
                "Frekvenser benevnes alltid i en eller annen form for Hertz, så en kjekk huskeregel er at Hertz slutter alltid på Z.",
        },
        {
            id: 12,
            question: "Hva betyr QSB?",
            answer: "Varierer min signalstyrke? / Din signalstyrke varierer.",
            explanation: "",
        },
        {
            id: 13,
            question: "Hva betyr QSK?",
            answer: "Kan du høre meg mellom dine signaler, og kan jeg om nødvendig bryte inn i din sending? / Jeg kan høre deg mellom signalene mine. Bryt inn i min sending om nødvendig.",
            explanation: "",
        },
        {
            id: 14,
            question: "Hva betyr QSL?",
            answer: "Kan du kvittere for mottakingen? / Jeg kvitterer for mottakingen.",
            explanation:
                "Mange radioamatører sender, mottar og samler på såkalte QSL-kort som viser at man har vært i kontakt med andre radioamatører.",
        },
        {
            id: 15,
            question: "Hva betyr QSO?",
            answer: "Kan du opprette forbindelse med ...? / Jeg kan opprette forbindelse med ...",
            explanation: "Tenk O for opprette.",
        },
        {
            id: 16,
            question: "Hva betyr QSY?",
            answer: "Skal jeg skifte frekvens? / Skift frekvens til ... kHz.",
            explanation: "",
        },
        {
            id: 17,
            question: "Hva betyr QTH?",
            answer: "Hva er din posisjon? / Min posisjon er ....",
            explanation:
                "Radioamatører omtaler noen ganger sitt hjem som sitt QTH, så en kjekk huskeregel er H for hjem.",
        },
    ];
    return {
        title: 'Q-koder',
        description: 'Q-koder finnes i to betydninger - med og uten spørsmålstegn. Denne quiz-en tar for seg de mest aktuelle kodene for amatørradio.',
        questions: questions
    }
};