<script lang="ts">
	import '../../node_modules/bootstrap/dist/css/bootstrap.css';
</script>

<div class="app">
	<div class="container">
		<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
		  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
			<span class="fs-4">Amatørradio</span>
		  </a>
		</header>
	  </div>

	<main>
		<slot />
	</main>

	<footer>
	</footer>
</div>

<style>
</style>
