<script>
  import { urlFor } from '$lib/image-url'
import { element } from 'svelte/internal';
  export let image;
  export let text;
</script>

<!-- You can't filter a background to grayscale without getting everything in the element, but you can fake it with blendmodes: https://css-tricks.com/apply-a-filter-to-a-background-image/ -->
<div
style="background-image: linear-gradient(black, black),
url('{urlFor(image).width(2400).height(1600)}');   background-blend-mode: saturation;
"
class=" w-full h-vh50 bg-cover bg-center flex items-end  justify-center border-b-4 border-gray-900 ">

{#if text}
<h1 class="font-Montserrat text-4xl md:text-5xl text-gray-50 p-8 w-full text-center uppercase bg-brutalred  bg-opacity-70 border-t-2 border-gray-900" >{text}</h1>
{/if}
</div>