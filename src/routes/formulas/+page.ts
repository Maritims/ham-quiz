import type { Question } from "$lib/question";

export function load() {
    const questions: Question[] = [{
        id: 1,
        question: 'Hva kan regnes ut ved bruk av formelen P = U * I?',
        answer: 'Effekt, spenning og strøm.',
        explanation: 'P (effekt) regnes ut ved å multiplisere U (spenning) med I (strøm). Husk at formelen kan vendes etter behov for å regne ut de andre faktorene.'
    }, {
        id: 2,
        question: 'Hva kan regnes ut ved bruk av formelen U = R * I?',
        answer: 'Spenning, motstand og strøm.',
        explanation: 'U (spenning) regnes ut ved å multiplisere R (motstand) med I (strøm). Husk at formelen kan vendes etter behov for å regne ut de andre faktorene.'
    }, {
        id: 3,
        question: 'Hva kan regnes ut ved bruk av Rt = R1 + R2 + R3 + ...?',
        answer: 'Den samlede effektive motstanden ved bruk av flere motstander i serie.',
        explanation: 'For å finne den samlede effektive motstand av motstander i serie, må vi legge sammen de enkelte verdiene. Husk å ta hensyn til ulike enheter som Ω, kΩ og MΩ. Summering må gjøres av like enheter.'
    }, {
        id: 4,
        question: 'Hva kan regnes ut ved bruk av formelen Rt = R / n?',
        answer: 'Den samlede effektive motstanden ved bruk av flere parallelle motstander hvor alle motstandene er like.',
        explanation: 'Generelt, for n like motstander vil den totale strømmen være n ganger strømmen gjennom en av motstandene. R er motstandsverdien av hvilken som helst av motstandene og n er antallet motstander.'
    }, {
        id: 5,
        question: 'Hva kan regnes ut ved bruk av formelen 1 / Rt = 1/R1 + 1/R2 + 1/R3 + ...?',
        answer: 'Den samlede effektive motstanden ved bruk av flere parallelle motstander hvor motstandene er ulike.',
        explanation: ''
    }, {
        id: 6,
        question: 'Hva kan regnes ut ved bruk av formelen Uut = Uinn * (R2 / (R1 + R2))?',
        answer: 'Spenningen mellom to motstander i en potensialdeler (spenningsdeler).',
        explanation: 'Den tlførte spenningen Uinn fører til at det flyter strøm i de to seriekoblede motstandene R1 og R2. Spenningen (Uut) over R2 følger direkte av Ohms lov. Av denne formelen kan vi se at strømmen som trekkes fra potensialdeleren er liten i forhold til strømmen i R1 og R2.'
    }, {
        id: 7,
        question: 'Hva kan regnes ut ved bruk av formelen Ct = C1 + C2 + C3 + ...?',
        answer: 'Den samlede kapasitansen for kondensatorer i parallell.',
        explanation: 'Tenk på parallellkoblede kondensatorer som at hver kondensator øker arealet på platene. På samme måten vil den samlede kapasitansen tilsvare summen av de individuelle kapasitansene.'
    }, {
        id: 8,
        question: 'Hva kan regnes ut ved bruk av formelen 1/Ct = 1/C1 + 1/C2 + 1/C3 + ...?',
        answer: 'Den samlede kapasitansen for kondensatorer i serie.',
        explanation: 'Tenk på dette som at avstanden mellom platene øker.'
    }, {
        id: 9,
        question: 'Hva kan regnes ut ved bruk av formelen Lt = L1 + L2 + L3 + ...?',
        answer: 'Den samlede induktansen for spoler i serie.',
        explanation: 'Samlet induktans regnes ut på samme måte som effektiv motstand, dvs. at den samlede induktansen alltid er summen av alle spolenes induktans.'
    }, {
        id: 10,
        question: 'Hva kan regnes ut ved bruk av formelen 1/Lt = 1/L1 + 1/L2 + 1/L3 + ...?',
        answer: 'Den samlede induktansen for spoler i parallell.',
        explanation: 'Det er uvanlig at spoler kobles i parallell. Den samlede induktansen regnes ut på samme måte som effektiv motstand.'
    }, {
        id: 11,
        question: 'Hva kan regnes ut ved bruk av formelen f = 1 / T?',
        answer: 'Frekvens målt i antall svingninger per sekund.',
        explanation: ''
    }, {
        id: 12,
        question: 'Hva kan regnes ut ved bruk av formelen Urms = 0,707 * Uspiss?',
        answer: 'Efffektiv verdi (RMS).',
        explanation: 'I virkeligheten er det ikke spissverdien som vanligvis oppgis. Det vanligste er å oppgi effektivverdien, også kalt RMS-verdien.'
    }, {
        id: 13,
        question: 'Hva kan regnes ut ved bruk av formelen Xc = (2πfC)^-1?',
        answer: 'Kapasitiv reaktans, dvs. en kondensators motstand.',
        explanation: ''
    }, {
        id: 14,
        question: 'Hva kan regnes ut ved bruk av formelen Xl = 2πfL?',
        answer: 'Induktiv reaktans, dvs. en spoles motstand.',
        explanation: ''
    }, {
        id: 15,
        question: 'Hva kan regnes ut ved bruk av formelen f = 1 / (2π * sqrt(LC))?',
        answer: 'Resonansfrekvensen i en krets.',
        explanation: ''
    }, {
        id: 16,
        question: 'Hva kan regnes ut ved bruk av formelen L = 1 / (4 * π² * f² * C)?',
        answer: 'Spolens induktans.',
        explanation: ''
    }, {
        id: 17,
        question: 'Hva kan regnes ut ved bruk av formelen C = 1 / (4 * π² * f² * L)?',
        answer: 'Kondensatorens kapasitans.',
        explanation: ''
    }, {
        id: 18,
        question: 'Hva kan regnes ut ved bruk av formelen Q = Xc / R?',
        answer: 'Godhetsfaktoren Q.',
        explanation: ''
    }, {
        id: 19,
        question: 'Hva kan regnes ut ved bruk av formelen Q = 1/R * 1/(2πfC)?',
        answer: 'Godhetsfaktoren Q.',
        explanation: ''
    }, {
        id: 20,
        question: 'Hva kan regnes ut ved bruk av formelen Q = 1/(2πfCR)?',
        answer: 'Godhetsfaktoren Q.',
        explanation: ''
    }, {
        id: 21,
        question: 'Hva kan regnes ut ved bruk av formelen Us = Up * (ns/np)?',
        answer: 'Den sekundære spolens spenning i en transformator.',
        explanation: 'Spenningen i den seukndæren spolen bestemmes av antall viklinger, eller rettere sagt forholdet mellom antallet viklinger på de to spolene. Dersom den sekundære spolen har halvparten så mange viklinger vil den induserte spenningen på den sekundære spolen være halvparten av den primære.'
    }, {
        id: 22,
        question: 'Hva kan regnes ut ved bruk av formelen Ip = Is * (ns/np)?',
        answer: 'Den primære spolens strøm i en transformator.',
        explanation: 'Det forsvinner jo ingen effekt i transformatoren, så effekten ut må være den samme som effekten inn (bortsett fra noen svært små tap), så dersom den sekundære spenningen halveres, så må det bety at den sekundære strømmen dobles.'
    }, {
        id: 23,
        question: 'Hva kan regnes ut ved bruk av formelen Zp = Zs * (Primærviklinger * Sekundærviklinger)²?',
        answer: 'Impedansforholdet i en transformator.',
        explanation: 'Resistansen eller impedansen som møter den primære kretsen er ikke den samme som møter den sekundære. Dersom primærspenningen er det dobbelte av sekundærspenningen og primærstrømmen er halvparten av sekundærstrømmen, så blir impedansforholdet 4:1. Impedansforholdet blir altså transformert med kvadratet av viklingsforholdet.'
    }];
    return {
        title: 'Formler',
        description: 'Det er mange formler å huske på når man studerer til å bli radioamatør. Denne kategorien tar for seg en rekke formler som kan opptre i eksamensspørsmål.',
        questions: questions
    }
};