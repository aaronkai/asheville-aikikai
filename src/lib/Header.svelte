<script>
	import Logo from './Logo.svelte'
</script>

<header class=" border-b-4 border-gray-900 py-3 md:py-5 px-4">
	<!-- Div in Header allows border to extend across window while setting max width -->
	<div
		class="max-w-6xl  grid grid-rows-header gap-4 md:gap-x-8 justify-between grid-cols-5 mx-auto items-center h-full"
	>
	<div class="">
		<!-- <Logo /> -->
		<img src="/kanji_logo_1.svg" width="570" height="570" class="md:row-span-2 md:col-span-1 w-32 h-auto md:p-2" alt="logo" />
		</div>
		<h1 class="uppercase font-Montserrat 3xl:text-6xl text-4xl sm:text-5xl  text-gray-900 col-span-4">	<a href="/" class="hover:text-red-600 hover:bold">Asheville Aikikai</a></h1>
		<nav class="flex justify-between col-span-5 self-end">
			<a sveltekit:prefetch href="/pages/lineage" class="text-sm 3xl:text-xl uppercase text-gray-900 hover:text-red-600 hover:bold"
			>Our Lineage</a
			>
			<a sveltekit:prefetch href="/pages/instructors" class="text-sm 3xl:text-xl uppercase text-gray-900 hover:text-red-600 hover:bold">Our Instructors</a>
			<a sveltekit:prefetch href="/pages/practice" class="text-sm 3xl:text-xl uppercase text-gray-900 hover:text-red-600 hover:bold"
				>Our Practice</a
			>
			<a sveltekit:prefetch href="/pages/contact-us" class="text-sm 3xl:text-xl uppercase text-gray-900 hover:text-red-600 hover:bold"
				>Contact Us</a
			>
		</nav>
	</div>
</header>
