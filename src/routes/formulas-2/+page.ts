import type { Question } from "$lib/question";

export function load() {
    const questions: Question[] = [{
        id: 1,
        question: 'Hvordan beregnes effekt, spenning og strøm?',
        answer: 'P = U * I',
        explanation: 'P (effekt) regnes ut ved å multiplisere U (spenning) med I (strøm). Husk at formelen kan vendes etter behov for å regne ut de andre faktorene.'
    }, {
        id: 2,
        question: 'Hvordan beregnes spenning, motstand og strøm?',
        answer: 'U = R * I',
        explanation: 'U (spenning) regnes ut ved å multiplisere R (motstand) med I (strøm). Husk at formelen kan vendes etter behov for å regne ut de andre faktorene.'
    }, {
        id: 3,
        question: 'Hvordan beregnes den samlede effektive motstanden ved bruk av flere motstander i serie?',
        answer: 'Rt = R1 + R2 + R3 + ...',
        explanation: 'For å finne den samlede effektive motstand av motstander i serie, må vi legge sammen de enkelte verdiene. Husk å ta hensyn til ulike enheter som Ω, kΩ og MΩ. Summering må gjøres av like enheter.'
    }, {
        id: 4,
        question: 'Hvordan beregnes den samlede effektive motstanden ved bruk av flere motstander i parallell hvor alle motstandene er like?',
        answer: 'Rt = R / n',
        explanation: 'Generelt, for n like motstander vil den totale strømmen være n ganger strømmen gjennom en av motstandene. R er motstandsverdien av hvilken som helst av motstandene og n er antallet motstander.'
    }, {
        id: 5,
        question: 'Hvordan beregnes den samlede effektive motstanden ved bruk av flere parallelle motstander hvor motstandene eru like?',
        answer: '1 / Rt = 1/R1 + 1/R2 + 1/R3 + ...',
        explanation: ''
    }, {
        id: 6,
        question: 'Hvordan beregnes spenningen mellom to motstander i en potensialdeler (spenningsdeler)?',
        answer: 'Uut = Uinn * (R2 / (R1 + R2))',
        explanation: 'Den tlførte spenningen Uinn fører til at det flyter strøm i de to seriekoblede motstandene R1 og R2. Spenningen (Uut) over R2 følger direkte av Ohms lov. Av denne formelen kan vi se at strømmen som trekkes fra potensialdeleren er liten i forhold til strømmen i R1 og R2.'
    }, {
        id: 7,
        question: 'Hvordan beregnes den samlede kapasitansen for kondensatorer i parallell?',
        answer: 'Ct = C1 + C2 + C3 + ...',
        explanation: 'Tenk på parallellkoblede kondensatorer som at hver kondensator øker arealet på platene. På samme måten vil den samlede kapasitansen tilsvare summen av de individuelle kapasitansene.'
    }, {
        id: 8,
        question: 'Hvordan beregnes den samlede kapasitansen for kondensatorer i serie?',
        answer: '1/Ct = 1/C1 + 1/C2 + 1/C3 + ...',
        explanation: 'Tenk på dette som at avstanden mellom platene øker.'
    }, {
        id: 9,
        question: 'Hvordan beregnes den samlede induktansen for spoler i serie?',
        answer: 'Lt = L1 + L2 + L3 + ...',
        explanation: 'Samlet induktans regnes ut på samme måte som effektiv motstand, dvs. at den samlede induktansen alltid er summen av alle spolenes induktans.'
    }, {
        id: 10,
        question: 'Hvordan beregnes den samlede induktansen for spoler i parallell?',
        answer: '1/Lt = 1/L1 + 1/L2 + 1/L3 + ...',
        explanation: 'Det er uvanlig at spoler kobles i parallell. Den samlede induktansen regnes ut på samme måte som effektiv motstand.'
    }, {
        id: 11,
        question: 'Hvordan beregnes frekvens målt i antall svingninger per sekund?',
        answer: 'f = 1 / T',
        explanation: ''
    }, {
        id: 12,
        question: 'Hvordan beregnes effektiv verdi (RMS)?',
        answer: 'Urms = 0,707 * Uspiss',
        explanation: 'I virkeligheten er det ikke spissverdien som vanligvis oppgis. Det vanligste er å oppgi effektivverdien, også kalt RMS-verdien.'
    }, {
        id: 13,
        question: 'Hvordan beregnes kapasitiv reaktans, dvs. en kondensators motstand?',
        answer: 'Xc = (2πfC)^-1',
        explanation: ''
    }, {
        id: 14,
        question: 'Hvordan beregnes induktiv reaktans, dvs. en spoles motstand?',
        answer: 'Xl = 2πfL?',
        explanation: ''
    }, {
        id: 15,
        question: 'Hvordan beregnes resonansfrekvensen (MHz) i en krets?',
        answer: 'f = 1 / (2π * sqrt(LC))',
        explanation: ''
    }, {
        id: 16,
        question: 'Hvordan beregnes spolens induktans?',
        answer: 'L = 1 / (4 * π² * f² * C)',
        explanation: ''
    }, {
        id: 17,
        question: 'Hvordan beregnes kondensatorens kapasitans?',
        answer: 'C = 1 / (4 * π² * f² * L)',
        explanation: ''
    }, {
        id: 18,
        question: 'Hvordan beregnes godhetsfaktoren Q?',
        answer: 'Q = Xc / R',
        explanation: ''
    }, {
        id: 19,
        question: 'Hvordan beregnes godhetsfaktoren Q?',
        answer: 'Q = 1/R * 1/(2πfC)',
        explanation: ''
    }, {
        id: 20,
        question: 'Hvordan beregnes godhetsfaktoren Q?',
        answer: 'Q = 1/(2πfCR)',
        explanation: ''
    }, {
        id: 21,
        question: 'Hvordan beregnes den sekundære spolens spenning i en transformator?',
        answer: 'Us = Up * (ns/np)',
        explanation: 'Spenningen i den seukndæren spolen bestemmes av antall viklinger, eller rettere sagt forholdet mellom antallet viklinger på de to spolene. Dersom den sekundære spolen har halvparten så mange viklinger vil den induserte spenningen på den sekundære spolen være halvparten av den primære.'
    }, {
        id: 22,
        question: 'Hvordan beregnes den primære spolens strøm i en transformator?',
        answer: 'Ip = Is * (ns/np)',
        explanation: 'Det forsvinner jo ingen effekt i transformatoren, så effekten ut må være den samme som effekten inn (bortsett fra noen svært små tap), så dersom den sekundære spenningen halveres, så må det bety at den sekundære strømmen dobles.'
    }, {
        id: 23,
        question: 'Hvordan beregnes impedansforholdet i en transformator?',
        answer: 'Zp = Zs * (Primærviklinger * Sekundærviklinger)²',
        explanation: 'Resistansen eller impedansen som møter den primære kretsen er ikke den samme som møter den sekundære. Dersom primærspenningen er det dobbelte av sekundærspenningen og primærstrømmen er halvparten av sekundærstrømmen, så blir impedansforholdet 4:1. Impedansforholdet blir altså transformert med kvadratet av viklingsforholdet.'
    }];
    return {
        title: 'Formler 2',
        description: 'Det er mange formler å huske på når man studerer til å bli radioamatør. Denne kategorien tar for seg en rekke formler som kan opptre i eksamensspørsmål.',
        questions: questions
    }
};