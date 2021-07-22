<script context="module">
	import client from '$lib/client'
	export const prerender = true;
	export async function load() {
		const pageQuery = `*[_type  == "homepage"]`
		const page = await client.fetch(pageQuery)
		const [{heading, image1, image2, image3, image4,paragraph1,paragraph2,paragraph3,paragraph4}] = page
		return {
			props: {heading,image1,image2,image3,image4,paragraph1,paragraph2,paragraph3,paragraph4}
		}
	}
</script>

<script>
	import CallToAction from '$lib/callToAction.svelte';
	import { urlFor } from '$lib/image-url'
	export let heading = "What is Aikido";
	export let image1, image2, image3, image4
	export let paragraph1, paragraph2, paragraph3, paragraph4 

	let visible = false;
</script>


<main class="">

	<CallToAction />
	<article
		class="grid gap-y-8 gap-x-5 px-4 pt-20 md:grid-cols-fullbleed sm:mx-auto my-10 max-w-4xl"
	>
		<h1 class="text-5xl font-Roboto sm:col-start-2 sm:col-end-3 text-gray-900">{heading}</h1>
		<p class="sm:col-start-2 sm:col-end-3 text-gray-900">
			{paragraph1}
		</p>
		<img src={urlFor(image1.asset).width(400).height(600)} alt="martial arts practice" width="600" height="400"/>
		<p class="sm:col-start-2 sm:col-end-3 text-gray-900">
			{paragraph2}
		</p>
		<img src={urlFor(image2.asset).width(400).height(600)} alt="martial arts practice" width="600" height="400"/>
		<p class="sm:col-start-2 sm:col-end-3 text-gray-900">
			{paragraph3}
		</p>
		<img src={urlFor(image3.asset).width(600).height(400)} alt="martial arts practice" width="600" height="400"/>
		<p class="sm:col-start-2 sm:col-end-3 text-gray-900">
			{paragraph4}
		</p>
		<img src={urlFor(image4.asset).width(600).height(400)} alt="martial arts practice" width="600" height="400"/>
		</article>
</main>
