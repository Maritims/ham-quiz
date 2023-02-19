<script>

    import { base } from "$app/paths";

</script>
<svelte:head>
	<title>Kategorier</title>
	<meta name="description" content="Kategorier" />
</svelte:head>

<section>
	<div class="container">
		<div class="row">
			<div class="col">
				<h1>Kategorier</h1>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<ul>
					<li>
						<a href="{base}/qcodes">Q-koder</a>
					</li>
					<li>
						<a href="{base}/frequencies-1">Båndplan 1</a>
					</li>
					<li>
						<a href="{base}/frequencies-2">Båndplan 2</a>
					</li>
					<li>
						<a href="{base}/formulas-1">Formler 1</a>
					</li>
					<li>
						<a href="{base}/formulas-1">Formler 2</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>