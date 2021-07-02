<script>
	import '../app.postcss';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
</script>
<div class="h-full">
	<div class="grid grid-rows-layout  gap-12 min-h-full">
		<Header />
		<slot />
		<Footer />
	</div>

</div>
