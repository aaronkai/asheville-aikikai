<script context="module">
	export const prerender = true;
</script>

<script>
	import oSensei from '$lib/assets/oSensei.gif';
	import Tohei from '$lib/assets/ToheiSensei.jpg';
	import Palmer from '$lib/assets/PalmerSensei.jpg';
</script>

<main class="grid grid-row gap-y-8 items-center justify-items-center ">
	<h1 class="font-Roboto text-5xl text-gray-900">Our Lineage</h1>
	<article class="grid grid-row gap-y-16 mx-4 items-center justify-items-center max-w-sm ">
		<section class="grid grid=row gap-y-2 items-center justify-items-center">
			<figure>
				<img src={oSensei} alt="O'Sensei" title="O'Sensei" width="300" height="300" class="h-auto w-full"/>
				<figcaption class="text-sm text-gray-500">O'Sensei</figcaption>
			</figure>
			<h2 class="font-Roboto text-2xl text-gray-900">O'Sensei</h2>
			<p>
				Aikido was developed by Moreihei Uyeshiba (O’Sensei) at the end of the 19th and beginning of
				the 20th century. He synthesized it from various martial arts he learned as a young man.
				Aikido is non-violent and defensive. It blends the highest level of human ethics with modern
				martial arts.
			</p>
		</section>
		<section class="grid grid=row gap-y-2 items-center justify-items-center">
			<figure class="py-2">
				<img src={Tohei} alt="Tohei Sensei" width="300" height="420" title="Tohei Sensei" class="h-auto w-full" />
				<figcaption class="text-sm text-gray-500">Tohei Sensei</figcaption>
			</figure>
			<h2 class="font-Roboto text-2xl text-gray-900">Akira Tohei</h2>
			<p>
				In 1972 one O’Sensei’s senior students, Akira Tohei (8th Dan),was dispatched to the United
				States to teach Aikido. Tohei Sensei was based in Chicago, IL where he organized the Midwest
				Aikido Federation. The lead instructor at Asheville Aikikai, Daniel Palmer (5th Dan), was a
				student of Tohei Sensei.
			</p>
		</section>
		<section class="grid grid=row gap-y-2 items-center justify-items-center">
			<figure class="py-2">
				<img src={Palmer} width="800" height="900" alt="Palmer Sensei" title="Palmer Sensei" class="h-auto w-full"/>
				<figcaption class="text-sm text-gray-500">Palmer Sensei</figcaption>
			</figure>
			<h2 class="font-Roboto text-2xl text-gray-900">Dan Palmer</h2>
			<p>
				In 1983 Daniel Palmer founded Asheville Aikikai as a non-profit corporation. Asheville
				Aikikai, founded in 1983, practices Aikido in the tradition of Tohei Sensei.
			</p>
		</section>
		<section class="grid grid=row gap-y-2 items-center justify-items-center">
			<h1 class="font-Roboto text-5xl text-gray-900 mt-8 mb-4">Our Mission</h1>
			<p>
				We are dedicated to the development of 'Aikido Spirit'. Aikido Spirit fosters the highest
				ethical standards. Aikido is entirely defensive and is to be utilized only with an
				unprovoked attack. It utilizes methods of redirecting an attacker’s energy, ultimately
				projecting or grounding it. When techniques are applied correctly no serious injury occurs.
			</p>
			<p>
				Aikido Spirit relies on finding and maintaining one’s center, both on the physical and
				mental plane. Aikido utilizes ki, or inner energy, to focus and cultivate a sense of
				centeredness, and to energize techniques. Aikido practice strengthens balance, encourages
				cooperation, and promotes quiet in the mind.
			</p>
			<p>
				Aikido Spirit fosters respect for self and others, facilitates non-violent behavior,
				promotes peaceful solutions to confrontations, nurtures self-confidence, and aids in
				positive development.
			</p>
		</section>
	</article>
</main>
