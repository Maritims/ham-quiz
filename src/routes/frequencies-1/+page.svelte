<script lang="ts">
    import { page } from "$app/stores";
    import type { Answer } from "$lib/answer";
    import type { Question } from "./+page";
    
    let answers: Answer[] = [];
    let start: number | undefined;
    let end: number | undefined;
    let currentId = $page.data.questions[0].id;
    let isCompleted = false;
    let nextButton: HTMLButtonElement;

    function submit(): void {
		if (currentId != $page.data.questions[$page.data.questions.length - 1].id) {
            start = undefined;
            end = undefined;
			currentId++;
		} else {
			isCompleted = true;
		}
	}

    function answer(): void {
        if(!start) {
            alert('Angi nedre grense.');
        } else if(!end) {
            alert('Angi øvre grense.');
        } else {
            answers = [
                ...answers.filter((answer) => answer.id !== currentQuestion.id),
                {
                    id: currentQuestion.id,
                    value: currentQuestion.answer.start === start && currentQuestion.answer.end === end
                },
            ];
            nextButton?.focus();
        }
    }

    function focus(element: HTMLInputElement): void {
        element.focus();
    }

    $: currentQuestion = $page.data.questions.find((question: Question) => question.id === currentId) as Question;
    $: currentAnswer = answers.find((a) => a.id === currentId);
    $: score = answers.reduce((sum, a) => sum += a.value ? 1 : 0, 0);
</script>

<svelte:head>
	<title>Båndplan</title>
	<meta name="description" content={$page.data.title} />
</svelte:head>

<section>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>{$page.data.title}</h1>
                <p>{$page.data.description}</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Fyll inn korrekt nedre og øvre grense for båndet.</h2>
                <div class="card">
                    <h5 class="card-header">Spørsmål {$page.data.questions.indexOf(currentQuestion) + 1} av {$page.data.questions.length}: {currentQuestion.question}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            {#if currentAnswer}
                                <div class="alert alert-{currentAnswer.value ? 'success' : 'danger'}">
                                    <h4 class="alert-heading">{currentAnswer.value ? 'Riktig' : 'Feil'} svar!</h4>
                                    <p>Du svarte at frekvensområdet for dette båndet er {start} - {end} kHz.</p>
                                    <hr>
                                    <p class="mb-0">Fasiten er {currentQuestion.answer.start} - {currentQuestion.answer.end} kHz.</p>
                                </div>
                                {#if currentQuestion.explanation}
                                    <div class="alert alert-info mt-2" role="alert">
                                        <h4 class="alert-heading">Forklaring</h4>
                                        <p class="mb-0">{currentQuestion.explanation}</p>
                                    </div>
                                {/if}
                            {:else}
                                <form on:submit|preventDefault={answer}>
                                    <div class="row mb-3">
                                        <label for="start" class="col-sm-2 col-form-label">Nedre grense (MHz)</label>
                                        <div class="col-sm-10">
                                            <input type="number" id="start" class="form-control" bind:value={start} use:focus>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="end" class="col-sm-2 col-form-label">Øvre grense (MHz)</label>
                                        <div class="col-sm-10">
                                            <input type="number" id="end" class="form-control" bind:value={end}>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Sjekk</button>
                                </form>
                            {/if}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col">
                Poeng: {score}
            </div>
            <div class="col text-end">
                {#if currentId !== $page.data.questions[$page.data.questions.length - 1].id}
                    <button class="btn btn-primary" on:click={submit} bind:this={nextButton}>Neste</button>
                {/if}
            </div>
        </div>
    </div>
</section>