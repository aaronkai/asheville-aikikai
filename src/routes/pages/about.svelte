<script context="module">
	import client from '$lib/client'
	export const prerender = true;

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
	import { urlFor } from '$lib/image-url'
	export let banner;
	export let heading = "Who We Are";
	export let subheading = "Our Mission!";
	export let pageText = "placeholder";
	export let dan
	export let tohei
	export let oSensei
	console.log({oSensei})
</script>


<main class="grid grid-row gap-y-8 items-center justify-items-center ">
	<h1 class="font-Roboto text-5xl text-gray-900 mt-8">{heading}</h1>
	<article class="grid grid-row gap-y-16 mx-4 items-center justify-items-center max-w-sm ">
		<section class="grid grid=row gap-y-2 items-center justify-items-center">
			<figure>
				<img src={urlFor(oSensei[0].image.asset).width(400).height(600)} alt="O'Sensei in ceremonial garb" title="{oSensei[0].name}" width="400" height="600"/>
			
				<figcaption class="text-sm text-gray-500">{oSensei[0].name}</figcaption>
			</figure>
			<h2 class="font-Roboto text-2xl text-gray-900">{oSensei[0].name}</h2>
			<p>{oSensei[0].bio}</p>
		</section>
		<section class="grid grid=row gap-y-2 items-center justify-items-center">
			<figure>
				<img src={urlFor(tohei[0].image.asset).width(400).height(600)} alt="Tohei Sensei" title={tohei[0].name} width="400" height="600"/>
			
				<figcaption class="text-sm text-gray-500">{tohei[0].name}</figcaption>
			</figure>
			<h2 class="font-Roboto text-2xl text-gray-900">{tohei[0].name}</h2>
			<p>{tohei[0].bio}</p>
		</section>
		<section class="grid grid=row gap-y-2 items-center justify-items-center">
			<figure>
				<img src={urlFor(dan[0].image.asset).width(400).height(600)} alt="Dan Palmer" title={dan[0].name} width="400" height="600"/>
			
				<figcaption class="text-sm text-gray-500">{dan[0].name}</figcaption>
			</figure>
			<h2 class="font-Roboto text-2xl text-gray-900">{dan[0].name}</h2>
			<p>{dan[0].bio}</p>
		</section>
		<section class="grid grid=row gap-y-2 items-center justify-items-center">
			<h1 class="font-Roboto text-5xl text-gray-900 mt-8 mb-4">{subheading}</h1>
			{#each pageText as element}
			{#if element.style == "normal"}
				{#each element.children as child}
					<p class="mt-4 text-gray-900">{child.text}</p>
				{/each}
			{/if}
		{/each}
		</section>
	</article>
</main>
