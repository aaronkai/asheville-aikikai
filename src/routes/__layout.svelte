<script>
	import '../app.postcss';
	import Nav from './../lib/nav.svelte';
	import Header from '$lib/header.svelte';
</script>

<Header />
<slot />
<footer>
	<p>Aaron Hubbard Web Dev</p>
</footer>
