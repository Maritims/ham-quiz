<script lang="ts">
    import { page } from "$app/stores";
    import Quiz from "../../Quiz.svelte";
</script>

<svelte:head>
	<title>{$page.data.title}</title>
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
    <Quiz questions={$page.data.questions} />
</section>