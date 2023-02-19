<script lang="ts">
    import type { Answer, AnswerEvent } from "$lib/answer";
    import { getRandomQuestions, type Question } from "$lib/question";
    import Alternative from './Alternative.svelte';

    export let questions: Question[];
    
    let answers: Answer[] = [];

    function submit(): void {
		if (currentId != questions[questions.length - 1].id) {
			currentId++;
		} else {
			isCompleted = true;
		}
	}

	function answer(event: CustomEvent<AnswerEvent>): void {
		answers = [
			...answers.filter((answer) => answer.id !== event.detail.id),
			{
				id: event.detail.id,
				value: currentQuestion.answer === event.detail.answer,
			},
		];
	}

	let currentId = questions[0].id;
	let isCompleted = false;
	$: currentQuestion = questions.find((question) => question.id === currentId)!;
    $: currentAnswer = answers.find(a => a.id === currentId);
	$: score = answers.reduce((sum, a) => sum += a.value ? 1 : 0, 0);
</script>

<div class="container">
    <div class="row">
        <div class="col">
            <h2>Velg korrekt svaralternativ</h2>
            {#if currentAnswer && currentQuestion.explanation}
                <div class="alert alert-info" role="alert">
                    <h4 class="alert-heading">Forklaring</h4>
                    <p>{currentQuestion.explanation}</p>
                </div>
            {/if}
            <div class="card">
                <h5 class="card-header">Spørsmål {questions.indexOf(currentQuestion) + 1} av {questions.length}: {currentQuestion.question}</h5>
                <ul class="list-group list-group-flush">
                    {#each getRandomQuestions(questions, currentQuestion) as alternative, i}
                        <Alternative
                            bind:question={currentQuestion}
                            answerText={alternative.answer}
                            bind:answers
                            on:answer={answer}
                        />
                    {/each}
                </ul>
            </div>
        </div>
    </div>
    <div class="row mt-2">
        <div class="col">
            Poeng: {score}
        </div>
        <div class="col text-end">
            {#if currentId !== questions[questions.length - 1].id}
                <button class="btn btn-primary" on:click={submit} disabled={isCompleted}>Neste</button>
            {/if}
        </div>
    </div>
    {#if isCompleted}
        <div class="row mt-2">
            
        </div>
    {/if}
</div>