<script context="module">
  import client from '$lib/Client'

	export async function load() {
    const query = `*[_type == "dojoInfo" && dojoName == "Asheville Aikikai"]`
 	  const dojo = await client.fetch(query)
	   return {
      props: {dojo}
    }
  }
</script>

<script>
	import '../../app.postcss';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

  export let dojo
</script>

	<div class="grid grid-rows-layout gap-12 min-h-full">
		<Header />
		<slot />
		<Footer {dojo} />
	</div>