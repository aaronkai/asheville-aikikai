<script>
	let visible = false;

	function handleClick() {
		visible = !visible;
	}
</script>

<div class=" mx-auto bg-cta h-96 bg-cover flex items-start  justify-center ">
	{#if !visible}
		<button
			class="bg-red-500 hover:bg-red-700 text-white text-3xl font-Roboto py-2 px-4 border border-red-700 rounded mt-4"
			on:click={handleClick}
		>
			New Member Special
		</button>
	{/if}

	{#if visible}
		<div class="p-4 flex flex-col bg-black bg-opacity-90 rounded mt-4 ">
			<div class="flex flex-row justify-between">
				<h2 class="inline font-Roboto text-3xl text-gray-100 flex-initial">$90 includes:</h2>
				<button
					on:click={() => (visible = false)}
					class="bg-red-600 px-2 m-1  rounded text-3xl self-end text-gray-900 "
					>&times;
				</button>
			</div>
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
	{/if}
</div>
