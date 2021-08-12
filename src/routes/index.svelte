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
	import Block from '$lib/Block.svelte'
	import Hero from '$lib/Hero.svelte';
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

	let toggled = false
	function flip() {
		toggled = !toggled
		console.log(`in function ${toggled}`)
		return toggled
	}

</script>

<main>
	<Hero image={banner.asset} text={heading} cta={true} />
	<article class="max-w-6xl mx-auto">
		{#each blocks as block, i}
			<Block {block} {i} />
		{/each}
	</article>
</main>

