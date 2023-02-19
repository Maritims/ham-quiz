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
						<a href="{base}/frequencies">Båndplan</a>
					</li>
					<li>
						<a href="{base}/formulas">Formler</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>