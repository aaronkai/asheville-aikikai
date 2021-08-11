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
				banner,
				image1,
				image2,
				image3,
				image4,
				subheader1,
				subheader2,
				subheader3,
				subheader4,
				block1,
				block2,
				block3,
				block4
			}
		] = page;
		return {
			props: {
				banner,
				heading,
				image1,
				image2,
				image3,
				image4,
				subheader1,
				subheader2,
				subheader3,
				subheader4,
				block1,
				block2,
				block3,
				block4
			}
		};
	}
</script>

<script>
	// pull in props
	import Hero from '$lib/Hero.svelte';
	import { urlFor } from '$lib/Image-url';
	export let heading = 'Welcome to Asheville Aikikai';
	export let banner, image1, image2, image3, image4;
	export let subheader1, subheader2, subheader3, subheader4;
	export let block1, block2, block3, block4; 

	//create block arrays
	let firstBlock = [image1, subheader1, block1];
	let secondBlock = [image2, subheader2, block2];
	let thirdBlock = [image3, subheader3, block3];
	let fourthBlock = [image4, subheader4, block4];
	let blocks = [firstBlock, secondBlock, thirdBlock, fourthBlock]

</script>

<main>
	<Hero image={banner.asset} text={heading} cta={true} />

	<!-- ToDo create toggle var and toggle layout accordingly -->
	<article class="max-w-6xl mx-auto">
		{#each blocks as block}
			<section class="grid md:grid-cols-2 ">
				<div class="p-12 flex flex-col justify-center ">
					<h2 class="text-gray-900 text-4xl text-center mb-4">{block[1]}</h2>
					{#each block[2] as element}
					{#if element.style == "normal"}
						{#each element.children as child}
							<p class="text-gray-900 text-lg leading-relaxed">{child.text}</p>
						{/each}
					{/if}
				{/each}
				</div>
				<img
				src={urlFor(block[0].asset).width(800).height(1200)}
				alt="martial arts practice"
				width="600"
				height="400"
				class="w-full max-h-screen"
				/>
			</section>
		{/each}
	</article>
</main>


		<!-- <section class="grid grid-cols-2 ">
			<div class="p-12 flex flex-col justify-center ">
					<h2 class="text-gray-900 text-4xl text-center mb-4">What is Aikido?</h2>
					<p class=" text-gray-90 text-lg leading-relaxed">
						{block1}
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
					{block2}
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
					{block3}
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
					{block4}
				</p>
			</div>
			<img
				src={urlFor(image4.asset).width(800).height(1200)}
				alt="martial arts practice"
				width="600"
				height="400"
				class="w-full md:order-first"
			/>
		</section> -->

