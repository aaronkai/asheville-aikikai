<script>
	import matScene1 from '$lib/assets/mat-scene-1.jpg';
	import matScene2 from '$lib/assets/mat-scene-2.jpg';
	import PalmerSensei from '$lib/assets/PalmerSensei.jpg';
	import ToheiSensei from '$lib/assets/ToheiSensei.jpg';
</script>

<main>
	<header class="h-screen flex flex-col items-center justify-center bg-hero bg-no-repeat bg-cover">
		<h1 class="text-5xl font-serif">Asheville Aikikai</h1>
		<h2 class="text-3xl">Bringing the Aikido Spirit</h2>
		<h2 class="text-3xl">Since 1983</h2>
		<a href="new-member-special">New Member Special</a>
	</header>
	<article class="grid gap-y-1 grid-cols-fullbleed">
		<h1 class="text-5xl">What is Aikido?</h1>
		<p>
			Aikido is a non-violent martial art that enables a practitioner to harmonize and re-direct an
			attacker’s force, ultimately projecting or grounding it. Aikido practice occurs on a physical
			plane, and carries into our daily lives the ability to see through difficult situations.
			Aikido is a lifelong journey towards harmony with all people.
		</p>
		<img src={matScene2} alt="Nage throws Uke" />
		<p>
			The physical benefits of regular training are many. As in many budo (martial arts), Aikidoists
			learn good self-defense techniques and strategies, but with Aikido you will notice that even
			the simplest tasks, like walking, become more graceful. With regular Aikido training your
			power, agility, speed, coordination and flexibility will increase.
		</p>

		<p>
			Other benefits of regular aikido training include greater self-confidence, increased awareness
			of surroundings, greater tolerance for acceptance of others’ opinions, and a greater sense of
			self-worth as you see yourself progress. Of course these are but a few of the things that many
			people experience, but everyone who comes to the dojo does not come for the same reason. Some
			people come for the self-defense aspects, some come for the self-development aspects, others
			come to “round-out” their previous martial art experiences, and still others may just want to
			“get in shape”.
		</p>
		<img src={matScene1} alt="students work out on mat" />
		<p>
			Asheville Aikikai was founded in 1983 as a non-profit corporation. We are dedicated to the
			development of Aikido Spirit. We invite men and women (ages 14 and up) for advanced and
			beginning practice. Beginners are welcome anytime. If you are interested in observing or
			joining a class, please feel free to drop in 10 minutes prior to any class. Monthly dues are
			$60, with discounts for families and students. Please refer to the <a
				href="http://www.aikikai.or.jp/">Hombu Dojo</a
			>
			website for more information regarding Aikido
		</p>

		<aside><p>See You On the Mat!</p></aside>
		<aside>
			<h1>Our Location</h1>
			<p>50 Glendale Ave.</p>
			<p>Asheville, NC 28803</p>
			<p><a href="https://goo.gl/maps/sEF3NVsFp7A2">Map</a></p>
			<h1>Phone</h1>
			<p>(828) 777-2416</p>
		</aside>
	</article>
</main>

<style>
	article {
		display: grid;
		grid-gap: 1rem;
		max-width: 1000px;
		margin: 100px auto;
		grid-gap: 10px 50px;
	}
	article * {
		grid-column: 2 / -2;
	}
	header h1,
	header h2 {
		font-family: 'Roboto', sans-serif;
		color: white;
	}
	article img {
		grid-column: 3 / 4;
		grid-row: span 2;
	}
</style>
