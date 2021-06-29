<script>
	import { createEventDispatcher } from 'svelte';
	let shown = false;
	let dispatch = createEventDispatcher();
	export function show() {
		shown != shown;
		dispatch('show', shown);
	}
</script>

{#if shown}
	<div class="w-96 h-96 bg-blue-900 bg-opacity-75 m-auto border-4 border-gray-900 rounded">
		<button on:click={show}>X Close</button>
		<h1>Aikido Beginner’s Special</h1>

		<p>$90 includes</p>
		<p>2 months of unlimited training in Aikido Registration Gi – Uniform</p>
	</div>
{/if}
