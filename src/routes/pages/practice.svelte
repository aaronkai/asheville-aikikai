<script context="module">
	import client from '$lib/Client'
	// removing prerender to make site SSR while we work on copy and assets
	// export const prerender = true;

	export async function load() {
		const pageQuery = `*[_id  == "e9408272-34cc-465a-b823-5886b4829641"]`
		const scheduleQuery = `*[_type == "schedule"]`
		const page = await client.fetch(pageQuery)
		const schedule = await client.fetch(scheduleQuery)
		const [{banner, heading, pageText, subheading}] = page
		return {
			props: {banner,heading,pageText,subheading,schedule}
		}
	}
</script>

<script>
	import { urlFor } from '$lib/Image-url'
	export let banner;
	export let heading = "Adult Practice";
	export let subheading = "All Are Welcome!";
	export let pageText = "placeholder";
	export let schedule = [];
	import Hero from '$lib/Hero.svelte'

	let activeSchedule;
	schedule.forEach(schedule => {
		if (schedule.active){
			activeSchedule = schedule
		}
	});
</script>

<Hero image={banner.asset} text={heading} />

<main class="grid grid-row justify-items-center py-8 md:py-16">
	<article class="max-w-6xl mx-auto px-4">
		<div class="grid md:grid-cols-2 gap-12">

			<section class="">
				<h2 class="font-Roboto text-4xl text-gray-900 mb-4 ">{subheading}</h2>
				{#each pageText as element}
					{#if element.style == "normal"}
						{#each element.children as child}
							<p class="mt-4 text-gray-900">{child.text}</p>
						{/each}
					{/if}
				{/each}
			</section>
			<section>
				<h2 class="font-Roboto text-4xl text-gray-900 pb-2 ">Schedule</h2>
				<table class="border border-gray-900">
					<th class="border-r border-b border-gray-900"> Day</th>
					<th class="border-b border-r border-gray-900">Time</th>
					<th class="border-r border-b border-gray-900">Instructor</th>
					<tr class="border-b border-gray-900 ">
						<td class="border-r border-gray-900">Monday</td>
						<td class="border-r border-gray-900">{activeSchedule.Monday.startTime} - {activeSchedule.Monday.endTime} {activeSchedule.Monday.amOrPm}</td>
						<td>{activeSchedule.Monday.instructor}</td>
					</tr>
					<tr class="border-b border-gray-900 ">
						<td class="border-r border-gray-900">Tuesday</td>
						<td class="border-r border-gray-900">{activeSchedule.Tuesday.startTime} - {activeSchedule.Tuesday.endTime} {activeSchedule.Tuesday.amOrPm}</td>
						<td>{activeSchedule.Tuesday.instructor}</td>
					</tr>
					<tr class="border-b border-gray-900 ">
						<td class="border-r border-gray-900">Wednesday</td>
						<td class="border-r border-gray-900">{activeSchedule.Wednesday.startTime} - {activeSchedule.Wednesday.endTime} {activeSchedule.Wednesday.amOrPm}</td>
						<td>{activeSchedule.Wednesday.instructor}</td>
					</tr>
					<tr class="border-b border-gray-900 ">
						<td class="border-r border-gray-900">Thursday</td>
						<td class="border-r border-gray-900">{activeSchedule.Thursday.startTime} - {activeSchedule.Thursday.endTime} {activeSchedule.Thursday.amOrPm}</td>
						<td>{activeSchedule.Thursday.instructor}</td>
					</tr>
					<tr class="border-b border-gray-900 ">
						<td class="border-r border-gray-900">Friday</td>
						<td class="border-r border-gray-900">{activeSchedule.Friday.startTime} - {activeSchedule.Friday.endTime} {activeSchedule.Friday.amOrPm}</td>
						<td>{activeSchedule.Friday.instructor}</td>
					</tr>
					<tr class="border-b border-gray-900 ">
						<td class="border-r border-gray-900">Saturday</td>
						<td class="border-r border-gray-900">{activeSchedule.Saturday.startTime} - {activeSchedule.Saturday.endTime} {activeSchedule.Saturday.amOrPm}</td>
						<td>{activeSchedule.Saturday.instructor}</td>
					</tr>
					<tr class="border-b border-gray-900 ">
						<td class="border-r border-gray-900">Sunday</td>
						<td class="border-r border-gray-900">n/a</td>
						<td>{activeSchedule.Sunday.instructor}</td>
					</tr>
				</table>
			</section>
		</div>
	</article>
</main>

<style>
	table * {
		padding: 0.5rem;
	}
</style>
