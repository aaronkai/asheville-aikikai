<script context="module">
	export const prerender = true;
	import client from '$lib/client'
	
	export async function load() {
		const locationQuery = `*[_type == "dojoInfo" && dojoName == "Asheville Aikikai"]`
		const pageQuery = `*[_id == "2378e58a-31aa-4dd6-a7fb-8d493bee7aab"]`
		const dojo = await client.fetch(locationQuery);
		const page = await client.fetch(pageQuery);
		
		return {
			props: {dojo, page}
		}
	}
</script>

<script>
	import Hero from '$lib/hero.svelte'
	export let dojo="default"
	export let page;
	let [{dojoName, streetAddress, city, state, zipCode, phoneNumber}] = dojo;
	let [{banner, heading, subheading, pageText}] = page;
</script>

<main >
	<Hero image={banner.asset} text={heading}/>
	<article class="max-w-md mx-auto py-8 md:py-16 px-4">
		<!-- <h1 class="font-Roboto text-5xl text-gray-900 mb-12 text-center">{heading}</h1> -->
		<section class="mb-8">
			<h1 class="text-4xl font-Roboto text-gray-900">{subheading}</h1>
			{#each pageText as element}
				{#if element.style == "normal"}
					{#each element.children as child}
						<p class="mt-4 text-gray-900">{child.text}</p>
					{/each}
				{/if}
			{/each}
			<div class="grid grid-cols-2 gap-4 mt-8">
				<address>
					<h2 class="text-2xl font-Roboto mt-2 text-gray-900 not-italic">Our Location</h2>
					<a href="https://goo.gl/maps/sEF3NVsFp7A2" class="text-gray-900 underline not-italic">
						{dojoName}<br/>
						{streetAddress}<br />
						{`${city}, ${state}  ${zipCode}`}
					</a>
				</address>
				<div id="phone">
						<h2 class="text-2xl font-Roboto mt-2 text-gray-900">Phone</h2>
						<a href="tel:828-777-2416 text-gray-900" class="text-gray-900 underline">{phoneNumber}</a>
				</div>
			</div>
		</section>
		

		<figure class="border border-gray-500 h-96 mb-8">
			<iframe
				loading="lazy"
				style="border: 0; width: 100%; height: 100%"
				alt="map to dojo"
				title="map to dojo"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.3120180200044!2d-82.52494237080194!3d35.57226839876374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f30c8376611d%3A0x633c17eb5c3d7797!2s50%20Glendale%20Ave%2C%20Asheville%2C%20NC%2028803!5e0!3m2!1sen!2sus!4v1584363460275!5m2!1sen!2sus"
				frameborder="0"
				allowfullscreen="allowfullscreen"
				aria-hidden="false"
				tabindex="0"
			/>
			<figcaption class="text-sm text-gray-600">Map to Dojo</figcaption>
		</figure>

	
	</article>
</main>
