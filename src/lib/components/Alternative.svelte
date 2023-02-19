<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Answer, AnswerEvent } from "../answer";
    import type { Question } from "../question";

    export let answers: Answer[];
    export let answerText: string;
    export let question: Question;

    const dispatch = createEventDispatcher<{ answer: AnswerEvent }>();

    $: chosenAnswer = answers.find((a) => a.id === question.id);
    $: btnBg = chosenAnswer ? (question.answer === answerText? "success" : "danger") : "light";
    $: isDisabled = chosenAnswer !== undefined;
</script>

<li class="list-group-item d-grid gap-2">
    <button
        class="btn btn-{btnBg} text-start"
        disabled={isDisabled}
        on:click={() => dispatch("answer", { id: question.id, answer: answerText })}>{answerText}</button
    >
</li>