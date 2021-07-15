<script>
	import Logo from './logo.svelte'
</script>

<header class=" border-b-4 border-gray-900 py-3 px-4 h-vh25 md:h-vh15 ">
	<!-- Div in Header allows border to extend across window while setting max width -->
	<div
		class="max-w-4xl gap-x-4 grid grid-rows-header justify-between grid-cols-5 mx-auto items-center h-full"
	>
		<!-- <img src="/logo_new.svg" width="570" height="570" class="md:row-span-2 md:col-span-1 w-32 h-auto md:p-2" alt="logo" /> -->
		<div class="md:row-span-2">
			<a href="/"><Logo /></a>
		</div>
		<h1 class="uppercase font-Montserrat 3xl:text-6xl text-4xl sm:text-5xl  text-gray-900 col-span-4">	<a href="/" class="hover:text-red-600 hover:bold">Asheville Aikikai</a></h1>
		<nav class="flex justify-between col-span-5 md:col-span-4 self-end">
			<a sveltekit:prefetch href="/pages/about" class="text-sm 3xl:text-xl uppercase text-gray-900 hover:text-red-600 hover:bold"
			>About</a
			>
			<a sveltekit:prefetch href="/pages/instructors" class="text-sm 3xl:text-xl uppercase text-gray-900 hover:text-red-600 hover:bold">Instructors</a>
			<a sveltekit:prefetch href="/pages/practice" class="text-sm 3xl:text-xl uppercase text-gray-900 hover:text-red-600 hover:bold"
				>Practice</a
			>
			<a sveltekit:prefetch href="/pages/contact-us" class="text-sm 3xl:text-xl uppercase text-gray-900 hover:text-red-600 hover:bold"
				>Contact</a
			>
		</nav>
	</div>
</header>
