<script>
	import ctaImage from '$lib/assets/manInGi.jpg?webp;jpg&w=1600';
	let visible = false;

	function handleClick() {
		visible = !visible;
	}
</script>

<!-- Used an inline style here to force vite-imagetools to scoop up background image -->
<div
	style="background-image: url('{ctaImage}')"
	class="mx-auto h-vh50 bg-cover bg-center flex items-start  justify-center "
>
	{#if !visible}
		<button
			class="bg-brutalred hover:bg-red-700 text-white text-3xl font-Roboto py-2 px-4 border border-red-700 rounded mt-4"
			on:click={handleClick}
		>
			New Member Special
		</button>
	{/if}

	{#if visible}
		<div class="p-4 flex flex-col bg-black bg-opacity-90 rounded mt-4 ">
			<div class="flex flex-row justify-between">
				<h2 class="inline font-Roboto text-3xl text-white flex-initial">$90 includes:</h2>
				<button
					on:click={() => (visible = false)}
					class="bg-brutalred px-2 m-1 hover:bg-red-700 rounded text-3xl self-end text-gray-900 "
					>&times;
				</button>
			</div>
			<ul class="ml-4  list-disc">
				<li class="font-Roboto text-xl text-gray-100 my-2">
					2 months of unlimited training in Aikido
				</li>
				<li class="font-Roboto text-xl text-gray-100 mb-2">
					Registration with International Aikido Federation
				</li>
				<li class="font-Roboto text-xl text-gray-100">Gi (Uniform)</li>
			</ul>
		</div>
	{/if}
</div>
