<script context="module">
	import client from '$lib/Client'
	// removing prerender to make site SSR while we work on copy and assets
	// export const prerender = true;

	export async function load() {
		const pageQuery = `*[_id == "9ec694cb-3b16-4022-b424-e846e51a40a4"]`
		const danQuery = '*[_type == "instructor" && name == "Dan Palmer"]'
		const toheiQuery = '*[_type == "instructor" && name == "Akira Tohei"]'
		const oSenseiQuery = '*[_type == "instructor" && name == "O\'Sensei"]'

		const page = await client.fetch(pageQuery)
		const dan = await client.fetch(danQuery)
		const tohei = await client.fetch(toheiQuery)
		const oSensei = await client.fetch(oSenseiQuery)
		const [{banner, heading, pageText, subheading,}] = page
		return {
			props: {banner, heading, pageText, subheading, dan, tohei, oSensei}
		}
	}
</script>

<script>
	import { urlFor } from '$lib/Image-url'
	export let heading = "Who We Are";
	export let subheading = "Our Mission!";
	export let pageText = "placeholder";
	export let dan;
	export let tohei;
	export let oSensei
	export let lineage = [oSensei, tohei, dan];

</script>


<main class="grid grid-row gap-y-8 items-center justify-items-center pb-8" >
	<div class="w-full bg-gray-900  p-8 uppercase">
		<h1 class="font-Montserrat text-gray-50 text-5xl text-gray-900 text-center">{heading}</h1>

	</div>
	<article class="grid grid-row gap-y-16 mx-4 items-center justify-items-center">

	{#each lineage as sensei}
	<section class="grid md:grid-cols-2 gap-y-2 justify-items-center">
		<figure>
			<img src={urlFor(sensei[0].image.asset).width(800).height(1200)} alt="O'Sensei in ceremonial garb" title="{sensei[0].name}" width="400" height="600"
			class="w-full max-h-screen"/>
			
		</figure>
		<div class="p-12 flex flex-col justify-center">
			<h2 class="font-Roboto text-gray-900 text-4xl  mb-4">{sensei[0].name}</h2>
			<p class="mt-4 text-gray-900 text-lg leading-relaxed">{sensei[0].bio}</p>

		</div>
	</section>
	{/each}

		<!-- <section class="grid grid=row gap-y-2 items-center justify-items-center">
			<h1 class="font-Roboto text-5xl text-gray-900 mt-8 mb-4">{subheading}</h1>
			{#each pageText as element}
			{#if element.style == "normal"}
				{#each element.children as child}
					<p class="mt-4 text-gray-900">{child.text}</p>
				{/each}
			{/if}
		{/each}
		</section> -->
	</article>
</main>
