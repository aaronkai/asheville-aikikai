<script context="module">
	export const prerender = true;
</script>

<script>
	import Banner from '$lib/banner.svelte';
	import CallToAction from '$lib/callToAction.svelte';
	import matScene1 from '$lib/assets/mat-scene-1.jpg?avi&srcset';
	import { src as matScene1Src } from '$lib/assets/mat-scene-1.jpg?metadata';
	import  matScene2 from '$lib/assets/mat-scene-2.jpg?avi&srcset';
	import { src as matScene2Src } from '$lib/assets/mat-scene-2.jpg?metadata';

	let visible = false;
</script>

<main class="">
	<div class=" h-vh75 md:h-vh85 grid justify-self-center items-center ">
		<Banner />
	</div>
	<CallToAction />
	<article
		class="grid  gap-y-8 gap-x-5 px-4 pt-20 md:grid-cols-fullbleed sm:mx-auto my-10 max-w-4xl  border-t-4 border-gray-900"
	>
		<h1 class="text-5xl font-Roboto sm:col-start-2 sm:col-end-3 text-gray-900">What is Aikido?</h1>
		<p class="sm:col-start-2 sm:col-end-3 text-gray-900">
			Aikido is a non-violent martial art that enables a practitioner to harmonize and re-direct an
			attacker’s force. The aikido practitioner aims to ultimately throw an attacker or pin them to the ground. While Aikido is a physical practice,  it extends into our daily lives. The practitioner attempts to cultivate an inner calm that provides the ability to see through difficult situations of all kinds. Aikido is a lifelong journey towards harmony with all people.
		</p>

		<picture class="sm:col-start-3 sm:col-end-4  md:row-span-2">
			<source srcset={matScene2} />
			<img
				src={matScene2Src}
				alt="Nage throws Uke"
				width="300"
				height="185"
				class="	border border-gray-900 h-auto w-full"
			/>
		</picture>
		<p class="sm:col-start-2 sm:col-end-3 text-gray-900">
			The physical benefits of regular training are many. As in many budo (martial arts), Aikidoists
			learn good self-defense techniques and strategies, but with Aikido you will notice that even
			the simplest tasks, like walking, become more graceful. With regular Aikido training your
			power, agility, speed, coordination and flexibility will increase.
		</p>

		<p class="sm:col-start-2 sm:col-end-3 text-gray-900">
			Other benefits of regular aikido training include greater self-confidence, increased awareness
			of surroundings, greater tolerance for acceptance of others’ opinions, and a greater sense of self-worth as you see yourself progress. There are many reasons we practice. Some	seek for self-defense, others come for self-development, some want to “round-out” previous martial art experiences, and still others may just want to “get in shape”.
		</p>
		<picture class="sm:col-start-3 sm:col-end-4 md:row-span-2">
			<source srcset={matScene1} />
			<img
				src={matScene1Src}
				width="300"
				height="199"
				alt="students work out on mat"
				class="border-gray-900 border  h-auto w-full"
			/>

		</picture>
		<p class="sm:col-start-2 sm:col-end-3 text-gray-900">
			Asheville Aikikai was founded in 1983 as a non-profit corporation. We are dedicated to the
			development of 'Aikido Spirit'. We invite men and women (ages 14 and up) for advanced and
			beginning practice. Beginners are welcome anytime. If you are interested in observing or
			joining a class, please feel free to drop in 10 minutes prior to any class. Monthly dues are
			$60, with discounts for families and students. Please refer to the <a
				class="hover:text-red-600 underline"
				href="http://www.aikikai.or.jp/">Hombu Dojo</a
			>
			website for more information regarding Aikido
		</p>

		</article>
</main>
