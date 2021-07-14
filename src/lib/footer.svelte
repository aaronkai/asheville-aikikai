<script>
	export let dojo="default"
	let [{dojoName, streetAddress, city, state, zipCode, phoneNumber}] = dojo
</script>

<footer class="border-t-4 border-gray-900 py-4 flex flex-row justify-around items-center justify-center ">

	<address>
		<a
			href="https://goo.gl/maps/sEF3NVsFp7A2"
			class="text-gray-900  hover:text-red-600"
		>
			{dojoName}  {streetAddress} {city}, {state} {zipCode}
		</a>
	</address>
	<a href="tel:{phoneNumber}" class="text-gray-900 hover:text-red-600 "
	>{phoneNumber}</a
>
	<a href="https://aaronhubbard.dev" class="text-gray-900 hover:text-red-600>Site Design">Site Design</a>
</footer>

<!-- <footer class="border-t-4 border-gray-900 py-4 flex flex-col items-center justify-center ">
	<section class="sm:col-start-2 sm:col-end-3 mt-4">
		<h1 class="text-3xl font-Roboto text-gray-900">See You On the Mat!</h1>
		<h2 class="text-2xl font-Roboto mt-2 text-gray-900">Our Location</h2>
		<address>
			<a
				href="https://goo.gl/maps/sEF3NVsFp7A2"
				class="text-gray-900 underline hover:text-red-600"
			>
				50 Glendale Ave. <br />Asheville, NC 28803
			</a>
		</address>

		<h2 class="text-2xl font-Roboto mt-2 text-gray-900">Phone</h2>
		<a href="tel:828-777-2416 text-gray-900" class="text-gray-900 hover:text-red-600 underline"
			>(828) 777-2416</a
		>
	</section>


	<section>
		<a href="https://aaronhubbard.dev" class="hover:text-brutalred text-gray-900"
		>Aaron Hubbard Web Development</a
	>
	<details>
		<summary class="text-gray-900">Attributions</summary>
		<p>
			Torii by <a
				href="https://thenounproject.com/kyleware/"
				class="hover:text-brutalred text-gray-900"
			>
				Kyle Dodson
			</a>
			from the Noun Project
		</p>

		<p>
			Photo by &MediumSpace;<a
				href="https://unsplash.com/@itssammoqadam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				class="hover:text-brutalred text-gray-900"
			>
				Sam Moqadam</a
			>
			on
			<a
				href="https://unsplash.com/s/photos/dojo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				class="hover:text-brutalred text-gray-900">Unsplash</a
			>
		</p>
	</details>

	</section>

</footer> -->
