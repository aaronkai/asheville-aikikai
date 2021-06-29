<script>
	import matScene1 from '$lib/assets/mat-scene-1.jpg';
	import matScene2 from '$lib/assets/mat-scene-2.jpg';
	import { fade } from 'svelte/transition';

	let visible = false;
</script>

<main>
	<header
		class="h-screen flex flex-col items-center justify-center bg-hero bg-no-repeat bg-cover border-b-4 border-gray-900"
	>
		<h1 class="text-5xl font-Roboto text-gray-100">Asheville Aikikai</h1>
		<h2 class="text-3xl font-Roboto text-gray-100">Bringing the Aikido Spirit</h2>
		<h2 class="text-3xl font-Roboto text-gray-100">Since 1983</h2>
		<button
			on:click={() => (visible = !visible)}
			href="new-member-special"
			class="bg-blue-800 text-gray-100 py-2 px-4 mt-4 rounded border-2 border-gray-900 font-Roboto uppercase"
		>
			New Member Special
		</button>
		{#if visible}
			<div
				transition:fade
				class="absolute bg-blue-900 border-4 border-gray-900 rounded flex flex-col"
			>
				<button
					on:click={() => (visible = false)}
					class="bg-red-600 px-2 m-1 border bg-opacity-75 border-gray-900 rounded text-3xl self-end text-gray-900"
					>&times;</button
				>
				<div class="self-center p-4">
					<h1 class="font-Roboto text-5xl text-gray-100 text-center mb-4">
						Aikido Beginner’s Special
					</h1>

					<h2 class="font-Roboto text-3xl text-gray-100">$90 includes:</h2>
					<ul class="ml-4  list-disc">
						<li class="font-Roboto text-xl text-gray-100 my-2">
							2 months of unlimited training in Aikido
						</li>
						<li class="font-Roboto text-xl text-gray-100 mb-2">
							Registration with Internation Aikido Federation
						</li>
						<li class="font-Roboto text-xl text-gray-100">Gi (Uniform)</li>
					</ul>
				</div>
			</div>
		{/if}
	</header>

	<article
		class="grid justify-items-center gap-y-8 gap-x-5 p-4 md:grid-cols-fullbleed sm:mx-auto my-10 max-w-4xl "
	>
		<h1 class="text-5xl font-Roboto sm:col-start-2 sm:col-end-3 text-gray-900">What is Aikido?</h1>
		<p class="sm:col-start-2 sm:col-end-3 text-gray-900">
			Aikido is a non-violent martial art that enables a practitioner to harmonize and re-direct an
			attacker’s force, ultimately projecting or grounding it. Aikido practice occurs on a physical
			plane, and carries into our daily lives the ability to see through difficult situations.
			Aikido is a lifelong journey towards harmony with all people.
		</p>
		<img
			src={matScene2}
			alt="Nage throws Uke"
			class="sm:col-start-3 sm:col-end-4 	border
			border-gray-900 md:row-span-2"
		/>
		<p class="sm:col-start-2 sm:col-end-3 text-gray-900">
			The physical benefits of regular training are many. As in many budo (martial arts), Aikidoists
			learn good self-defense techniques and strategies, but with Aikido you will notice that even
			the simplest tasks, like walking, become more graceful. With regular Aikido training your
			power, agility, speed, coordination and flexibility will increase.
		</p>

		<p class="sm:col-start-2 sm:col-end-3 text-gray-900">
			Other benefits of regular aikido training include greater self-confidence, increased awareness
			of surroundings, greater tolerance for acceptance of others’ opinions, and a greater sense of
			self-worth as you see yourself progress. Of course these are but a few of the things that many
			people experience, but everyone who comes to the dojo does not come for the same reason. Some
			people come for the self-defense aspects, some come for the self-development aspects, others
			come to “round-out” their previous martial art experiences, and still others may just want to
			“get in shape”.
		</p>
		<img
			src={matScene1}
			alt="students work out on mat"
			class="sm:col-start-3 sm:col-end-4 border
		border-gray-900 md:row-span-2"
		/>
		<p class="sm:col-start-2 sm:col-end-3 text-gray-900">
			Asheville Aikikai was founded in 1983 as a non-profit corporation. We are dedicated to the
			development of Aikido Spirit. We invite men and women (ages 14 and up) for advanced and
			beginning practice. Beginners are welcome anytime. If you are interested in observing or
			joining a class, please feel free to drop in 10 minutes prior to any class. Monthly dues are
			$60, with discounts for families and students. Please refer to the <a
				href="http://www.aikikai.or.jp/">Hombu Dojo</a
			>
			website for more information regarding Aikido
		</p>

		<section class="sm:col-start-2 sm:col-end-3 mt-4">
			<h1 class="text-3xl font-Roboto text-gray-900">See You On the Mat!</h1>
			<h2 class="text-2xl font-Roboto mt-2 text-gray-900">Our Location</h2>
			<address>
				<a href="https://goo.gl/maps/sEF3NVsFp7A2" class="text-gray-900 underline">
					50 Glendale Ave. <br />Asheville, NC 28803
				</a>
			</address>

			<p />
			<h2 class="text-2xl font-Roboto mt-2 text-gray-900">Phone</h2>
			<a href="tel:828-777-2416 text-gray-900" class="text-gray-900 underline">(828) 777-2416</a>
		</section>
		<div class="mt-4 border border-gray-500 sm:col-start-3 sm:col-end-4 md:row-span-2">
			<iframe
				loading="lazy"
				style="border: 0;"
				alt="map to dojo"
				title="map to dojo"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.3120180200044!2d-82.52494237080194!3d35.57226839876374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f30c8376611d%3A0x633c17eb5c3d7797!2s50%20Glendale%20Ave%2C%20Asheville%2C%20NC%2028803!5e0!3m2!1sen!2sus!4v1584363460275!5m2!1sen!2sus"
				frameborder="0"
				allowfullscreen="allowfullscreen"
				aria-hidden="false"
				tabindex="0"
			/>
		</div>
	</article>
</main>

<style></style>
