import type { Range } from "./question";

export type Answer = {
    id: number;
    value: boolean;
};

export type AnswerEvent = {
    id: number,
    answer: string | Range
};