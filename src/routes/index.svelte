<script context="module">
	import client from '$lib/Client';
	// removing prerender to make site SSR while we work on copy and assets
	// export const prerender = true;
	export async function load() {
		const pageQuery = `*[_type  == "homepage"]`;
		const page = await client.fetch(pageQuery);
		const [
			{
				heading,
				subheading,
				banner,
				image1,
				image2,
				image3,
				image4,
				paragraph1,
				paragraph2,
				paragraph3,
				paragraph4
			}
		] = page;
		return {
			props: {
				banner,
				heading,
				subheading,
				image1,
				image2,
				image3,
				image4,
				paragraph1,
				paragraph2,
				paragraph3,
				paragraph4
			}
		};
	}
</script>

<script>
	import Hero from '$lib/Hero.svelte';
	import { urlFor } from '$lib/Image-url';
	export let heading = 'Welcome to Asheville Aikikai';
	export let subheading = 'What is Aikido?';
	export let banner, image1, image2, image3, image4;
	export let paragraph1, paragraph2, paragraph3, paragraph4;

	let visible = false;
</script>

<main>
	<Hero image={banner.asset} text={heading} cta={true} />
	<article class="max-w-6xl mx-auto">
		<section class="grid grid-cols-2 ">
			<div class="p-12 flex flex-col justify-center ">
					<h2 class="text-gray-900 text-4xl text-center mb-4">What is Aikido?</h2>
					<p class=" text-gray-90 text-lg leading-relaxed">
						{paragraph1}
					</p>
				</div>
					<img
						src={urlFor(image1.asset).width(800).height(1200)}
						alt="martial arts practice"
						width="600"
						height="400"
						class="w-full max-h-screen"
					/>
		</section>

		<section class="grid grid-cols-2">
			<div class="bg-red-700 p-12 flex flex-col justify-center  ">
				<h2 class="text-gray-50 text-4xl text-center mb-4">What Can I Expect?</h2>
				<p class=" text-gray-50 text-lg leading-relaxed">
					{paragraph2}
				</p>
			</div>
			<img
				src={urlFor(image2.asset).width(800).height(1200)}
				alt="martial arts practice"
				width="600"
				height="400"
				class="w-full md:order-first"
			/>
		</section>
		
		<section class="grid grid-cols-2">
			<div class="p-12 flex flex-col justify-center  ">
				<h2 class="text-gray-900 text-4xl text-center mb-4">Why Should I Practice?</h2>
				<p class=" text-gray-900 text-lg leading-relaxed">
					{paragraph3}
				</p>
			</div>
			<img
				src={urlFor(image3.asset).width(800).height(1200)}
				alt="martial arts practice"
				width="600"
				height="400"
				class="w-full"
			/>
		</section>

		<section class="grid grid-cols-2">
			<div class="bg-red-700 p-12 flex flex-col justify-center  ">
				<h2 class="text-gray-50 text-4xl text-center mb-4">How To Start</h2>
				<p class=" text-gray-50 text-lg leading-relaxed">
					{paragraph4}
				</p>
			</div>
			<img
				src={urlFor(image4.asset).width(800).height(1200)}
				alt="martial arts practice"
				width="600"
				height="400"
				class="w-full md:order-first"
			/>
		</section>
	</article>
</main>
