<script>
	import '../app.postcss';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
</script>
<div class="grid grid-rows-layout min-h-full">
	<Header />
	<slot />
	<Footer />
</div>
