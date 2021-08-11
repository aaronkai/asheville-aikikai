<script>
	export let dojo="default"
	let [{dojoName, streetAddress, city, state, zipCode, phoneNumber}] = dojo
</script>

<footer class="border-t-4 border-gray-900 p-4 mt-8  bg-gray-200">
	<div class=" mx-auto flex flex-col md:flex-row justify-between md:items-center">
	<address>
		<a
			href="https://goo.gl/maps/sEF3NVsFp7A2"
			class="text-gray-900 text-sm hover:text-red-600 not-italic"
		>
			{dojoName} {streetAddress} {city}, {state} {zipCode}
		</a>
	</address>
	<a href="tel:{phoneNumber}" class="text-gray-900 hover:text-red-600 text-sm pt-1"
	>{phoneNumber}</a
>
<p class="text-gray-900 text-sm pt-1">2021&copy;</p>
	<a href="https://aaronhubbard.dev" class="text-gray-900 hover:text-red-600 text-sm pt-1">Site Design</a>
</div>
</footer>