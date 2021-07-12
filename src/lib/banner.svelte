<script>
	import { quintOut } from 'svelte/easing';
	import { fade, draw } from 'svelte/transition';
	import { gateInner, gateOuter, window1, window2, outer } from '$lib/shape';
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => (visible = true));
</script>

{#if visible}
<div class="grid gap-4 justify-items-center">
	<div class="w-3/4 md:w-1/2 xl:w-1/4 self-end">
		<svg
			width="100px"
			height="100px"
			preserveAspectRatio="none" 

			class="w-full h-auto"
			viewBox="20 37 168 168"
			version="1.1"
			id="svg15898"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs id="defs15895" />
			<g>
				<path
					in:fade={{ duration: 2000, delay: 800, easing: quintOut }}
					id="path9676"
					style="fill:#ff0000;fill-opacity:1;stroke:#ff0000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
					d={outer}
					transform="scale(0.26458333)"
				/>

				<path
					in:draw={{ duration: 1000 }}
					id="path658-6-2"
					style="fill:none;fill-opacity:1;stroke:#ff0000;stroke-width:2.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
					d={window1}
					transform="scale(0.26458333)"
				/>
				<path
					in:draw={{ duration: 1000 }}
					id="path21900"
					style="fill:none;fill-opacity:1;stroke:#ff0000;stroke-width:2.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
					d={window2}
					transform="scale(0.26458333)"
				/>
				<path
					in:draw={{ duration: 1000 }}
					id="path21898"
					style="fill:none;fill-opacity:1;stroke:#ff0000;stroke-width:2.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
					d={gateOuter}
					transform="scale(0.26458333)"
				/>
				<path
					in:draw={{ duration: 1000 }}
					id="path21894"
					style="fill:none;fill-opacity:1;stroke:#ff0000;stroke-width:2.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
					d={gateInner}
					transform="scale(0.26458333)"
				/>
			</g>
		</svg>
	</div>
		
	<div>
			<div class="text-center">
				{#each 'ASHEVILLE' as char, i}
					<span
						in:fade={{ delay: 1000 + i * 150, duration: 800 }}
						class="text-4xl sm:text-6xl font-Montserrat text-gray-900">{char}</span
					>
				{/each}
			</div>
			<div class="text-center">
				{#each 'AIKIKAI' as char, i}
					<span
						in:fade={{ delay: 1000 + i * 150, duration: 800 }}
						class="text-4xl sm:text-6xl font-Montserrat text-gray-900">{char}</span
					>
				{/each}
			</div>
		</div>

</div>
{/if}
