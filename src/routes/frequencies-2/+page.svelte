<script lang="ts">
    import { page } from "$app/stores";
    import Quiz from "../../Quiz.svelte";
    import Wavelength from "../../Wavelength.svelte";
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
    <Wavelength />
    <Quiz questions={$page.data.questions} />
</section>