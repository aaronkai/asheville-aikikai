<script context="module">
  import client from '$lib/client'

	export async function load() {
    const query = `*[_type == "dojoInfo" && dojoName == "Asheville Aikikai"]`
 	  const dojo = await client.fetch(query)
	   return {
      props: {dojo}
    }
  }
</script>

<script>
	import '../app.postcss';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';

  export let dojo
</script>

<div class="grid grid-rows-layout min-h-full">
	<Header />
	<slot />
	<Footer {dojo}/>
</div>
