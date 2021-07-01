<script>
	import '../app.postcss';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<div class="grid gap-8">
	<Header />
	<slot />
	<Footer />

</div>
