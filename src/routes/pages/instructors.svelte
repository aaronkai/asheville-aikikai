<script context="module">
	import client from '$lib/client'
	// removing prerender to make site SSR while we work on copy and assets
	// export const prerender = true;

	export async function load() {
		const pageQuery = `*[_id == "640ba72e-7474-43ab-b766-df207c66e81d"]`
    const instructorQuery = '*[_type == "instructor" && active ] | order(rank desc)'
		const page = await client.fetch(pageQuery)
		const instructors = await client.fetch(instructorQuery)

		const [{banner, heading, pageText, subheading,}] = page
		return {
			props: {banner, heading, pageText, subheading, instructors}
		}
	}
</script>

<script>
  import Instructor from '$lib/instructor.svelte';
  import Hero from '$lib/hero.svelte'
  
  export let instructors;
	export let banner;
	export let heading = "Instructors";

</script>
<Hero image={banner.asset} text={heading}/>

<article class="max-w-6xl mx-auto">
  {#each instructors as instructor}
    <Instructor {instructor} />
  {/each}
</article>

